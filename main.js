/*
Для трюка необходимы совершеннолетние здоровые (без болезней) люди с категорией прав "B"

Нужно разделить людей, на 2 группы:
* Те, кто подходит для выполнения трюка
* Те, кто не подходит для выполнения трюка. Необходимо указать причину, по которой человек не подходит
(если причин для отказа несколько, достаточно указать одну любую из них)

У каждого человека есть поля:
* name - имя
* age - возраст
* illness - болезнь
* driverLicenses - список разрешенных категорий для водительских прав

Разработчик-стажер написал фрагмент кода, который Вы видите ниже.
Однако код получился плохой и сложно читаемый.
Как бы вы переписали его?
Скопируйте себе весь исходный код и улучшите его.
То есть проведите рефакторинг (что это - прочитайте в словаре на главной странице Notion)

Изменять объекты людей запрещено!
 */

const alice = {
  name: 'Alice',
  age: 10,
  illness: null,
  driverLicenses: ['B'],
};

const bob = {
  name: 'Bob',
  age: 18,
  illness: 'Cold',
  driverLicenses: ['B'],
};

const charlie = {
  name: 'Charlie',
  age: 17,
  illness: null,
  driverLicenses: ['C', 'E'],
};

const diana = {
  name: 'Diana',
  age: 22,
  illness: 'H. Disease',
  driverLicenses: ['A', 'C', 'D'],
};

const eve = {
  name: 'Eve',
  age: 35,
  illness: null,
  driverLicenses: ['A', 'B', 'E'],
};

const frank = {
  name: 'Frank',
  age: 37,
  illness: null,
  driverLicenses: [],
};

const gorge = {
  name: 'Gorge',
  age: 28,
  illness: null,
  driverLicenses: ['B', 'D'],
};

const persons = [alice, bob, charlie, diana, eve, frank, gorge];

const invalidPersons = [];
const validPersons = [];

// переписанный код

const meetsRequirements = (person) => {
  if (person.age < 18) {
    return { valid: false, reason: 'Молодой' };
  }

  if (person.illness !== null) {
    return { valid: false, reason: 'Болен' };
  }

  if (person.driverLicenses.includes('B')) {
    return { valid: false, reason: 'Нет прав' };
  }

  return { valid: true };
};

for (const person of persons) {
  const { valid, reason } = meetsRequirements(person);

  if (valid) {
    validPersons.push(person);
  } else {
    invalidPersons.push({ ...person, reason });
  }
}

console.log('Для трюка подходят:', validPersons);
console.log('\nДля трюка НЕ подходят:', invalidPersons);
