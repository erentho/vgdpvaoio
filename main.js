let a = "spongebob"; // Или любое другое имя персонажа для теста
let b;

switch (a) {
    case 'spongebob':
        b = '| ( · )( · ) |';
        break;
    case 'patrick':
        b = '/ ( · )( · ) \\';
        break;
    case 'squidward':
        b = '( ( · )( · ) )';
        break;
    case 'plankton':
        b = '| ( · ) |';
        break;
    case 'mr. Crabs':
        b = '|·||·|';
        break;
    default:
        b = 'Неизвестный персонаж';
}

console.log(b)