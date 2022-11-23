<template>
  <div class="container-md px-5">
    <form id="contactForm">
      <div id="radios" class="mb-3">
        <div class="form-check form-check-inline alert alert-primary w-25">
          <label class="form-check-label me-5" for="entrada">
            <input
              class="form-check-input"
              id="entrada"
              type="radio"
              name="natureza"
            />
            Entrada
          </label>
        </div>
        <div class="form-check form-check-inline alert alert-danger w-25">
          <label class="form-check-label" for="saida">
            <input
              class="form-check-input"
              id="saida"
              type="radio"
              name="natureza"
            />
            Saída
          </label>
        </div>
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
          class="btn btn-primary btn-lg disabled"
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
</style>