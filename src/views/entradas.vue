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
            <th class="text-start" scope="col">Valor (R$)</th>
            <th scope="col">Data</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="receita in listaTransacoesReceitas"
            :key="receita._id.$oid"
            id="linhaTabela"
            @click="preencheEdicao(receita)"
          >
            <th scope="row">{{ receita.descricao }}</th>
            <td class="text-start">{{ valorFormatado(receita.valor) }}</td>
            <td>{{ formatDate(receita.data.$date) }}</td>
          </tr>
          <td>Total (R$)</td>
          <td class="text-start">{{ valorFormatado(valorTotalReceitas) }}</td>
        </tbody>
      </table>
      <div
        class="alert alert-danger"
        v-if="tamanhoListaTransacoesReceitas == 0"
      >
        Nenhum registro cadastrado
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "entraDas",
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "tamanhoListaTransacoesReceitas",
      "showUser",
      "listaTransacoesReceitas",
      "valorTotalReceitas",
      "editando",
    ]),
  },

  methods: {
    ...mapActions(["carregarTransacoesReceitas"]),
    ...mapMutations([
      "setEmEdicao",
      "setTransacaoEmEdicao",
      "resetTransacaoEmEdicao",
    ]),
    formatDate(date) {
      let ano = date.slice(0, 4);
      let mes = date.slice(5, 7);
      let dia = date.slice(8, 10);
      let data = `${dia < 10 ? `0${dia}` : dia}/${
        mes < 10 ? `0${mes}` : mes
      }/${ano}`;
      return data;
    },
    valorFormatado(valor) {
      let valorFormatado = valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      return valorFormatado;
    },
    preencheEdicao(receita) {
      if (confirm("Deseja visualizar detalhes desta transação?")) {
        console.log(receita);
        this.setEmEdicao(true)
        this.setTransacaoEmEdicao(receita)
        this.$router.push("/dashboard/addConta")
      }
      
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style scoped>
#linhaTabela {
  cursor: pointer;
}
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