import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import Toaster from '@meforma/vue-toaster'
import VueCookies from 'vue-cookies'
import MDialogPlugin from 'vue-m-dialog'
import 'vue-m-dialog/dist/style.css'

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
.use(MDialogPlugin)
.use(Toaster)
.use(VueCookies)
.mount('#app')
