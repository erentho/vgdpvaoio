/*

1. 2024-08-23T03:30:00-11:00    3
2. 2024-08-23T15:30:00+03:00    1
3. 2024-08-23T14:30:00Z         3
4. 2024-08-23T15:30:00Z         2
5. 2024-08-24T01:30:00+13:00    1
6. 2024-08-23T17:30:00+02:00    2
7. 2024-08-23T10:30:00-04:00    3
8. 2024-08-23T03:30:00-12:00    2
9. 2024-08-23T09:30:00-03:00    1
10. 2024-08-23T14:30:00-01:00   2
11. 2024-08-24T02:30:00+12:00   3
12. 2024-08-23T12:30:00Z        1
*/

import chalk from 'chalk';
import dayjs from 'dayjs';

console.log(chalk.green`First group:`);
console.log(1, dayjs('2024-08-23T03:30:00-11:00').toISOString());
console.log(3, dayjs('2024-08-23T14:30:00Z').toISOString());
console.log(7, dayjs('2024-08-23T10:30:00-04:00').toISOString());
console.log(11, dayjs('2024-08-24T02:30:00+12:00').toISOString());
console.log('' + '' + '');

console.log(chalk.blue`Second group:`);
console.log(2, dayjs('2024-08-23T15:30:00+03:00').toISOString());
console.log(5, dayjs('2024-08-24T01:30:00+13:00').toISOString());
console.log(9, dayjs('2024-08-23T09:30:00-03:00').toISOString());
console.log(12, dayjs('2024-08-23T12:30:00Z').toISOString());
console.log('' + '' + '');
console.log(chalk.red`Third group:`);
console.log(4, dayjs('2024-08-23T15:30:00Z').toISOString());
console.log(6, dayjs('2024-08-23T17:30:00+02:00').toISOString());
console.log(8, dayjs('2024-08-23T03:30:00-12:00').toISOString());
console.log(10, dayjs('2024-08-23T14:30:00-01:00').toISOString());
