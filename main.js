let num1   = 443
let num2 =12
    console.log(`Равны: ${num1 === num2}`);
    console.log(`Количество цифр: ${String(num1).length + String(num2).length}`);
    console.log(`Большее: ${Math.max(num1, num2)}`);
    console.log(`Меньшее: ${Math.min(num1, num2)}`);
    if(num1 % num2 ===0) {
        console.log(`${num1} делится на ${num2}`);
    } else if(num2 % num1 ===0) {
        console.log(`${num2} делится на ${num1}`)
    } else {
        console.log('не делится');
    }


