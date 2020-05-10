let mass = '';
console.log(mass);
let task = 'Задание 3 Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 321, 5! = 54321. С помощью циклов вычислить факториал числа 10. Использовать for.';
console.log(task);

let one = 10;
let fact = [];
let factorial = 1;
for (let i = one; i >= 0; i--) {
    fact.push(i);
}

fact.splice(fact.length - 1);
for (let i = fact.length - 1; i >= 0; i--) {
    factorial *= fact[i];
}

console.log(mass);

let too = 'Факториал 10'
console.log(too);

console.log('Ответ = ' + factorial);