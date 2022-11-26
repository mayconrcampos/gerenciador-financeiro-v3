<template>
  <div class="container">
    <div class="row">
      <div class="card col-lg-12 align-items-center">
        <div class="row m-1 mt-3">
          <button
            class="btnAddCategoria btn fs-4 mb-4 shadow m-auto twoCards"
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
              <label class="col-form-label" for="addcategoria">
                Digite nova Categoria
              </label>
              <input
                type="text"
                id="addcategoria"
                class="form-control form-control-sm mb-2"
              />
              <label for="selectipo">Tipo de Lançamento</label>
              <select
                class="form-select"
                id="selectipo"
                aria-label="Categorias"
              >
                <option value="1">Entrada / Receita</option>
                <option value="2">Saída / Despesa</option>
              </select>
              <button
                class="btnAddCategoria btn btn-md mt-3"
                @click="modalAddCategorias = false"
              >
                Salvar
              </button>
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
export default {
  name: "proFile",
  data() {
    return {
      modalAddCategorias: false,
      modalListReceiras: false,
      modalListDespesas: false,
    };
  },
};
</script>

<style scoped>
.twoCards:hover {
  background: #d5e2fd !important;
  color: black;
}

@media (max-width: 1350px) {
  #cards {
    display: block !important;
  }
}
.tablehead {
  background-color: #99adde !important;
  color: white !important;
  border-radius: 5px 5px 5px !important;
}
.btnAddCategoria {
  background: #99adde !important;
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
  background-color: #99adde;
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
  background-color: #d5e2fd;
  transform: scaleY(0);
  transition: all 0.5s;
  transform-origin: bottom;
}

.card:hover::after {
  transform: scaleY(1);
}

.fonts {
  font-size: 11px;
}

.social-list {
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
}

.social-list li {
  padding: 10px;
  color: #99adde;
  font-size: 19px;
}

.buttons button:nth-child(1) {
  border: 1px solid #99adde !important;
  color: #99adde;
  height: 40px;
}

.buttons button:nth-child(1):hover {
  border: 1px solid #99adde !important;
  color: #fff;
  height: 40px;
  background-color: #99adde;
}

.buttons button:nth-child(2) {
  border: 1px solid #99adde !important;
  background-color: #99adde;
  color: #fff;
  height: 40px;
}
</style>>
