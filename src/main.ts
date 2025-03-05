const obj = { a: 1, b: 2, c: 3 };

let sum = 0;
let errorMessage = null;

if (typeof obj !== 'object' || obj === null) {
  errorMessage = 'Ошибка: Данные должны быть объектом.';
  sum = NaN;
} else {
  const keys = Object.keys(obj) as ('a' | 'b' | 'c')[];
  for (const key of keys) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (typeof value !== 'number') {
        errorMessage = `Ошибка: Значение поля '${key}' не является числом.`;
        sum = NaN;
        break;
      }
      sum += value;
    }
  }
}

if (errorMessage) {
  console.error(errorMessage);
}

console.log('Сумма значений объекта:', sum);
