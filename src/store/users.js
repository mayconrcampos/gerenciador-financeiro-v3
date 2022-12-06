import axios from "axios"
const toast = require("@meforma/vue-toaster")

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
        },
        setUser(state, user) {
            state.user = user
        }

    },
    actions: {
        async createUser(context, user){
            context.commit("setSucesso", false)
            await axios.post("http://127.0.0.1:5000/users/", {
                "email": user.usuario,
                "password": user.senha2,
            }).then(() => {
                context.commit("setMsgResponse", `Usuário ${user.usuario} cadastrado com sucesso.`)
                context.commit("setSucesso", true)
            }).catch((err) => {
                context.commit("setMsgResponse", err.response.data.error)
                
            })
        },
        async goToGoogleAuthLink() {
            await axios.post("http://127.0.0.1:5000/users/auth/google")
            .then((resp) => {
                return window.location.href = resp.data.url
            })
        },
        async loginUser(context, user) {
            context.commit("setUser", {})
            context.commit("setSucesso", false)
            await axios.post("http://127.0.0.1:5000/users/login", user)
            .then((resp) => {
                // Gravar User State
                context.commit("setUser", {
                    "email": resp.data.email,
                    "id_user": resp.data.user_id,
                    "token": resp.data.token,
                    "logged": true,
                })
                // Gravar User na localStorage
                localStorage.setItem("user_logado", JSON.stringify(context.state.user))
                // Toast de Logado com sucesso Sucesso
                toast.createToaster().success(`Bem vindo(a), ${user.email}!`, { position: "top" })
                context.commit("setSucesso", true)
            })
            .catch((err) => {
                toast.createToaster().error(`${err.response.data.error} - ${err.response.status} ${err.response.statusText}`, { position: "top" })
            })
        },
        async logoutUser(context) {
            toast.createToaster().success(`Usuário deslogado com sucesso!`, { position: "top" })
            context.commit("setUser", {})    
            localStorage.removeItem("user_logado")
        } 

    },
    getters:{
        emailUser: (state) => {
            return state.user.email
        }
    }
}
