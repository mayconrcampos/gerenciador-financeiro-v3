import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import Toaster from '@meforma/vue-toaster'
import VueCookies from 'vue-cookies'
import MDialogPlugin from 'vue-m-dialog'
import 'vue-m-dialog/dist/style.css'
import Loading from 'vue3-loading-screen'

// import stores Vuex
import users from "@/store/users"
import categorias from "@/store/categorias"
import transacoes from "@/store/transacoes"

const store = createStore({
    modules: {
        users,
        categorias,
        transacoes
    }
})

createApp(App)
.use(store)
.use(router)
.use(Loading, {
    bg: "#42b983",
    icon: "refresh",
    size: 3,
    icon_color: "white"
})
.use(MDialogPlugin)
.use(Toaster)
.use(VueCookies)
.mount('#app')
