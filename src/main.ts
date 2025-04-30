type Person = {
  name: string;
  age: number;
  nickname: string;
  photo: string;
};

type First = Partial<Readonly<Omit<Person, 'photo'>>>;

type Second = Required<Pick<First, 'name' | 'nickname'>>;

const firstExample: First = {
  name: 'Alice',
  age: 30,
  nickname: 'Ali',
};

const secondExample: Second = {
  name: 'Bob',
  nickname: 'Bobby',
};

console.log(firstExample);
console.log(secondExample);
