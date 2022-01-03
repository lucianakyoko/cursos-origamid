/*
// ===== Functions e Arrow Funcions: =====
function upperName(name) {
  return name.toUpperCase();
}

const lowerName = name => name.toLowerCase();

console.log(upperName('Luciana'))
console.log(lowerName('Luciana'))
*/



// ===== DESTRUCTURING: =====

/* *** Sem destructuring: ***

function handleMouse(event) {
    const x = event.clientX;
    const y = event.clientY;

    console.log(x, y);
  } 

  document.addEventListener('click', handleMouse);
*/

/* *** Com destructuring: ***
  function handleMouse(event) {
    const {clientX, clientY} = event;
    console.log(clientX, clientY);
  }

  document.addEventListener('click', handleMouse);
*/

/* *** Usando o destructuring direto nos parâmetros: ***
  function handleMouse({ clientX, clientY }) {
    console.log(clientX, clientY)
  }

  document.addEventListener('click', handleMouse);
*/


// ===== DESTRUCTURING COM ARRAYS: =====

/* *** Exemplo de desestruturação de arrays: ***
  const frutas = ['banana', 'uva', 'pêra', 'abacaxi'];
  const [fruta1, fruta2, ...frutasRestantes] = frutas;

  console.log(fruta2)
  console.log(frutasRestantes)
*/

/* *** Exemplo de desestruração de array que contem uma função: ***
  const useQuadrados = [
    4,
    function(lado) {
      return 4 * lado
    }
  ];

  const [lados, perimetro] = useQuadrados;
  console.log(lados);
  console.log(perimetro(10));
*/


// ===== REST E SPREAD: =====
/* *** Sem Rest/Spread: ***
  function showList(empresa, clientes) {
    clientes.forEach(cliente => {
      console.log(cliente, empresa);
    });
  }

  showList('Google', ['André', 'Rafael']);
*/

/* *** Usando o operador REST: ***
  function showList(empresa, ...clientes) {
    clientes.forEach(cliente => {
      console.log(cliente, empresa);
    });
  }

  showList('Google','André', 'Rafael', 'Laura', 'Ana')
*/

/* *** Usando o SPREAD em Arrays:
  const numeros = [10, 5, 20];
  const maior = Math.max(...numeros);
  console.log(maior);

  const numeros2 = [2, 0, 14, ...numeros, 24, 32, 50];
  console.log(numeros2);
*/

/* *** Sem SPREAD em Objetos: ***
  const carro = {
    cor: 'azul',
    portas: 4
  }
  carro.ano = 2020;
  console.log(carro);
*/ 

/* *** Com SPREAD em Objetos: cria um novo objeto sem alterar o Objeto original *** 
  const carro = {
    cor: 'azul',
    portas: 4
  }

  const carroAno = {...carro, ano: 2000};
  console.log(carroAno)
  console.log(carro)
*/