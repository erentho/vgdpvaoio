type operatingSystem = 'windows' | 'macOs' | 'linux'; // строковый
type pcNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9; // числовой

type pc = {
  os: operatingSystem;
  num: pcNumber;
  createdAt: Date;
  createdAtISO: string;
}; // объект

const myPc: pc = {
  os: 'windows',
  num: 4,
  createdAt: new Date(),
  createdAtISO: new Date().toISOString(),
};

console.log(myPc); // дата
