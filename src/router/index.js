import { createRouter, createWebHashHistory } from 'vue-router'
import loginUser from "@/views/login"

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginUser
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
