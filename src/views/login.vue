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
        <Form class="p-4 w-100">
          <div class="mb-3 text-start">
            <label for="exampleInputEmail1" class="form-label"
              ><i class="fas fa-at"></i> Endereço de Email</label
            >
            <Field
              v-model="login.usuario"
              name="loginUsuario"
              :rules="validaUsuario"
              type="email"
              class="form-control shadow inputs"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <ErrorMessage name="loginUsuario" class="text-danger" />
          </div>
          <div class="mb-3 text-start">
            <label for="inputLoginSenha" class="form-label"
              ><i class="fas fa-key"></i> Senha</label
            >
            <Field
              v-model="login.senha"
              name="loginSenha"
              :rules="validaSenha1"
              type="password"
              class="form-control shadow inputs"
              id="inputLoginSenha"
            />
            <ErrorMessage name="loginSenha" class="text-danger" />
          </div>
          <div
            id="buttons"
            class="py-3 w-100 d-flex flex-row justify-content-center"
          >
            <button
              type="submit"
              @click.prevent="$router.push('dashboard/resumo')"
              class="btn btn-md shadow buttons"
              id="buttonlogin"
            >
              <i class="fas fa-unlock-alt"></i>
              Fazer Login
            </button>
            <a id="btnlogingoogle" class="btn btn-md ms-1 border shadow buttons"
              ><i class="fab fa-google me-1"></i> Login com Google</a
            >
            <button
              @click.prevent="modalCadastro = true"
              class="btn btn-md btn-warning border shadow ms-1 buttons"
              id="btncadastrarse"
            >
              <i class="fas fa-user-plus"></i>
              Cadastrar-se
            </button>
          </div>
        </Form>
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
        <Form @submit="cadastraUsuario" class="p-4">
          <div class="mb-3 text-start">
            <label for="inputCadastraUsuario" class="form-label"
              ><i class="fas fa-at"></i> Endereço de Email</label
            >
            <Field
              v-model="cadastra.usuario"
              name="cadastraUsuario"
              :rules="validaUsuario"
              type="email"
              class="form-control shadow"
              id="inputCadastraUsuario"
              aria-describedby="emailHelp"
            />
            <ErrorMessage name="cadastraUsuario" class="text-danger" />
          </div>
          <div class="mb-3 text-start">
            <label for="inputSenha1" class="form-label"
              ><i class="fas fa-key"></i> Senha</label
            >
            <Field
              v-model="cadastra.senha1"
              name="senha1"
              :rules="validaSenha1"
              type="password"
              class="form-control shadow"
              id="inputSenha1"
            />
            <ErrorMessage name="senha1" class="text-danger" />
          </div>
          <div class="mb-3 text-start">
            <label for="inputSenha2" class="form-label"
              ><i class="fas fa-key"></i> Repita a Senha</label
            >
            <Field
              v-model="cadastra.senha2"
              name="senha2"
              :rules="validaSenha2"
              type="password"
              class="form-control shadow"
              id="inputSenha2"
            />
            <ErrorMessage name="senha2" class="text-danger" />
          </div>
          <div id="buttons" class="text-start w-100">
            <button
              class="btn btn-lg btn-warning border shadow mt-2"
            >
              <i class="fas fa-user-plus"></i>
              Cadastrar-se
            </button>
          </div>
        </Form>
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
import { Field, Form, ErrorMessage } from "vee-validate";

export default {
  name: "loginUser",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      modalCadastro: false,
      cadastra: {
        usuario: "",
        senha1: "",
        senha2: "",
      },
      login: {
        usuario: "",
        senha: "",
      },
    };
  },
  methods: {
    cadastraUsuario() {
      console.log(this.cadastra);
      this.$toast.success(
        `Usuário ${this.cadastra.usuario} cadastrado com sucesso!`,
        { position: "top" }
      );
      this.modalCadastro = false;
    },
    validaUsuario(email) {
      let usuario = email.substring(0, email.indexOf("@"));
      let dominio = email.substring(email.indexOf("@") + 1, email.length);

      if (
        usuario.length >= 1 &&
        dominio.length >= 3 &&
        usuario.search("@") == -1 &&
        dominio.search("@") == -1 &&
        usuario.search(" ") == -1 &&
        dominio.search(" ") == -1 &&
        dominio.search(".") != -1 &&
        dominio.indexOf(".") >= 1 &&
        dominio.lastIndexOf(".") < dominio.length - 1
      ) {
        return true;
      }
      return "Email inválido";
    },
    validaSenha1(senha1) {
      if (senha1.length > 4) {
        return true;
      }
      return "Somente senha acima de 4 caracteres";
    },
    validaSenha2(senha2) {
      if (this.cadastra.senha1 == senha2) {
        return true;
      }
      return "Senhas não conferem";
    },
  },
};
</script>

<style scoped>
#btncadastrarse:hover {
  background: #eecf6c !important;
}
#btnlogingoogle:hover {
  background: rgb(245, 192, 192) !important;
}
#buttonlogin:hover {
  background: #68769b !important;
}
#buttonlogin {
  background: #99adde !important;
  color: white !important;
}

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