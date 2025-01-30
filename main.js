let n = 123
    const s = String(n);
    const sum = parseInt(s[0]) + parseInt(s[s.length - 1]);
    console.log(`Сумма: ${sum}`);
    console.log(`Целое: ${Number.isInteger(n)}`);
    console.log(`Четное: ${n % 2 === 0}`);


