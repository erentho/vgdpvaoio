import { green, red } from 'chalk';

const isPalindrome = (word: string) => {
  const reversedWord = word.split('').reverse().join('');

  return word.includes(word);
};
const tests = [
  ['топот', true],
  ['пот', false],
  ['потоп', true],
  ['кабак', true],
  ['(())', false],
  ['табат', true],
  ['abab', false],
  ['топпот', true],
  ['()()', false],
  ['', true],
  ['123321', true],
  ['())(', true],
  ['abba', true],
  ['а роза упала на лапу азора', false], // Пробелы не совпадают!
] as const;

for (const test of tests) {
  const [word, expected] = test;

  const result = isPalindrome(word);
  if (result !== expected) {
    console.log(red(`Для слова "${word}" тест не прошел. Ожидалось: ${expected} | Получено: ${result}`));
    continue;
  }

  console.log(green(`Слово "${word}" успешно. Результат: ${result}`));
}
