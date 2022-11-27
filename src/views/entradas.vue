<template>
  <div class="container">
    <div id="search" class="row">
      <div id="texto" class="col-4 align-self-center fs-4">
        <i class="fas fa-sign-in-alt"></i>
        Entradas Financeiras
      </div>
      <div id="filtrar" class="col-7 align-items-center d-flex ">
        <i class="fas fa-search fs-4 me-2"></i>
        <input type="text" class="form-control fs-5" placeholder="Filtrar" />
      </div>
    </div>
    
    <div class="table-responsive mt-3">
      <table class="table table-hover shadow">
        <thead id="tablehead">
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
            <td>05/05/2005</td>
          </tr>
          <tr>
            <th scope="row">Padaria</th>
            <td>77,50</td>
            <td>10/12/2022</td>
          </tr>
          <tr>
            <th scope="row">Vestecasa</th>
            <td>22,90</td>
            <td>10/05/2005</td>
          </tr>
          <tr>
            <th>Total de Entradas</th>
            <th>R$ Muita grana</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "entraDas",
};
</script>

<style scoped>
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