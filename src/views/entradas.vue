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
            :class="contaVencida(receita.data.$date)"
          >
            <th scope="row">{{ receita.descricao }}</th>
            <td class="text-start">{{ valorFormatado(receita.valor) }}</td>
            <td>{{ formatDate(receita.data.$date) }}</td>
          </tr>
          <div
            class="alert alert-danger"
            v-if="tamanhoListaTransacoesReceitas == 0"
          >
            Nenhum registro cadastrado
          </div>
          <div class="alert d-flex">
            <div class="col-md alert alert-success">
              Valor lançado
              {{
                valorFormatado(
                  valorTotalReceitasLancadas(listaTransacoesReceitas)
                )
              }}
            </div>
            <div></div>
            <div class="col-md alert alert-secondary">Será lançado hoje
              {{
                valorFormatado(
                  valorTotalReceitasVenceHoje(listaTransacoesReceitas)
                )
              }}
            </div>
            <div></div>
            <div class="col-md alert alert-danger">Valor não lançado
              {{
                valorFormatado(
                  valorTotalReceitasNaoLancadas(listaTransacoesReceitas)
                )
              }}
            </div>
          </div>
        </tbody>
      </table>
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