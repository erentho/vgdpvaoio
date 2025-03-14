import { faker } from '@faker-js/faker';

const users = Array.from({ length: 100 }, () => ({
  firstName: faker.person.firstName(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
}));

const getRandomElements = (arr: any[], probability: number): any[] => {
  return arr.filter(() => Math.random() < probability);
};

const randomUsers = getRandomElements(users, 0.3);

console.log('Количество пользователей в массиве:', users.length);
console.log('Случайно выбранные пользователи:', randomUsers.length);
console.log('Пример случайно выбранных пользователей:', randomUsers.slice(0, 5)); // Выводим первые 5
