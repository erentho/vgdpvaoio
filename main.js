
const person = { age: 10, name: '', child: 'Max' };
for (const personKey in person) {console.log((`${personKey}: ${person[personKey]}`))
    
}
/* Для объекта person ожидаемый вывод:
age: 10
name: 
child: Max
*/