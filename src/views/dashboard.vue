<template>
  <div class="container-md bg-white rounded-4 shadow mt-5 p-5">
    <nav class="navbar navbar-expand-md bg-white">
      <div class="container-fluid">
        <a class="navbar-brand pe-3">
          <h1><i class="fas fa-dollar-sign mt-3"></i></h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <div class="navbar-nav">
            <router-link class="nav-link fs-5 me-2" to="/dashboard/addConta"
              ><i class="fas fa-plus"></i> Add Transação</router-link
            >
            <router-link class="nav-link fs-5 me-2" to="/dashboard/entradas"
              ><i class="fas fa-sign-in-alt"></i> Entradas</router-link
            >
            <router-link class="nav-link fs-5 me-2" to="/dashboard/saidas"
              ><i class="fas fa-sign-out-alt"></i> Saídas</router-link
            >
            <router-link class="nav-link fs-5 me-2" to="/dashboard/resumo"
              ><i class="fas fa-list"></i> Resumo</router-link
            >
            <router-link class="nav-link fs-5 me-2" to="/dashboard/profile"
              ><i class="fas fa-user"></i> Minha Conta</router-link
            >
            <router-link class="nav-link fs-5" to="/"
              ><i class="fas fa-door-open"></i> Sair</router-link
            >
          </div>
        </div>
      </div>
    </nav>
    <hr />
    <div class="text-start ms-3">
      <small>Usuário: maycon.campos@gmail.com</small>
    </div>
    <div class="row mt-5">
      <router-view></router-view>
    </div>
    <footer class="footer mt-auto">
      <footerPage />
    </footer>
  </div>
</template>

<script>
import footerPage from "@/components/footerPage.vue";
export default {
  name: "dashBoard",
  components: {
    footerPage,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.nav-link:hover {
  color: white !important;
  background: #42b983;
  border-radius: 8px 8px 8px;
  transition: all 0.5s;
}
.nav-link:focus,
.nav-link:active {
  color: white !important;
  background: #42b983;
  border-radius: 8px 8px 8px !important;
  box-shadow: 5px 5px 15px rgb(121, 118, 118);
}
@media (max-width: 1380px) {
  #imagemlogo {
    display: none !important;
  }
}
</style>