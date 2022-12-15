import axios from "axios"
const toast = require("@meforma/vue-toaster")

export default {
    state: {
        sucesso: false,
        categorias: [],

    },
    mutations: {
        setSucesso(state, value) {
            state.sucesso = value
        },
        setCategorias(state, categoria) {
            state.categorias.push(categoria)
        },
        resetCategorias(state) {
            state.categorias = []
        }

    },
    actions: {
        async addCategoriaLancamento(context, categoria) {
            context.commit("setSucesso", false)
            let cat = {
                "categoria": categoria.categoria,
                "tipo": categoria.tipo,
                "id_user": categoria.id_user
            }

            await axios.post("http://127.0.0.1:5000/categoria/", cat, {
                headers: {
                    "Authorization": `Bearer ${categoria.token}`
                }
            })
            .then((res) => {
                console.log(res.data)
                toast.createToaster().success(`Categoria ${categoria.categoria} cadastrada com sucesso!`, { position: "top" })
                context.commit("setSucesso", true)
            })
            .catch((e) => {
                console.error("ERROR ", e)
                toast.createToaster().error(`Erro ao cadastrar categoria de lançamento!`, { position: "top" })
            })
        },
        async carregarCategoriasReceitas(context, user) {
            context.commit("resetCategorias")
            await axios.get(`http://127.0.0.1:5000/categoria/`, {
                params: {
                    "tipo": "1",
                    "id_user": user.id_user,
                },
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })
            .then((resp) => {
                console.log(resp.data)
            })
            .catch((e) => {
                console.log("ERRO", e)
            })
        },
        async carregarCategoriasDespesas(context, user) {
            context.commit("resetCategorias")
            await axios.get(`http://127.0.0.1:5000/categoria/`, {
                params: {
                    "tipo": "2",
                    "id_user": user.id_user,
                },
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })
            .then((resp) => {
                console.log(resp.data)
            })
            .catch((e) => {
                console.log("ERRO", e)
            })
        }

    },
    getters:{
        sucesso: (state) => {
            return state.sucesso
        },
        listaDespesas: (state) => {
            state.categorias.filters((item) => {
                return item.tipo == "2"
            })
        },
        listaReceitas: (state) => {
            state.categorias.filters((item) => {
                return item.tipo == "1"
            })
        },
    }
}