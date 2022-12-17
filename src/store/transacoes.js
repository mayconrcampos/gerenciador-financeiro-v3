import axios from "axios"
const toast = require("@meforma/vue-toaster")

export default {
    state: {
        transacoes: [],
        transacaoReceitas: [],
        transacaoDespesas: [],
        transacaoSucesso: false,
    },
    mutations: {
        setTransacaoSucesso(state, value) {
            state.transacaoSucesso = value
        },
        setTransacao(state, transacao) {
            state.transacoes.push(transacao)
        },
        setTransacaoReceitas(state, receita) {
            state.transacaoReceitas.push(receita)
        },
        setTransacaoDespesas(state, despesa) {
            state.transacaoDespesas.push(despesa)
        },
        resetTransacaoReceitas(state) {
            state.transacaoReceitas = []
        },
        resetTransacaoDespesas(state) {
            state.transacaoDespesas = []
        }
    },
    actions: {
        async addTransacao(context, payload) {
            context.commit("setTransacaoSucesso", false)

            let transacao = {
                "tipo": payload.tipo,
                "descricao": payload.descricao,
                "valor": payload.valor,
                "data": payload.data,
                "categoria": payload.categoria,
                "comentario": payload.comentario,
                "id_user": payload.id_user,
            }
            await axios.post("http://127.0.0.1:5000/transacao/", transacao, {
                headers: {
                    "Authorization": `Bearer ${payload.token}`
                }
            }).then(() => {
                toast.createToaster().success(`Transação cadastrada com sucesso!`, { position: "top" })
                context.commit("setTransacaoSucesso", true)
            }).catch((e) => {
                console.error("ERRO", e)
            })
        },
        async carregarTransacoesReceitas(context, payload) {
            context.commit("resetTransacaoReceitas")
            await axios.get("http://127.0.0.1:5000/transacao/tipo", {
                params: {
                    "tipo": "1",
                    "id_user": payload.id_user,
                },
                headers: {
                    "Authorization": `Bearer ${payload.token}`
                }
            })
            .then((resp) => {
                resp.data.records.forEach(element => {
                    context.commit("setTransacaoReceitas", element)
                });
            })
            .catch((e) => {
                console.error("ERRO ", e)
            })
        },
        async carregarTransacoesDespesas(context, payload) {
            context.commit("resetTransacaoDespesas")
            await axios.get("http://127.0.0.1:5000/transacao/", {
                params: {
                    "tipo": "2",
                    "id_user": payload.id_user,
                },
                headers: {
                    "Authorization": `Bearer ${payload.token}`
                }
            })
            .then((resp) => {
                resp.data.records.forEach(element => {
                    context.commit("setTransacaoDespesas", element)
                });
            })
            .catch((e) => {
                console.error("ERRO ", e)
            })
        }

    },
    getters:{
        transacaoSucesso: (state) => {
            return state.transacaoSucesso
        },
        listaTransacoesReceitas: (state) => {
            return state.transacaoReceitas
        },
        listaTransacoesDespesas: (state) => {
            return state.transacaoDespesas
        },
        tamanhoListaTransacoesReceiras: (state) => {
            return state.transacaoReceitas.length
        },
        tamanhoListaTransacoesDespesas: (state) => {
            return state.transacaoDespesas.length
        }
    }
}