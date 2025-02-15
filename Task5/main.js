// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let rectangleArea = (a,b)=>a*b;
// console.log(rectangleArea(10,20));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let circleArea = (radius) => Math.PI*radius*radius
// console.log(circleArea(5));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cylinderArea = (radius, hight)=>2*Math.PI*radius*hight
// console.log(Math.round(cylinderArea(5,15)));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

// let showArray = (array) => {
//   for (const item of array) {
//     console.log(item);
//   }
// }
// arr = [123,456,848,'lkj','ljkkjlkjlk', false, 7676, true]
// showArray(arr);

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let addParagraph = (text) => document.write(`<p>${text}<p>`);
// addParagraph('The best of the best')


// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let listFor3 = (text)=> document.write (`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`);
// listFor3('Bambardiya kurgudu');

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let newlist = (text, numbersLi)=> {document.write(`<ul>`)
// for ( let i=0; i < numbersLi; i++){
//   document.write(`<li>${text}</li>`)
// }
// document.write(`</ul>`)};
// newlist('tomato',3);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та
// будує для них список

// let listBuilder = (arr) => {document.write(`<ul>`)
// for (const item of arr){
//   document.write(`<li>${item}</li>`)
// }
//   document.write(`</ul>`);
// };
// let arr=[123,'ghost',true, 'reks','peks','feks',787878, 'darling',69696];
// listBuilder(arr);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та
// виводить їх в документ. Для кожного об'єкту окремий блок.

// let h = [
//   {id: 1, name: 'Petya', age: 31},
//   {id: 2, name: 'Vitya', age: 32},
//   {id: 3, name: 'Kolya', age: 99},
//   {id: 4, name: 'Petya', age: 33},
//   {id: 5, name: 'Garik', age: 33},
//   {id: 6, name: 'Boris', age: 39},
//   {id: 7, name: 'Jkue', age: 89},
//   {id: 8, name: 'Volodya', age: 33},
//   {id: 9, name: 'Homa', age: 33},
//   {id: 10, name: 'Lajja', age: 67}
// ];
//
// let objectArrayWriter = (arr) => {
//   for (let object of arr) {
//     document.write(`<div>id - ${object.id}, name - ${object.name}, age - ${object.age} </div>`)
//   }
// };
// objectArrayWriter(h);



//   #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

// let minOfArray = (arr)=> {
//   let min = arr[0];
//   for (const figure of arr){
//     if (figure<min){
//       min=figure;
//     }
//         }
//   return min;
//  };
// let arr=[234,-45,0,34,5,-89,-56,34,78];
// console.log(minOfArray(arr));

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та
// повертає його. Приклад sum([1,2,10]) //->13

// let sumArr = (arr)=> {
//   let sum = arr[0];
//   for (let i=1; i<arr.length; i++){
//     sum+=arr[i];
//   }
//   return sum;
// }
// console.log(sumArr(arr));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr, index1, index2)=>{
//   let temp;
//   temp=arr[index1];
//   arr[index1]=arr[index2];
//   arr[index2]=temp;
//   return arr;
// }
// console.log(arr);
// console.log(swap(arr,0,arr.length-1));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


let exchange = (sumUAH, currency)=> {
  const curs=[{currency:'USD',value:40},{currency:'EUR',value:42}];
  let sumExchange;
  for (const item of curs){
    if(item.currency===currency){
      sumExchange=sumUAH/item['value'];
      return sumExchange;
          }
  }
}
console.log(Math.round(exchange(4000,'EUR')));
