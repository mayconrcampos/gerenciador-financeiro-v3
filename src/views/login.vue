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
      <div id="formulario" class="col-6 m-auto">
        <Form @submit="loginUsuario" class="p-4 w-100">
          <div class="mb-3 text-start">
            <label for="inputLoginUsuario" class="form-label"
              ><i class="fas fa-at"></i> Endereço de Email</label
            >
            <Field
              v-model="login.usuario"
              name="loginUsuario"
              :rules="validaUsuario"
              type="email"
              class="form-control shadow inputs"
              id="inputLoginUsuario"
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
              class="btn btn-lg w-100 shadow buttons fs-5"
              id="buttonlogin"
            >
              <i class="fas fa-unlock-alt"></i>
              Fazer Login
            </button>
          </div>
          ou
          <div class="row m-auto">
            <a
              id="btnlogingoogle"
              @click="goToAuth"
              class="btn btn-lg border shadow buttons mb-2 fs-5"
              ><i class="fab fa-google me-1"></i> Login com Google</a
            >
            <button
              @click.prevent="modalCadastro = true"
              class="btn btn-lg border shadow buttons fs-5 btncadastrarse"
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
              class="btn btn-lg btn-warning border shadow mt-2 btncadastrarse"
            >
              <i class="fas fa-user-plus"></i>
              Cadastrar-se
            </button>
          </div>
        </Form>
      </div>
    </m-dialog>
    <footerPage />
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import footerPage from "@/components/footerPage.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "loginUser",
  components: {
    Field,
    Form,
    ErrorMessage,
    footerPage,
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
  computed: {
    ...mapState({
      msgResponse: (state) => state.users.msgResponse,
      sucesso: (state) => state.users.sucesso,
    }),
  },
  methods: {
    ...mapActions(["createUser", "goToGoogleAuthLink", "loginUser"]),
    goToAuth() {
      this.goToGoogleAuthLink()
    },
    loginUsuario() {
      this.$isLoading(true)
      this.loginUser({
        "email": this.login.usuario,
        "password": this.login.senha
      })
      .then(() => {
        if (this.sucesso) {
          this.$router.push("/dashboard/profile")  
          this.$isLoading(false)
        } else {
          this.$isLoading(false)
          this.limpaCamposLogin()
        }
      })
      .catch((e) => {
        this.$isLoading(false)
        console.error("err: ", e)
      })
    },
    limpaCamposLogin() {
      this.login = {
        "usuario": "",
        "senha": ""
      }
    },
    cadastraUsuario() {
      this.createUser(this.cadastra)
        .then(() => {
          if (this.sucesso) {
            this.$toast.success(this.msgResponse, {
              position: "top-right",
              duration: 5000,
              dismissible: true,
            });
          } else {
            this.$toast.warning(this.msgResponse, {
              position: "top-right",
              duration: 5000,
              dismissible: true,
            });
          }
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          this.cadastra = {
            "usuario": "",
            "senha1": "",
            "senha2": "",
          };
          this.modalCadastro = false;
        })
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
#inputCadastraUsuario {
  border: 2px solid #2c7755;
  background: white;
}

#inputSenha1 {
  border: 2px solid #2c7755;
  background: white;
}

#inputSenha2 {
  border: 2px solid #2c7755;
  background: white;
}

#inputLoginUsuario {
  border: 2px solid #2c7755;
  background: white;
}

#inputLoginSenha {
  border: 2px solid #2c7755;
  background: white;
}

.btncadastrarse:hover {
  background: #2b5794 !important;
}

.btncadastrarse {
  background: #183153;
  color: white;
}

#btnlogingoogle:hover {
  background: rgb(245, 192, 192) !important;
}

#buttonlogin:hover {
  background: #2c7755 !important;
  color: white !important;
}

#buttonlogin {
  background: #42b983 !important;
  color: white !important;
  font-size: 1.3em;
}

input {
  padding: 15px !important;
  font-size: 1.3em !important;
}

@media (max-width: 1380px) {
  #boxlogin {
    display: block !important;
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
    width: 70% !important;
  }
}
@media (max-width: 650px) {
  form {
    width: 100% !important;
  }

  #boxlogin {
    display: block !important;
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