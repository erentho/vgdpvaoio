
const person = { age: 27, name: 'Billy', child: 'Max' };
const keys = [];
const values = []
for (const key in person) {

        {keys.push(key);
        values.push(person[key]);}



}

console.log("Ключи:", keys);
console.log("Значения:", values);