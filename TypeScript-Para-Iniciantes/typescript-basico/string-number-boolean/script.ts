const frase: string = 'Front End';
const price: number = 500;
const condi: boolean = price > 100;

console.log(typeof frase);
console.log(typeof price);
console.log(typeof condi);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);

if(typeof frase === 'string') {
  console.log('Frase é uma string')
} else {
  console.log('Frase não uma string')
}

const frase1 = new String('Front End');
const frase2 = String('Front End');
const frase3 = 'Front End';

console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);