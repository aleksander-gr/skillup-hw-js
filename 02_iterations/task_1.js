let mass = '';
console.log(mass);
let taskOne = 'Задание 1 На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.';
console.log(taskOne);
console.log(mass);

let string = "i am in the easycode";
console.log(string);
let myString = string.split(' '); //Разбиваем на отдельные слова
let UpperText = [];
for (var i = 0; i < myString.length; i++) {
    let str = myString[i][0].toUpperCase() + myString[i].slice(1); //новая переменная с каждым отдельным словом с большой буквы
    UpperText.push(str); // добавляем их в новый масив    
}
console.log(UpperText.join(' '));