const numbers = [10, -5, 20, 0, 15];


    let min = numbers[0];
    let max = numbers[0];
    let sum = 0;

    for (const num of numbers) {
        min = Math.min(min, num);
        max = Math.max(max, num);
        sum += num;


    const avg = sum / numbers.length;

    console.log("Мин:", min);
    console.log("Макс:", max);
    console.log("Среднее:", avg);
}