import axios from "axios"

export default {
    state: {
        user: {},
        logged: {
            token: "",
            email: "",
            user_id: ""
        },
        sucesso: false,
        msgResponse: "",

    },
    mutations: {
        setLogged(state, value) {
            state.logged = value
        },
        setSucesso(state, status) {
            state.sucesso = status
        },
        setMsgResponse(state, msg) {
            state.msgResponse = msg
        }

    },
    actions: {
        async createUser(context, user){
            context.commit("setSucesso", false)
            await axios.post("http://127.0.0.1:5000/users/", {
                "email": user.usuario,
                "password": user.senha2,
            }).then((res) => {
                console.log(res.data)
                context.commit("setMsgResponse", `Usuário ${user.usuario} cadastrado com sucesso.`)
                context.commit("setSucesso", true)
            }).catch((err) => {
                context.commit("setMsgResponse", err.response.data.error)
                
            })
        } 

    },
    getters:{

    }
}
