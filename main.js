let a = 'user';  // Или любую другую роль
let b;

switch (a) {
    case 'user':
    case 'client':
        b = 1;
        break;
    case 'admin':
    case 'manager':
        b = 2;
        break;
    case 'superadmin':
        b = 3;
        break;
    default:
        b = 'Неизвестная роль';
}
console.log(b);