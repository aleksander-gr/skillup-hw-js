let mass = '';
let taskOne = 'Задание 1 !Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной)';
console.log(mass);
console.log(taskOne);
console.log(mass);
/*
Отсортируйте массив массивов так, чтобы вначале 
располагались наименьшие массивы (размер массива определяется его длиной):

[ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
*/

let mas = [
    [14, 45],
    [1],
    ['a', 'c', 'd']
];

mas.sort();
console.log(mas);