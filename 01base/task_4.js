//## Задание 4. Преобразование примитивов

//Чему равно а, почему?

let K = 0 || 'string'; // string. а принимает значение string(true), т.к. 0 (false) не передан
console.log(K);

let L = 1 && 'string'; // true. а принимает значение 1 и 1 (строку)
console.log(L);

let M = null || 25; // true. а принимает значение 25 (true)
console.log(M);

let N = null && 25; // null, т.к. null выше по приоритету присвоения
console.log(N);

let O = null || 0 || 35; // 35, т.к. присваивается true 
console.log(O);

let P = null && 0 && 35; // null, т.к. null выше по приоритету присвоения
console.log(P);

//**Что отобразится в консоли. Почему?**

let Q = 12 + 14 + '12' // 2612. Т.к. + является конкатинацией number + string
let R = 3 + 2 - '1'; //4 , т.к. выполняется неявное преобразование типов данных
let S = '3' + 2 - 1; //31, Т.к. + является конкатинацией string + number
let T = true + 2; // 3 , true = 1 неявное преобразование типов данных
let U = +'10' + 1; //11 неявное преобразование типов данных
let V = undefined + 2; //NaN, т.к. неопр. + число = не число
let W = null + 5; // 5, т.к. небыло ничего и добавили 5
let X = true + undefined; //NaN, 1 + неопр. = не число 
let Y = 5 + "34"; //534, Т.к. + является конкатинацией number + string
let Z = 5 - "4"; //1, т.к. выполняется неявное преобразование типов данных 
let aa = 10 % 5; // 0, возвращает остаток деления
let bb = 5 % 10; // 5 возвращает остаток деления (все что после запятой)
let cc = "Java" + "Script"; //JavaScript (+ конкатинация string)
let dd = " " + " " // два пробелла  (+ конкатинация string)
let ee = " " + 0; //пробел 0 
let ff = true + true //2 выполняется неявное преобразование типов данных(1 + 1)
let gg = true + false //1 выполняется неявное преобразование типов данных(1 + 0)
let hh = false + true //1 выполняется неявное преобразование типов данных(0 + 1)
let ii = false - true; //-1 выполняется неявное преобразование типов данных(0 - 1)
let jj = 3 - 4; // -1
let kk = "Bob" - "bill"; //NaN, нельзя отнять строки