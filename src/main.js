import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toaster from '@meforma/vue-toaster'
import VueCookies from 'vue-cookies'
import MDialogPlugin from 'vue-m-dialog'
import 'vue-m-dialog/dist/style.css'

createApp(App)
.use(store)
.use(router)
.use(MDialogPlugin)
.use(Toaster)
.use(VueCookies)
.mount('#app')
