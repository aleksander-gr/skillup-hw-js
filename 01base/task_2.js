let mass = '';
console.log(mass);
// Визуал

let string = 'Задание  1 ! Получить первую и последнюю буквы строки.';
console.log(string);

let myString = 'some test string'; // создаем строку 
console.log(myString);


let myStringFirst = myString.charAt(0); // с помощью атрибута charAt выводим первую и последню букву отсчет наачинается с 0
console.log(myStringFirst);

let myStringLast = myString.charAt(15);
console.log(myStringLast);



console.log(mass);
let StringToo = 'Задание 2!  Сделать первую и последнюю буквы в верхнем регистре';
console.log(StringToo);

console.log(myString);
console.log(myStringFirst.toUpperCase());
console.log(myStringLast.toUpperCase());


console.log(mass);
let StringThree = 'Задание 3 ! Найти положение слова ‘string’ в строке';
console.log(StringThree);
console.log(myString);
console.log(myString.indexOf('string'));

console.log(mass);
let StringFour = 'Задание 4 ! Найти положение второго пробела (“вручную” ничего не считать)';
console.log(StringFour);
console.log(myString.indexOf(' ', myString.indexOf(' ') + 1));

console.log(mass);
let StringFive = 'Задание 5!  Получить строку с 5-го символа длиной 4 буквы';
console.log(StringFive);

console.log(myString.substr(5, 4));

console.log(mass);
let StringSix = 'Задание 6!  Получить строку с 5-го по 9-й символы';
console.log(StringSix);

console.log(myString.substr(5, 9));

console.log(mass);
let StringSeven = 'Задание 7!  Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)';
console.log(StringSeven);
//console.log(myString.slice(myString.length(-6)));
console.log(myString.slice(0, myString.length - 6));

console.log(mass);
let StringEight = 'Задание 8! 8 Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”';
console.log(StringEight);

let a = 20,
    b = 16;
let c = (a.toString() + b.toString())
console.log(c);