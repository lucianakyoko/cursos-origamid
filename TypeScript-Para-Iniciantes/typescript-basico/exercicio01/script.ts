/*
  Observe o código abaixo e realize as correções necessárias:

  function normalizarTexto(texto) {
    return texto.trims().toLowercase();
  }
*/ 

function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

console.log(normalizarTexto('DesigN '))