import { createRouter, createWebHashHistory } from 'vue-router'
import loginUser from "@/views/login"
import dashboard from "@/views/dashboard"
import entradas from "@/views/entradas"
import saidas from "@/views/saidas"
import resumos from "@/views/resumos"

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginUser,
    meta: {
      title: "Login Usuário"
    }
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,
    meta: {
      title: "Menu Dashboard"
    },
    children: [
      {
        path: "entradas",
        component: entradas,
        meta: {
          title: "Entradas Financeiras"
        }
      },
      {
        path: "saidas",
        component: saidas,
        meta: {
          title: "Saídas Financeiras",
        }
      },
      {
        path: "resumo",
        component: resumos,
        meta: {
          title: "Resumo Financeiro"
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
