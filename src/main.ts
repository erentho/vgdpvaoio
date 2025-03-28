// Используя reduce, напишите функцию, которая (каждый пункт отдельная функция):
// Фильтрует только положительные числа
// Создаёт массив только с уникальными значениями
// Создает обратный массив (у которого обратная последовательность элемента)
// Превращает массив в объект:

// Фильтрует только положительные числа
const filterPositiveNumbers = (arr: number[]): number[] =>
  arr.reduce((acc: number[], num: number) => (num > 0 ? [...acc, num] : acc), []);

// Фильтрует только строки
const filterStrings = (arr: any[]): string[] =>
  arr.reduce((acc: string[], item: any) => (typeof item === 'string' ? [...acc, item] : acc), []);

// Создаёт массив только с уникальными значениями
const getUniqueValues = (arr: any[]): any[] =>
  arr.reduce((acc: any[], item: any) => (acc.includes(item) ? acc : [...acc, item]), []);

// Создает обратный массив (у которого обратная последовательность элемента)
const reverseArray = (arr: any[]): any[] => arr.reduce((acc: any[], item: any) => [item, ...acc], []);

// Превращает массив в объект:
const values = [10, 'just_name', true];
const myObject = values.reduce(
  (acc: { [key: string]: any }, value: any, index: number) => ({ ...acc, [`key-${index + 1}`]: value }),
  {},
);
console.log(myObject);
// { 'key-1': 10, 'key-2': 'just_name', 'key-3': true }
