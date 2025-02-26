import { blue, green, red } from 'chalk';

const colors = [red, green, blue];
const max = 10;

let result = '';
for (let i = 0; i < max; i++) {
  result += colors[i % 3]('*');
  if (i < max - 1) {
    result += ' - ';
  }
}

console.log(result);
