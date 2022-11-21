<template>
  <div id="boxlogin" class="container-lg bg-white rounded-4 shadow mt-5 p-5">
    <div class="row">
      <img
        src="@/assets/logo.png"
        alt="logo"
        class="img-fluid w-50 m-auto p-3"
        id="imagemlogo"
      />
    </div>
    <div class="row mt-5">
      <div id="cadeado" class="col-3">
        <img
          src="@/assets/cadeado.png"
          class="img-fluid w-50 mt-5"
          alt="grana"
        />
      </div>
      <div id="formulario" class="col-6">
        <form class="p-4 w-100">
          <div class="mb-3 text-start">
            <label for="exampleInputEmail1" class="form-label"
              >Endereço de Email</label
            >
            <input
              type="email"
              class="form-control shadow inputs"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 text-start">
            <label for="exampleInputPassword1" class="form-label">Senha</label>
            <input
              type="password"
              class="form-control shadow inputs"
              id="exampleInputPassword1"
            />
          </div>
          <div id="buttons" class="py-3 w-100 d-flex flex-row justify-content-center">
            <button
              type="submit"
              @click.prevent="$router.push('dashboard/resumo')"
              class="btn btn-primary shadow buttons"
            >
              <i class="fas fa-unlock-alt"></i>
              Fazer Login
            </button>
            <a href="#" class="btn ms-1 border shadow buttons"
              ><i class="fab fa-google me-1"></i> Login com Google</a
            >
            <button
              @click.prevent="modalCadastro = true"
              class="btn btn-warning border shadow ms-1 buttons"
            >
              <i class="fas fa-user-plus"></i>
              Cadastrar-se
            </button>
          </div>
        </form>
      </div>
    </div>
    <!--------MODAL CADASTRO--------->
    <m-dialog
      v-model="modalCadastro"
      title="Cadastro de Usuário"
      :draggable="true"
    >
      <div class="row text-center">
        <h5><i class="fas fa-user-plus"></i> Cadastre-se para acessar</h5>
      </div>
      <div class="row">
        <form class="p-4">
          <div class="mb-3 text-start">
            <label for="exampleInputEmail1" class="form-label"
              >Endereço de Email</label
            >
            <input
              type="email"
              class="form-control shadow"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 text-start">
            <label for="exampleInputPassword1" class="form-label">Senha</label>
            <input
              type="password"
              class="form-control shadow"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 text-start">
            <label for="exampleInputPassword1" class="form-label"
              >Repita a Senha</label
            >
            <input
              type="password"
              class="form-control shadow"
              id="exampleInputPassword1"
            />
          </div>
          <div id="buttons" class="text-start w-100">
            <button class="btn btn-warning border shadow mt-2">
              <i class="fas fa-user-plus"></i>
              Cadastrar-se
            </button>
          </div>
        </form>
      </div>
    </m-dialog>
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">Features</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">Pricing</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">FAQs</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">About</a>
        </li>
      </ul>
      <p class="text-center text-muted">© 2022 Gerenciador Financeiro</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "loginUser",
  data() {
    return {
      modalCadastro: false,
    };
  },
};
</script>

<style scoped>
input {
  padding: 15px !important;
  font-size: 1.3em !important;
}
@media (max-width: 1380px) {
  #boxlogin {
    display: block !important;
  }
  #cadeado {
    display: none;
  }
  #formulario {
    width: 70% !important;
    margin: auto;
  }
  #buttons {
    display: block !important;
  }
  .buttons {
    width: 100%;
    margin: auto !important;
    margin-top: 3px !important;
  }
  .inputs {
    width: 100% !important;
  }
  #imagemlogo {
    width: 100% !important;
  }
}
@media (max-width: 650px) {
  form {
    width: 100% !important;
  }
  #boxlogin {
    display: block !important;
  }
  #cadeado {
    display: none;
  }
  #formulario {
    width: 100% !important;
  }
  #buttons {
    display: block !important;
  }
  .buttons {
    width: 100%;
    margin: auto !important;
    margin-top: 3px !important;
  }
  .inputs {
    width: 100% !important;
  }
  #imagemlogo {
    width: 100% !important;
  }
}
</style>