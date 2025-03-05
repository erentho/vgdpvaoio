import { faker } from '@faker-js/faker';

type Person = {
  name: string;
  age: number | null | undefined;
  email: string;
};

const people: Person[] = Array.from({ length: 10 }, () => {
  const person: Person = {
    name: faker.person.fullName(),
    age: faker.number.int({ min: 18, max: 65 }),
    email: faker.internet.email(),
  };

  if (faker.datatype.boolean({ probability: 0.2 })) {
    person.name = 'Stas';
  }

  if (faker.datatype.boolean({ probability: 0.1 })) {
    person.age = null;
  } else if (faker.datatype.boolean({ probability: 0.1 })) {
    person.age = undefined;
  }

  return person;
});

console.log('Сгенерированные данные:', people);

let result: string | number = 'Объект не найден';

const stas = people.find((person) => person.name === 'Stas');

if (stas) {
  if (stas.age === null || stas.age === undefined) {
    result = 'Возраста нет';
  } else {
    result = stas.age;
  }
}

console.log('Возраст Stas:', result);
