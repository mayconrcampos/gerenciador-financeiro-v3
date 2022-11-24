<template>
  <div class="container-md px-5">
    <div class="fs-5 ms-2 mb-2 text-start">
      Cadastre seus ganhos e gastos
    </div>
    <form id="contactForm">
      <div class="form-floating mb-3">
        <select class="form-select" id="categorias" aria-label="Categorias">
          <option value="1">Entrada / Receita</option>
          <option value="2">Saída / Despesa</option>
        </select>
        <label for="categorias">Tipo de Gasto</label>
      </div>
      <div class="form-floating mb-3">
        <input
          class="form-control"
          id="descricao"
          type="text"
          placeholder="Descrição"
        />
        <label for="descricao">Descrição</label>
      </div>
      <div class="form-floating mb-3">
        <input
          class="form-control"
          id="valorR"
          type="text"
          placeholder="Valor R$"
        />
        <label for="valorR">Valor R$</label>
      </div>
      <div class="form-floating mb-3">
        <input class="form-control" id="data" type="date" placeholder="Data" />
        <label for="data">Data</label>
      </div>
      <div class="form-floating mb-3">
        <select class="form-select" id="categorias" aria-label="Categorias">
          <option value="Mercado">Mercado</option>
          <option value="Farmácia">Farmácia</option>
          <option value="Compras">Compras</option>
          <option value="Gasolina">Gasolina</option>
          <option value="Taxas">Taxas</option>
        </select>
        <label for="categorias">Categorias</label>
      </div>
      <div class="form-floating mb-3">
        <textarea
          class="form-control"
          id="comentarios"
          type="text"
          placeholder="Comentários"
          style="height: 10rem"
        ></textarea>
        <label for="comentarios">Comentários</label>
      </div>
      <div class="d-grid">
        <button
          class="btn btn-lg"
          id="submitButton"
          type="submit"
        >
          Cadastrar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "addConta",
};
</script>

<style scoped>
@media (max-width: 650px) {
    #radios {
        display: block !important;
    }
}
#submitButton {
  background: #99adde !important;
  color: white !important;
  font-size: 1.5em;
  font-weight: bolder;
}
</style>