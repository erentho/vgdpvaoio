const values = [
  [1, 100],
  [2, 200],
  [3, 300],
  [1, 2],
  [3, 400],
  [4, 500],
  [1, 99],
];

const result = values.reduce((acc: { [key: string]: { count: number; sum: number } }, [grade, count]) => {
  const gradeStr = String(grade);
  acc[gradeStr] = {
    count: (acc[gradeStr]?.count || 0) + 1,
    sum: (acc[gradeStr]?.sum || 0) + count,
  };
  return acc;
}, {});

console.log(result);
