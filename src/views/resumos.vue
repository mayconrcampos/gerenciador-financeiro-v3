<template>
  <div class="container">
    <div id="search" class="row">
      <div id="texto" class="col-4 align-self-center fs-4">
        Resumo Financeiro
      </div>
      <div id="filtrar" class="col-7 align-items-center d-flex ">
        <i class="fas fa-search fs-4 me-2"></i>
        <input type="text" class="form-control fs-5" placeholder="Filtrar" />
      </div>
    </div>
    <div class="table-responsive mt-5">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Valor (R$)</th>
            <th scope="col">Data</th>
            <th scope="col">Categoria</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Ensaio Fotogrático</th>
            <td>590,00</td>
            <td>15/05/2022</td>
            <td>Entrada</td>
          </tr>
          <tr>
            <th scope="row">Padaria</th>
            <td>77,50</td>
            <td>15/06/2016</td>
            <td>Saída</td>
          </tr>
          <tr>
            <th scope="row">Vestecasa</th>
            <td>22,90</td>
            <td>10/10*2010</td>
            <td>Saída</td>
          </tr>
          <tr>
            <th>Saldo</th>
            <th>R$ 5250,00</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "resuMos",
};
</script>

<style scoped>
</style>