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
            :class="contaVencida(receita.data.$date)"
          >
            <th scope="row">{{ receita.descricao }}</th>
            <td class="text-start">{{ valorFormatado(receita.valor) }}</td>
            <td>{{ formatDate(receita.data.$date) }}</td>
          </tr>
          <td class="alert alert-light">Total em conta (R$)</td>
          <td class="alert alert-light text-start">
            {{ valorFormatado(valorTotalReceitas) }}
          </td>
        </tbody>
      </table>
      <div
        class="alert alert-danger"
        v-if="tamanhoListaTransacoesReceitas == 0"
      >
        Nenhum registro cadastrado
      </div>
      <div class="row w-100 m-auto">
        <div class="col-md-4 alert alert-success">Ja foi lançado</div>
        <div class="col-md-4 alert alert-secondary">Será lançado hoje</div>
        <div class="col-md-4 alert alert-danger">Ainda não foi lançado</div>
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
    contaVencida(date) {
      let hoje = new Date();
      let vencimento = new Date(date);
      hoje = hoje.toISOString();
      vencimento = vencimento.toISOString();

      let hoje_ano = hoje.slice(0, 4);
      let hoje_mes = hoje.slice(5, 7);
      let hoje_dia = hoje.slice(8, 10);

      let vencto_ano = vencimento.slice(0, 4);
      let vencto_mes = vencimento.slice(5, 7);
      let vencto_dia = vencimento.slice(8, 10);

      let dia_hoje = `${hoje_ano}-${hoje_mes}-${hoje_dia}`;
      let dia_vencimento = `${vencto_ano}-${vencto_mes}-${vencto_dia}`;

      if (new Date(dia_hoje) < new Date(dia_vencimento)) {
        return "alert alert-danger";
      } else if (dia_hoje == dia_vencimento) {
        return "alert alert-secondary";
      } else {
        return "alert alert-success";
      }
    },
    valorFormatado(valor) {
      let valorFormatado = valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      return valorFormatado;
    },
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