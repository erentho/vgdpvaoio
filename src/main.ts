const storage = [
  'nick',
  'nack',
  'nock',
  [
    {
      first: 'forecast',
      child: null,
    },
    {
      first: 'castfore',
      child: null,
    },
    'zzz',
  ],
  'no-1',
  'no-2',
];

const [, , , [a, b, ...c], ...d] = storage;
const { first: f1 } = a as { first: string; child: null };

console.log(d);
console.log(c);
console.log(b);
