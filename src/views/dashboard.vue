<template>
  <div class="container-lg bg-white rounded-4 shadow mt-5 p-5">
    <nav class="navbar navbar-expand-md bg-white">
      <div class="container-fluid">
        <a class="navbar-brand">
          <img src="@/assets/logomark.png" width="40" alt="money" class="me-5">
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav selected">
            <router-link class="nav-link fs-4" to="/dashboard/entradas">Entradas</router-link>
            <router-link class="nav-link fs-4" to="/dashboard/saidas">Saídas</router-link>
            <router-link class="nav-link fs-4" to="/dashboard/resumo">Resumo</router-link>
            <router-link class="nav-link fs-4" to="/">Minha Conta</router-link>
            <router-link class="nav-link fs-4" to="/">Sair</router-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="row mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashBoard",
};
</script>

<style scoped>
@media (max-width: 1380px) {
  #imagemlogo {
    display: none !important;
  }
}
</style>