import axios from "axios"

export default {
    state: {
        user: {},
        logged: {
            token: "",
            email: "",
            user_id: ""
        },
        sucesso: false

    },
    mutations: {
        setLogged(state, value) {
            state.logged = value
        },
        setSucesso(state, status) {
            state.sucesso = status
        } 

    },
    actions: {
        async createUser(context, user){
            context.commit("setSucesso", false)
            await axios.post("http://127.0.0.1:5000/users", {
                "name": user.name,
                "email": user.email,
                "password": user.password,
            }).then((res) => {
                console.log(res.data)
                context.commit("setSucesso", true)
            }).catch((err) => {
                console.log(err)
            })
        } 

    },
    getters:{

    }
}
