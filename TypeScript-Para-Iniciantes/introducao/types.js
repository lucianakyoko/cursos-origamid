//@ts-check

const frase = 'Front End';
const total = 100.05;
const empresas = ['Apple', 'Microsoft'];
const body = document.body;
const button = document.querySelector('button');

frase.toLowerCase();
// frase.toFixed();

total.toFixed();
// total.toLowerCase();

empresas.map(empresa => empresa.toLocaleUpperCase())
// empresas.toLowerCase();

body.style.background = 'violet';
// body.map(item => item);

console.log(button)
// button.click();

if(button) button.click();

// const operacao = true + 'teste' - (4 * {}) / [];
const strings = 'Front' + 'End';
const numbers = 100 + 200;

console.log(strings, numbers)
// console.log(operacao, strings, numbers)