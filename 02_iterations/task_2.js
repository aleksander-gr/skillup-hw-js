let mass = '';
console.log(mass);

let task = 'Задание 2 Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).';
console.log(task);
console.log(mass);

let myString = 'tseb eht ma i';
console.log(myString);
let myNewString = [];
for (let i = myString.length - 1; i > 0; i--) {
    myNewString.push(myString[i]);
}
console.log(myNewString.join(''));