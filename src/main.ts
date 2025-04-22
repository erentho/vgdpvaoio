const matrix = [
  [1, 2, 4],
  [3, 5, 4],
  [4, 4, 7],
  [3, 5, 9],
];

const flatMassive = (matrix: number[][]): number[] =>
  matrix.reduce((acc: number[], arr: number[]) => {
    for (const num of arr) {
      if (!acc.includes(num)) {
        acc.push(num);
      }
    }
    return acc;
  }, []);

console.log(flatMassive(matrix));

const flatMassive2 = (matrix: number[][]): number[] =>
  matrix.flat().filter((num, index, arr) => arr.indexOf(num) === index);

console.log(flatMassive2(matrix));
