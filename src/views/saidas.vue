<template>
  <div class="container">
    <h3>Saídas Financeiras</h3>
    <div class="table-responsive">
        <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Valor (R$)</th>
            <th scope="col">Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Santos Supermercados</th>
            <td>59,90</td>
            <td>09/10/2010</td>
          </tr>
          <tr>
            <th scope="row">Padaria</th>
            <td>77,50</td>
            <td>10/10/2010</td>
          </tr>
          <tr>
            <th scope="row">Vestecasa</th>
            <td>22,90</td>
            <td>10/10/2010</td>
          </tr>
          <tr>
            <th>Total de Gastos</th>
            <th>R$ Muita grana</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "saiDas",
};
</script>

<style scoped>
</style>