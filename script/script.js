let name = prompt('Введите своё имя');
let data = +prompt('Введите год рождения');
let thisYear = +prompt('Введите нынешний год');

function age() {
    let age = thisYear - data;
    return age.toString();
}
console.log(name + ',' + ' Ваш возраст' , age());





