import { createRouter, createWebHashHistory } from 'vue-router'
import jwt_decode from "jwt-decode";
import loginUser from "@/views/login"
import dashboard from "@/views/dashboard"
import entradas from "@/views/entradas"
import saidas from "@/views/saidas"
import resumos from "@/views/resumos"
import addConta from "@/views/addConta"
import profile from "@/views/profile"
import store from '@/store/users';
const toast = require("@meforma/vue-toaster")

const routes = [
  {
    path: '/:token?',
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

// Nomes das rotas
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

// Recebendo usuário logado via Google Auth
router.beforeEach((to, from, next) => {
  if (to.params.token) {
    let decoded = jwt_decode(to.params.token)
    let user = {
      "email": decoded.email,
      "id_user": decoded.user_id,
      "token": to.params.token,
      "logged": true,
    }
    store.mutations.setUser(store.state.user, user)

    localStorage.setItem("user_logado", JSON.stringify(user))

    toast.createToaster().success(`Bem vindo(a), ${user.email}!`, { position: "top" })

    next("/dashboard/profile")
  } else {
    next()
  }
})

export default router
