const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Diana', age: 35 },
    { name: 'Eve', age: 30 },
    { name: 'Frank', age: 28 },
    { name: 'Grace', age: 25 },
    { name: 'Hannah', age: 41 },
    { name: 'Ivy', age: 30 },
    { name: 'Jack', age: 28 },
];

const count = {};

for (const user of users) {
    const age = user.age;
    count[age] = (count[age] || 0) + 1;
}

for (const age in count) {
    console.log(`Возраст=${age}. Количество людей=${count[age]}`);
}