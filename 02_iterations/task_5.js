let five = 'Задание 5'
console.log(five);


let mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = mass.length - 1; i >= 0; i--) {
    if (mass[i] % 2 != 0) {
        console.log(mass[i])
    }
}

console.log("");