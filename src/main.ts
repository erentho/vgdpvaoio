const numbers = [1, 10, 11, 12, 21, 61, 85, 123, 1.5, -12];

for (const num of numbers) {
  if (num % 1 !== 0) {
    console.log(`Для ${num}: не является целым числом`);
  } else {
    if (num <= 1) {
      console.log(`Для ${num}: 1`);
    } else {
      let biggestNum = 1;

      for (let i = 2; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
          biggestNum = i;
        }
      }

      console.log(`Для ${num}: ${biggestNum}`);
    }
  }
}
