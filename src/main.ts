import { faker } from '@faker-js/faker/locale/en';

const people = Array.from({ length: 20 }, () => ({
  name: faker.person.fullName(),
  age: faker.number.int({ min: 5, max: 30 }),
  city: faker.location.city(),
}));

const personOver10 = people.find((person) => person.age > 10);

if (personOver10) {
  console.log('Найден человек старше 10 лет:', personOver10);
} else {
  console.log('В массиве нет людей старше 10 лет.');
}
