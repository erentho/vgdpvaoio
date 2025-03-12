import { faker } from '@faker-js/faker';
import { blue, red } from 'chalk';
import dayjs from 'dayjs';

const randomDate = faker.date.between({ from: '2020-01-01', to: '2030-12-31' });
const dateString = dayjs(randomDate).format('YYYY-MM-DD');

const date = dayjs(dateString);
const today = dayjs();

if (!date.isValid()) {
  console.error(red('Некорректный формат даты:', dateString));
} else {
  if (date.isBefore(today, 'day')) {
    console.log(red(`Дата ${date.format('YYYY-MM-DD')} в прошлом!`));
  } else if (date.isAfter(today, 'day')) {
    console.log(blue(`Дата ${date.format('YYYY-MM-DD')} в будущем!`));
  } else {
    console.log(`Дата ${date.format('YYYY-MM-DD')} - сегодня.`);
  }
}
