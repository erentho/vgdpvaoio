/*
1ая группа: 12,2,9,5
2ая группа: 4,6,10,8
3я группа: 3,7,11,1
*/

import dayjs from 'dayjs';

console.log(12, dayjs('2024-08-23T12:30:00Z').toISOString());
console.log(2, dayjs('2024-08-23T15:30:00+03:00').toISOString());
console.log(5, dayjs('2024-08-24T01:30:00+13:00').toISOString());
console.log(9, dayjs('2024-08-23T09:30:00-03:00').toISOString());
console.log('----\n');

console.log(4, dayjs('2024-08-23T15:30:00Z').toISOString());
console.log(6, dayjs('2024-08-23T17:30:00+02:00').toISOString());
console.log(10, dayjs('2024-08-23T14:30:00-01:00').toISOString());
console.log(8, dayjs('2024-08-23T03:30:00-12:00').toISOString());
console.log('----\n');

console.log(1, dayjs('2024-08-23T03:30:00-11:00').toISOString());
console.log(3, dayjs('2024-08-23T14:30:00Z').toISOString());
console.log(7, dayjs('2024-08-23T10:30:00-04:00').toISOString());
console.log(11, dayjs('2024-08-24T02:30:00+12:00').toISOString());
