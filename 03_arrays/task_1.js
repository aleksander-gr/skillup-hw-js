/* 
Задание 1
На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности:

[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
*/
let x = [1, 2, 3, 5, 8, 9, 10];
let y =[];

x.forEach(value =>{
    let item = {
        digit:value,
        odd: value %2 !== 0? true: false
    }
    y.push(item);
});


let result = x.map( v=> {
    return{
        digit:v,
        odd: v % 2 !==0
    }
});

console.log(result);
