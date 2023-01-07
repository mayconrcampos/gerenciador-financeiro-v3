/***
 * FUNÇÕES SERVICES
 */

export function valorFormatado(valor) {
  let valorFormatado = valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return valorFormatado;
}

export function formatDate(date) {
  let ano = date.slice(0, 4);
  let mes = date.slice(5, 7);
  let dia = date.slice(8, 10);
  let data = `${dia < 10 ? `${dia}` : dia}/${mes < 10 ? `${mes}` : mes}/${ano}`;
  return data;
}

export function contaVencida(date) {
  let hoje = new Date().toLocaleString("pt-BR");
  let vencimento = new Date(date);
  vencimento = vencimento.toISOString();

  let hoje_ano = hoje.slice(6, 10);
  let hoje_mes = hoje.slice(3, 5);
  let hoje_dia = hoje.slice(0, 2);

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
}

export function statusConta(date) {
  let hoje = new Date().toLocaleString("pt-BR");
  let vencimento = new Date(date);
  //hoje = hoje.toISOString();
  vencimento = vencimento.toISOString();

  let hoje_ano = hoje.slice(6, 10);
  let hoje_mes = hoje.slice(3, 5);
  let hoje_dia = hoje.slice(0, 2);

  let vencto_ano = vencimento.slice(0, 4);
  let vencto_mes = vencimento.slice(5, 7);
  let vencto_dia = vencimento.slice(8, 10);

  let dia_hoje = `${hoje_ano}-${hoje_mes}-${hoje_dia}`;
  let dia_vencimento = `${vencto_ano}-${vencto_mes}-${vencto_dia}`;

  if (new Date(dia_hoje) < new Date(dia_vencimento)) {
    return -1;
  } else if (dia_hoje == dia_vencimento) {
    return 0;
  } else {
    return 1;
  }
}

export function valorTotalReceitasLancadas(listaDeReceitas) {
  let total = 0;
  listaDeReceitas.forEach((rec) => {
    if (statusConta(rec.data.$date) == 1) {
      total = total + rec.valor;
    }
  });
  return total;
}

export function valorTotalReceitasVenceHoje(listaDeReceitas) {
    let total = 0;
    listaDeReceitas.forEach((rec) => {
      if (statusConta(rec.data.$date) == 0) {
        total = total + rec.valor;
      }
    });
    return total;
}

export function valorTotalReceitasNaoLancadas(listaDeReceitas) {
    let total = 0;
    listaDeReceitas.forEach((rec) => {
      if (statusConta(rec.data.$date) == -1) {
        total = total + rec.valor;
      }
    });
    return total;
}

export function formatDateToFieldDate(date) {
  let ano = date.$date.slice(0, 4);
  let mes = date.$date.slice(5, 7);
  let dia = date.$date.slice(8, 10);
  let data = `${ano}-${mes}-${dia}`;
  return data;
}
