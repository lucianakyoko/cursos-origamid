const numeros = [10, 20, 30, 40, 3];

function maiorQue10(data: number[]) {
  return data.filter(n => n > 10)
}

console.log(maiorQue10(numeros))