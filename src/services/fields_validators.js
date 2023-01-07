/***
 * Funções dos validadores de campos dos formulários
 */

// Formulário addConta.vue
export function validaValor(value) {
  let num = "";
  if (!this.editando) {
    num = value.replace(",", ".");
  }
  if (isNaN(num) || value == "") {
    return "Valor não numérico.";
  }
  return true;
}

export function validaDescricao(value) {
  if (value.length > 2) {
    return true;
  }
  return "A descrição deve ter acima de 2 caracteres";
}

export function validaCategoria(value) {
  if (value) {
    return true;
  }
  return "Selecione uma categoria";
}
// Formulário Inserir Contas de Lançamentos

export function validaCampoCategoria(value) {
  if (value.length > 4) {
    return true;
  }
  return "Somente categorias acima de 4 caracteres.";
}

// Login e criar usuário

export function validaUsuario(email) {
  let usuario = email.substring(0, email.indexOf("@"));
  let dominio = email.substring(email.indexOf("@") + 1, email.length);

  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    return true;
  }
  return "Email inválido";
}

export function validaSenha1(senha1) {
  if (senha1.length > 4) {
    return true;
  }
  return "Somente senha acima de 4 caracteres";
}

export function validaSenha2(senha2) {
  if (this.cadastra.senha1 == senha2) {
    return true;
  }
  return "Senhas não conferem";
}

