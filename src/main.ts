const шифр = 'ntg ajuk fjbydv vikjo citvikhh yd mkjidydv qjujhpiyco. ptdvijoh!';
const перемешанный = 'oak lgypb wited zts qgfch tuki oak mjrn xtv';
const норм = 'the quick brown fox jumps over the lazy dog';

const соответсвия: { [key: string]: string } = {};
for (let i = 0; i < норм.length; i++) {
  if (норм[i] !== ' ') {
    соответсвия[перемешанный[i]] = норм[i];
  }
}

let расшифрованный = '';
for (const символ of шифр) {
  расшифрованный += соответсвия[символ] || символ;
}

console.log(расшифрованный);
