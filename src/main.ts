type A = {
  age?: number | string;
  nick: string;
  info: { [key: string]: any } | any[];
  photo?: string | null;
};

const a1: A = {
  age: 10,
  nick: 'mynick',
  info: [1, 100],
  photo: 'string',
};

const a2: A = {
  age: '10 years',
  nick: '',
  info: { id: 100 },
  photo: null,
};

const a3: A = {
  nick: '       ',
  info: ['secret', 'key'],
};

const a4: A = {
  nick: '',
  info: {},
};

console.log(a1.age);
console.log(a2.age);
console.log(a3.info);
console.log(a4.info);
