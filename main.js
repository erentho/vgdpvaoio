const user = {
    example: [1, 2, 3],
    'X-Address': {
        street: 'Ленина',
        house: '10-Б',
    },
    nickname: null,
    permissions: [true, false],
    age: 101,
    emails: ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'peter@example.com'],
    name: 'Peter Charles',
    isAdult: true,
    now: new Date().toISOString(),
};

let maxLength = 0;
let longestArray = null;
let lastElement = null;

        for (const key in user) {
        if (Array.isArray(user[key])) {

        const arrayLength = user[key].length;
        if (arrayLength > maxLength) {

            maxLength = arrayLength;

            longestArray = user[key];

            lastElement = user[key][arrayLength - 1];
        }
    }
}

console.log(`Максимальная длина: ${maxLength}. Последнее значение: ${lastElement}`);