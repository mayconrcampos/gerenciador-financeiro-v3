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

    <div class="table-responsive mt-3 rounded">
      <table class="table table-hover shadow">
        <thead id="tablehead">
          <tr>
            <th scope="col">Descrição</th>
            <th class="text-end" scope="col">Valor (R$)</th>
            <th scope="col">Data</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="receita in listaTransacoesReceitas"
            :key="receita._id.$oid"
            id="linhaTabela"
            @click="preencheEdicao(receita)"
            :class="contaVencida(receita.data.$date)"
          >
            <th class="text-start" scope="row">
              <i class="fas fa-check-circle me-5"></i>{{ receita.descricao }}
            </th>
            <td class="text-end">{{ valorFormatado(receita.valor) }}</td>
            <td>{{ formatDate(receita.data.$date) }}</td>
          </tr>
          <div
            class="alert alert-danger"
            v-if="tamanhoListaTransacoesReceitas == 0"
          >
            Nenhum registro cadastrado
          </div>
        </tbody>
      </table>
      <div class="row w-100 m-auto">
        <div class="col-md alert alert-success">
          <h3 class="d-flex flex-column">
            Valor lançado
            <span class="badge bg-success"
              ><i class="fas fa-cash-register"></i>

              {{
                valorFormatado(
                  valorTotalReceitasLancadas(listaTransacoesReceitas)
                )
              }}</span
            >
          </h3>
        </div>

        <div class="col-md alert alert-secondary">
          <h3 class="d-flex flex-column">
            Será lançado hoje
            <span class="badge bg-secondary"
              ><i class="fas fa-money-bill-wave-alt"></i>

              {{
                valorFormatado(
                  valorTotalReceitasVenceHoje(listaTransacoesReceitas)
                )
              }}</span
            >
          </h3>
        </div>

        <div class="col-md alert alert-danger">
          <h3 class="d-flex flex-column">
            Valor não lançado
            <span class="badge bg-danger"
              ><i class="fas fa-edit"></i>

              {{
                valorFormatado(
                  valorTotalReceitasNaoLancadas(listaTransacoesReceitas)
                )
              }}</span
            >
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import {
  valorFormatado,
  formatDate,
  contaVencida,
  valorTotalReceitasLancadas,
  valorTotalReceitasVenceHoje,
  valorTotalReceitasNaoLancadas,
} from "@/services/utils";
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
    valorFormatado,
    formatDate,
    contaVencida,
    valorTotalReceitasLancadas,
    valorTotalReceitasVenceHoje,
    valorTotalReceitasNaoLancadas,
    preencheEdicao(receita) {
      if (confirm("Deseja visualizar/editar detalhes desta transação?")) {
        this.setEmEdicao(true);
        this.setTransacaoEmEdicao(receita);
        this.$router.push("/dashboard/addConta");
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