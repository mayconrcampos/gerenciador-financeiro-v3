<template>
  <div class="container">
    <div id="search" class="row">
      <div id="texto" class="col-4 align-self-center fs-4">
        <i class="fas fa-sign-in-alt"></i>
        Entradas Financeiras
      </div>
      <div id="filtrar" class="col-7 align-items-center d-flex">
        <i class="fas fa-search fs-4 me-2"></i>
        <input type="text" class="form-control fs-5" placeholder="Filtrar" />
      </div>
    </div>

    <div class="table-responsive mt-3">
      <table class="table table-hover shadow">
        <thead id="tablehead">
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Valor (R$)</th>
            <th scope="col">Data</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="receita in listaTransacoesReceitas" :key="receita._id.$oid">
            <th scope="row">{{ receita.descricao }}</th>
            <td>{{ receita.valor }}</td>
            <td>{{ formatDate(receita.data.$date) }}</td>
          </tr>
        </tbody>
      </table>
      <div
        class="alert alert-danger"
        v-if="tamanhoListaTransacoesReceiras == 0"
      >
        Nenhum registro cadastrado
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "entraDas",
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "tamanhoListaTransacoesReceiras",
      "showUser",
      "listaTransacoesReceitas",
    ]),
  },

  methods: {
    formatDate(date) {
      let ano = date.slice(0, 4);
      let mes = date.slice(5, 7);
      let dia = date.slice(8, 10);
      let data = `${dia}/${mes}/${ano}`;
      return data;
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style scoped>
@media (max-width: 650px) {
  #search {
    display: block !important;
    width: 100% !important;
  }
  #filtrar {
    width: 100% !important;
  }
  #texto {
    display: none !important;
  }
}
#tablehead {
  background-color: #42b983 !important;
  color: white !important;
  border-radius: 5px 5px 5px !important;
}
</style>