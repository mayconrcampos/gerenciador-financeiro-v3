import axios from "axios"
const toast = require("@meforma/vue-toaster")

export default {
    state: {
        sucesso: false,
        receitas: [],
        despesas: [],

    },
    mutations: {
        setSucesso(state, value) {
            state.sucesso = value
        },
        setReceitas(state, categoria) {
            state.receitas.push(categoria)
        },
        setDespesas(state, categoria) {
            state.despesas.push(categoria)
        },
        resetReceitas(state) {
            state.receitas = []
        },
        resetDespesas(state) {
            state.despesas = []
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
            .then(() => {
                toast.createToaster().success(`Categoria ${categoria.categoria} cadastrada com sucesso!`, { position: "top" })
                context.commit("setSucesso", true)
            })
            .catch((e) => {
                console.error("ERROR ", e)
                toast.createToaster().error(`Erro ao cadastrar categoria de lançamento!`, { position: "top" })
            })
        },
        async carregarCategoriasReceitas(context, user) {
            context.commit("resetReceitas")
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
                resp.data.entradas.forEach((element) => {
                    context.commit("setReceitas", element)
                })
            })
            .catch((e) => {
                console.log("ERRO", e)
            })
        },
        async carregarCategoriasDespesas(context, user) {
            context.commit("resetDespesas")
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
                resp.data.entradas.forEach(element => {
                    context.commit("setDespesas", element)
                });
            })
            .catch((e) => {
                console.log("ERRO", e)
            })
        },
        async deleteCategoria(context, payload) {
            context.commit("setSucesso", false)
            await axios.delete("http://127.0.0.1:5000/categoria/", {
                params: {
                    "id_categoria": payload.id_categoria,
                },
                headers: {
                    "Authorization": `Bearer ${payload.token}`
                }
            })
            .then(() => {
                toast.createToaster().success(`Categoria excluída com sucesso!`, { position: "top" })
                context.commit("setSucesso", true)
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
            return state.despesas
        },
        listaReceitas: (state) => {
            return state.receitas
        },
        qtdeReceitas: (state) => {
            return state.receitas.length
        },
        qtdeDespesas: (state) => {
            return state.despesas.length
        }
    }
}