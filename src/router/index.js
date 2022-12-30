import { createRouter, createWebHashHistory } from "vue-router";
import jwt_decode from "jwt-decode";
import loginUser from "@/views/login";
import dashboard from "@/views/dashboard";
import entradas from "@/views/entradas";
import saidas from "@/views/saidas";
import resumos from "@/views/resumos";
import addConta from "@/views/addConta";
import profile from "@/views/profile";
import store from "@/store/users";
import storeTransactions from "@/store/transacoes";
const toast = require("@meforma/vue-toaster");

const routes = [
  {
    path: "/:token?",
    name: "login",
    component: loginUser,
    meta: {
      title: "Login Usuário",
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,
    meta: {
      title: "Menu Dashboard",
      auth: true,
    },
    children: [
      {
        path: "addConta",
        component: addConta,
        meta: {
          title: "Adicionar Transação",
        },
      },
      {
        path: "entradas",
        component: entradas,
        meta: {
          title: "Entradas Financeiras",
        },
      },
      {
        path: "saidas",
        component: saidas,
        meta: {
          title: "Saídas Financeiras",
        },
      },
      {
        path: "resumo",
        component: resumos,
        meta: {
          title: "Resumo Financeiro",
        },
      },
      {
        path: "profile",
        component: profile,
        meta: {
          title: "Minha Conta",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Nomes das rotas
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

// Recebendo usuário logado via Google Auth
router.beforeEach((to, from, next) => {
  if (to.params.token) {
    store.mutations.resetUser(store.state.user);
    let decoded = jwt_decode(to.params.token);
    let user = {
      email: decoded.email,
      id_user: decoded.user_id,
      token: to.params.token,
      exp: decoded.exp,
      logged: true,
    };
    localStorage.setItem("user_logado", JSON.stringify(user));

    toast
      .createToaster()
      .success(`Bem vindo(a), ${user.email}!`, { position: "top" });

    next("/dashboard/profile");
  } else {
    next();
  }
});

// Protegendo rotas para usuários logados
router.beforeEach((to, from, next) => {
  // Se rota tiver auth required mas não tiver logado
  if (to.meta.auth && !localStorage.getItem("user_logado")) {
    next("/");

    // Se rota não tiver auth required mas tiver logado
  } else if (!to.meta.auth && localStorage.getItem("user_logado")) {
    next("/dashboard/profile");

    // Se rota tiver auth required e usuário tiver logado
  } else {
    let now = Math.floor(Date.now() / 1000);
    let expires = "";
    if (localStorage.getItem("user_logado")) {
      expires = JSON.parse(localStorage.getItem("user_logado")).exp;
      // Se token tiver expirado ele remove user da store e da localStorage e redireciona para tela de login.
      if (now > expires) {
        store.mutations.setUser(store.state.user, {});

        localStorage.removeItem("user_logado");
        toast
          .createToaster()
          .warning(`Sua sessão expirou, favor refaça o login!`, {
            position: "top",
          });
        next("/");
      } else {
        next();
      }
    } else {
      next();
    }
  }
});

export default router;
