let task = 'task 6';
console.log(task);
/*
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29,
};

*/
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

for (let persone in list) {
    let upList = (String(list[persone])).toUpperCase();
    list[persone] = upList;
}
console.log(list);