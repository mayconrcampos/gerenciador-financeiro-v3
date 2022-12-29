<template>
  <div class="container-lg bg-white rounded-4 shadow mt-5 p-5">
    <div class="container">
      GOOGLE ADS ESPAÇO RESERVADO
    </div>
    <nav class="navbar navbar-expand-md bg-white">
      <div class="container-fluid">
        <a class="navbar-brand pe-3">
          <h1><i class="fas fa-dollar-sign mt-3" id="simbolo"></i></h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          :style="`${
            navBarShow
              ? 'background:#42b983;color:white;'
              : 'background:#42b983;color:#black'
          }`"
          @click="collapseNavBar()"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <Transition>
          <div
            v-if="navBarShow || windowWidth > 768"
            class="navbar-collapse"
            id=""
          >
            <div
              :class="`navbar-nav d-flex ${
                windowWidth > 770 ? 'flex-row' : 'flex-column'
              }`"
            >
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
              <a id="sair" class="nav-link fs-5" @click="sair()"
                ><i class="fas fa-door-open"></i> Sair</a
              >
            </div>
          </div>
        </Transition>
      </div>
    </nav>
    <hr />
    <div class="text-start me-4">
      <small class="badge bg-white text-dark"><i class="fas fa-user"></i> {{ emailUser }}</small>
    </div>
    <div class="row mt-5">
      <router-view></router-view>
    </div>
    <footer class="footer mt-auto">
      <footerPage />
    </footer>
    <div class="container">
      GOOGLE ADS ESPAÇO RESERVADO
    </div>
  </div>
</template>

<script>
import footerPage from "@/components/footerPage.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "dashBoard",
  components: {
    footerPage,
  },
  data() {
    return {
      navBarShow: false,
      windowWidth: "",
    };
  },
  computed: {
    ...mapGetters(["emailUser", "showUser"]),
  },
  methods: {
    ...mapMutations(["setUser"]),
    ...mapActions(["logoutUser"]),
    sair() {
      this.logoutUser().then(() => {
        this.$router.push("/");
      });
    },
    collapseNavBar() {
      this.navBarShow = !this.navBarShow;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    if (localStorage.getItem("user_logado") && !this.showUser) {
      this.setUser({
        email: JSON.parse(localStorage.getItem("user_logado")).email,
        token: JSON.parse(localStorage.getItem("user_logado")).token,
        id_user: JSON.parse(localStorage.getItem("user_logado")).id_user,
        exp: JSON.parse(localStorage.getItem("user_logado")).exp,
        logged: true,
      });
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
#sair {
  cursor: pointer;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
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
#simbolo {
  color: #42b983;
}
</style>