const numbers = [1, -2, -3, 4, -5, 6, -7, 8, -9, 0];
let pos = 0;
let neg = 0;

for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > 0) {pos++;}
    else if (numbers[i] < 0) {neg++;}}

console.log("Количество положительных чисел:", pos)
console.log("Количество отрицательных чисел:", neg)