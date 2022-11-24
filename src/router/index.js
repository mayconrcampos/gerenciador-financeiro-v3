import { createRouter, createWebHashHistory } from 'vue-router'
import loginUser from "@/views/login"
import dashboard from "@/views/dashboard"
import entradas from "@/views/entradas"
import saidas from "@/views/saidas"
import resumos from "@/views/resumos"
import addConta from "@/views/addConta"
import profile from "@/views/profile"

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
        path: "addConta",
        component: addConta,
        meta: {
          title: "Adicionar Transação"
        }
      },
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
      },
      {
        path: "profile",
        component: profile,
        meta: {
          title: "Minha Conta"
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
