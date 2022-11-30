let produto: string = "livro";
const preco: number = 200;
const carro: {
  marca: string;
  portas: number;
} = {
  marca: 'Audi',
  portas: 5
}

produto = 'caneta';


function somar(a: number, b: number) {
  return a + b;
}

somar(5, 10);
//somar('5', '10');



const nintendo = {
  nome: 'Nintendo',
  preco: '2000',
};

function transformarPreco(
  produto: {
    nome: string;
    preco: string;
}) {
  produto.preco = 'R$' + produto.preco;
  return produto;
}

const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
