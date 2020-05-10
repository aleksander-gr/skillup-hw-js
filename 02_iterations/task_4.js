let mass = '';
console.log(mass);
let task = 'На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.';
console.log(task);
console.log(mass);

let myString = 'JavaScript is a pretty good language';
console.log(myString);

let myNewString = myString.split(' '); //Разбиваем на отдельные слова                                  
let UpperText4t = [];

for (var i = 0; i < myNewString.length; i++) {
    let word = myNewString[i][0].toUpperCase() + myNewString[i].slice(1); //Записываем в переменную каждое отдельно слово с большой буквы
    UpperText4t.push(word);
} // добавляем в новый массив каждое слово


console.log(UpperText4t.join("")); // обьяденяем массив в строку