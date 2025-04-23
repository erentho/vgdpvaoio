const numbers = [0, 2, 3, 1, 4];

let largest: number = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

let secondLargest: number | undefined = undefined;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < largest) {
    if (secondLargest === undefined || numbers[i] > secondLargest) {
      secondLargest = numbers[i];
    }
  }
}

console.log(secondLargest);
