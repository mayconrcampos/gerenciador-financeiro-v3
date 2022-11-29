<template>
  <div class="container">
    <div class="row">
      <div class="card col-lg-12 align-items-center">
        <div class="row m-1 mt-3">
          <button
            class="btnAddCategoria btn fs-2 mb-4 shadow m-auto twoCards"
            @click="modalAddCategorias = true"
          >
            Inserir Categorias de Lançamentos
          </button>

          <!--------MODAL ADD CATEGORIAS DE LANÇAMENTOS--------->
          <m-dialog
            v-model="modalAddCategorias"
            title="Cadastro de Categorias de Lançamento"
            :draggable="true"
          >
            <div class="row p-2">
              <Form @submit="addCategoria">
                <label class="col-form-label" for="addcategoria">
                  Digite nova Categoria
                </label>
                <Field
                  type="text"
                  v-model="categoria"
                  name="categoria"
                  :rules="validaCategoria"
                  id="addcategoria"
                  class="form-control form-control fs-5 mb-2"
                />
                <ErrorMessage name="categoria" class="text-danger" />
                <label for="selectipo">Tipo de Lançamento</label>
                <select
                  v-model="tipo"
                  class="form-select fs-5"
                  id="selectipo"
                  aria-label="Categorias"
                >
                  <option selected value="1">Entrada / Receita</option>
                  <option value="2">Saída / Despesa</option>
                </select>
                <button
                  class="btnAddCategoria btn mt-3 fs-3"
                >
                  Salvar
                </button>
              </Form>
            </div>
          </m-dialog>
        </div>

        <div id="cards" class="d-flex flex-row">
          <div class="col-md-6 me-3">
            <div
              class="btnAddCategoria rounded rounded-4 p-4 twoCards shadow"
              style="width: 18rem"
              @click="modalListReceiras = true"
            >
              <h1><i class="fas fa-coins"></i></h1>
              <div class="card-body">
                <p class="card-text fs-5">
                  Lista de Entradas / Receitas Financeiras
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="btnAddCategoria rounded rounded-4 p-4 twoCards shadow"
              style="width: 18rem"
              @click="modalListDespesas = true"
            >
              <h1><i class="fas fa-hand-holding-usd"></i></h1>
              <div class="card-body">
                <p class="card-text fs-5">
                  Lista de Saídas / Despesas financeiras
                </p>
              </div>
            </div>

            <!--------MODAL LISTAR CATEGORIAS - RECEITAS FINANCEIRAS--------->
            <m-dialog
              v-model="modalListReceiras"
              title="Lista de Categorias de Receitas Financeiras"
              :draggable="true"
              width="650px"
            >
              <div class="row p-2">
                <div class="table-responsive mt-3">
                  <table class="table table-hover shadow">
                    <thead class="tablehead">
                      <tr>
                        <th scope="col">Descrição</th>
                        <th class="text-center" scope="col">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Salário</th>
                        <td class="text-center">
                          <button class="btn btn-danger btn-sm">
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Prestação de Serviço</th>
                        <td class="text-center">
                          <button class="btn btn-danger btn-sm">
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </m-dialog>

            <!--------MODAL LISTAR CATEGORIAS DESPESAS FINANCEIRAS--------->
            <m-dialog
              v-model="modalListDespesas"
              title="Cadastro de Categorias de Despesas Financeiras"
              :draggable="true"
              width="650px"
            >
              <div class="row p-2">
                <div class="table-responsive mt-3">
                  <table class="table table-hover shadow">
                    <thead class="tablehead">
                      <tr>
                        <th scope="col">Descrição</th>
                        <th class="text-center" scope="col">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Salário</th>
                        <td class="text-center">
                          <button class="btn btn-danger btn-sm">
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Prestação de Serviço</th>
                        <td class="text-center">
                          <button class="btn btn-danger btn-sm">
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </m-dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  name: "proFile",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      modalAddCategorias: false,
      modalListReceiras: false,
      modalListDespesas: false,
      categoria: "",
      tipo: "1",
    };
  },
  computed: {
    tipoCategoria() {
      return this.tipo == "1" ? 'Entrada / Receita' : 'Saída / Despesa'
    }
  },
  methods: {
    addCategoria() {
      this.$toast.success(`Categoria de ${this.tipoCategoria} cadastrada com sucesso`, { position: "top" })
      this.categoria = ""
      this.modalAddCategorias = false
    },
    validaCategoria(value) {
      if(value.length > 4) {
        return true
      }
      return "Somente categorias acima de 4 caracteres."
    }
  },
};
</script>

<style scoped>
.twoCards:hover {
  background: #2c7755 !important;
  box-shadow: 5px 5px 15px rgb(121, 118, 118) !important;
}

@media (max-width: 1350px) {
  #cards {
    display: block !important;
  }
}
.tablehead {
  background-color: #42b983 !important;
  color: white !important;
  border-radius: 5px 5px 5px !important;
}
.btnAddCategoria {
  background: #42b983 !important;
  color: white;
}
.card {
  border: none;

  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
}

.card:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background-color: #42b983;
  transform: scaleY(1);
  transition: all 0.5s;
  transform-origin: bottom;
}

.card:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background-color: #017a44;
  transform: scaleY(0);
  transition: all 0.5s;
  transform-origin: bottom;
}

.card:hover::after {
  transform: scaleY(1);
}
</style>>
