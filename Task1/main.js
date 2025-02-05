// Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log
let greeting = 'hello';
console.log(greeting);
let owu = 'owu';
console.log(owu);
let com= 'com';
console.log(com);
let ua = 'ua';
console.log(ua);
let a=1; b=10; c=-999; d=123;
console.log(a,b,c,d);
let PI=3.14;
console.log(PI);
let e=2.7;
console.log(e);
let f=16;
console.log(f);
let g = true;
console.log(g);
let h = false;
console.log(h);
// - Створити 3 змінних firstName, middleName, lastName,
//   наповнити їх своїм ПІБ. З'єднати їх в одну змінну person ' +
// '(Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Serhii';
let middleName = 'Petrovich';
let lastName = 'Kot';
let person= `${firstName} ${middleName} ${lastName}`;
console.log(person);
// - За допомогою оператора typeof визначити типи наступних змінних та
// вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let i = 100;
let j = '100';
let k = true;
console.log(typeof i, j, k);
console.log(typeof i, i);
console.log(typeof j, j);
console.log(typeof k, k);
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими
//  Імям, По-Батькові та роками. та вивести в консоль
let name = prompt("Print your name", 'Petya');
let midleName = prompt("Print your middle name", 'Ivanov');
let age = prompt("Print your age", '18');
console.log(name,midleName,age);
