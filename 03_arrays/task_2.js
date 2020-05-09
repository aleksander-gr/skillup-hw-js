/*
Задание 2
Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.
*/

const arr = [12, 4, 50, 1, 0, 18, 40];
 
let res = arr.some( item=>{
    return item ===0;
})

console.log(res);

/*
Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true
*/

/*
const arr = ['yes', 'hello', 'no', 'easycode', 'what'];

let result = arr.every(item => item.length > 3 

)

console.log(result);
*/
