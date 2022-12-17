<template>
  <div class="container-sm px-5">
    <div class="fs-5 ms-2 mb-2 text-start">
      <i class="fas fa-plus"></i>
      Lance aqui seus ganhos e gastos
    </div>
    <Form id="contactForm" @submit="addConta">
      <div class="form-floating mb-3">
        <select
          v-model="tipo"
          class="form-select inputsFields"
          id="categorias"
          aria-label="Categorias"
        >
          <option value="1">Entrada / Receita</option>
          <option value="2">Saída / Despesa</option>
        </select>
        <label for="categorias" class="inputLabels">
          <i v-if="tipo == '2'" class="fas fa-chevron-circle-up"></i>
          <i v-else class="fas fa-chevron-circle-down"></i>
          Despesa ou Receita
        </label>
      </div>
      <div class="form-floating mb-3">
        <Field
          v-model="descricao"
          name="descricao"
          :rules="validaDescricao"
          class="form-control inputsFields"
          id="descricao"
          type="text"
          placeholder="Descrição"
        />
        <label for="descricao" class="inputLabels"
          ><i class="far fa-sticky-note"></i> Descrição</label
        >
        <ErrorMessage name="descricao" class="text-danger" />
      </div>
      <div class="form-floating mb-3">
        <Field
          v-model="valor"
          name="valor"
          :rules="validaValor"
          class="form-control inputsFields"
          id="valorR"
          type="text"
          placeholder="Valor R$"
        />
        <label for="valorR" class="inputLabels"
          ><i class="fas fa-money-bill-wave-alt"></i> Valor (R$)</label
        >
        <ErrorMessage name="valor" class="text-danger" />
      </div>
      <div class="form-floating mb-3">
        <input
          v-model="data"
          class="form-control inputsFields"
          id="data"
          type="date"
          placeholder="Data"
        />
        <label for="data" class="inputLabels"
          ><i class="fas fa-calendar-alt"></i> Data</label
        >
      </div>
      <div class="form-floating mb-3">
        <Field
          v-model="categoria"
          name="categoria"
          as="select"
          :rules="validaCategoria"
          class="form-select inputsFields"
          id="categorias"
          aria-label="Categorias"
          :disabled="categorias.length == 0"
        >
          <option
            v-for="cat in categorias"
            :key="cat._id.$oid"
            :value="cat.categoria"
          >
            {{ cat.categoria }}
          </option>
        </Field>
        <label for="categorias" class="inputLabels">
          <i v-if="tipo == '2'" class="fas fa-chevron-circle-up"></i>
          <i v-else class="fas fa-chevron-circle-down"></i>
          Categorias de lançamento
        </label>
        <ErrorMessage name="categoria" class="text-danger" />
      </div>
      <div class="form-floating mb-3">
        <textarea
          v-model="comentario"
          class="form-control inputsFields"
          id="comentarios"
          type="text"
          placeholder="Comentários"
          style="height: 10rem"
        ></textarea>
        <label for="comentarios" class="inputLabels"
          ><i class="fas fa-pen"></i> Comentários</label
        >
      </div>
      <div class="d-grid">
        <button class="btn btn-lg" id="submitButton" type="submit">
          Cadastrar
        </button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "addConta",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      tipo: "1",
      descricao: "",
      valor: "",
      data: "",
      categoria: "",
      categorias: [],
      comentario: "",
    };
  },
  watch: {
    tipo() {
      if (this.tipo == "1") {
        this.carregarCategoriasReceitas(this.showUser).then(() => {
          this.categorias = this.listaReceitas;
        });
      } else {
        this.carregarCategoriasDespesas(this.showUser).then(() => {
          this.categorias = this.listaDespesas;
        });
      }
    },
  },
  computed: {
    ...mapGetters([
      "showUser",
      "transacaoSucesso",
      "listaDespesas",
      "listaReceitas",
    ]),
    tipoConta() {
      return this.tipo == "1" ? "Entrada Financeira" : "Saída Financeira";
    },
  },
  methods: {
    ...mapActions([
      "addTransacao",
      "carregarCategoriasReceitas",
      "carregarCategoriasDespesas",
      "carregarTransacoesReceitas",
      "carregarTransacoesDespesas"
    ]),
    addConta() {
      let payload = {
        tipo: this.tipo,
        descricao: this.descricao,
        valor: this.valor,
        data: this.data,
        categoria: this.categoria,
        comentario: this.comentario,
        token: this.showUser.token,
        id_user: this.showUser.id_user,
      };
      this.addTransacao(payload)
        .then(() => {
          if (this.transacaoSucesso) {
            if (this.tipo == "1") {
              this.carregarTransacoesReceitas(this.showUser)
              this.$router.push("/dashboard/entradas");
            } else {
              this.carregarTransacoesDespesas(this.showUser)
              this.$router.push("/dashboard/saidas");
            }
          }
        })
        .finally(() => {
          this.limparCampos();
        });
    },
    limparCampos() {
      this.tipo = "1";
      this.descricao = "";
      this.valor = "";
      this.data = "";
      this.categoria = "";
      this.comentario = "";
    },
    validaDescricao(value) {
      if (value.length > 2) {
        return true;
      }
      return "A descrição deve ter acima de 2 caracteres";
    },
    validaValor(value) {
      let num = value.replace(",", ".");
      if (isNaN(num) || value == "") {
        return "Valor não numérico.";
      }
      return true;
    },
    validaCategoria(value) {
      if (value) {
        return true;
      }
      return "Selecione uma categoria";
    },
  },
  mounted() {
    this.categorias = this.listaReceitas;
  },
};
</script>

<style scoped>
.inputsFields:focus {
  font-size: 1.1em;
  background: #dff3ea;
}
.inputsFields:hover {
  background: #8bd4b3;
}
.inputsFields {
  border: 2px solid #2c7755;
  background: white;
  font-size: 0.9em;
  font-weight: bold;
}

@media (max-width: 650px) {
  #radios {
    display: block !important;
  }
}
#submitButton {
  background: #42b983 !important;
  color: white !important;
  font-size: 1.5em;
  font-weight: bolder;
}
#submitButton:hover {
  background: #2c7755 !important;
  color: white !important;
  box-shadow: 5px 5px 15px rgb(121, 118, 118);
}
</style>