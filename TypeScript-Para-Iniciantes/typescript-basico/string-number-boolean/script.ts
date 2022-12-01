let total1: string | number = 200;
total1 = '4000';

function isNumber(value: string | number) {
  if(typeof value === 'number') {
    return true;
  }
}

console.log(isNumber(200))