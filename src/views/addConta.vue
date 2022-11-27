<template>
  <div class="container-md px-5">
    <div class="fs-5 ms-2 mb-2 text-start">
      <i class="fas fa-plus"></i>
      Lance aqui seus ganhos e gastos
    </div>
    <form id="contactForm">
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
        <label for="categorias" class="inputLabels">Despesa ou Receita</label>
      </div>
      <div class="form-floating mb-3">
        <input
          v-model="descricao"
          class="form-control inputsFields"
          id="descricao"
          type="text"
          placeholder="Descrição"
        />
        <label for="descricao" class="inputLabels">Descrição</label>
      </div>
      <div class="form-floating mb-3">
        <input
          v-model="valor"
          class="form-control inputsFields"
          id="valorR"
          type="text"
          placeholder="Valor R$"
        />
        <label for="valorR" class="inputLabels">Valor R$</label>
      </div>
      <div class="form-floating mb-3">
        <input
          v-model="data"
          class="form-control inputsFields"
          id="data"
          type="date"
          placeholder="Data"
        />
        <label for="data" class="inputLabels">Data</label>
      </div>
      <div class="form-floating mb-3">
        <select
          v-model="categoria"
          class="form-select inputsFields"
          id="categorias"
          aria-label="Categorias"
          :disabled="categorias.length == 0"
        >
          <option v-for="(cat, key) in categorias" :key="key" :value="cat">
            {{ cat }}
          </option>
        </select>
        <label for="categorias" class="inputLabels">Categorias de lançamento</label>
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
        <label for="comentarios" class="inputLabels">Comentários</label>
      </div>
      <div class="d-grid">
        <button class="btn btn-lg" id="submitButton" type="submit">
          Cadastrar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
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
      categoriaEntrada: ["Salário", "Prestação de Serviços"],
      categoriaSaida: ["Mercado", "Taxas", "Gasolina"],
      comentario: "",
    };
  },
  watch: {
    tipo() {
      if (this.tipo == "1") {
        this.categorias = this.categoriaEntrada;
      } else {
        this.categorias = this.categoriaSaida;
      }
    },
  },
  mounted() {
    this.categorias = this.categoriaEntrada
  },
};
</script>

<style scoped>
.inputsFields:focus {
  font-size: 1.1em;
}
.inputsFields:hover {
  background: #42b983;
  color: white;
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