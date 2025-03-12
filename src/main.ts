// const sayHi = sayBuilder('Hi');
// const sayBye = sayBuilder('Bye');

// console.log(sayHi('Ruslan')); // Hi, Ruslan!
// console.log(sayHi('Maxim')); // Hi, Maxim!

// console.log(sayBye('Ruslan')); // Bye, Ruslan!
// console.log(sayBye('Maxim')); // Bye, Maxim!
let обращение: string;

const sayBuilder = (name: string): string => {
  return `${обращение}, ${name}!`;
};

обращение = 'Hi';
const sayHi = sayBuilder;

обращение = 'Bye';
const sayBye = sayBuilder;

console.log(sayHi('Ruslan'));
console.log(sayHi('Maxim'));

console.log(sayBye('Ruslan'));
console.log(sayBye('Maxim'));
