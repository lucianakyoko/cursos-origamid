const precos = [
  'Credito',
  'R$ 200',
  'R$ 400',
  'Contas a Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados'
];

const precosFiltro = precos.filter(preco => preco.includes('R$ '));
const precosNumero = precosFiltro.map(preco => Number(preco.replace('R$ ', '')));

console.log(precosFiltro);
console.log(precosNumero);