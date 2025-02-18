// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a='hello world';
let b = 'lorem ipsum';
let c ='javascript is cool';

let stringLength = (string) =>
console.log(string.length);
stringLength(a);
stringLength(b);
stringLength(c);


// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let aUp = a.toUpperCase();
let bUp = b.toUpperCase();
let cUp = c.toUpperCase();

console.log(aUp);
console.log(bUp);
console.log(cUp);


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let d = 'HELLO WORLD';
let e = 'LOREM IPSUM';
let f = 'JAVASCRIPT IS COOL';
let dLo = d.toLowerCase();
let eLo = e.toLowerCase();
let fLo = f.toLowerCase();

console.log(dLo);
console.log(eLo);
console.log(fLo);

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let cleanStr = str.trim();
console.log(cleanStr);



//   #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//   let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
let str1 = 'Ревуть воли як ясла повні';
let stringToarray=(str)=>str.split(' ');
console.log(stringToarray(str1));

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr =[10,8,-7,55,987,-1011,0,1050,0];
let numberToString = arr.map(value =>value+'' );
console.log(numberToString);

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до
// меньшого, або навпаки в залежності від значення аргументу direction.
//   let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================

let nums = [11,21,3];
function sortNums(array,direction){
  if (direction === 'ascending'){
    return array.sort((a,b)=> a-b);
  } else if (direction==='descending'){
    return array.sort((a,b)=>b-a);
  } else {console.log('Choose right direction:ascending or descending')}
 }
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
console.log(sortNums(nums, 'escending'));

// #yo06d74c1C
// - є масив

let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b)=>b.monthDuration-a.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredCourses = coursesAndDurationArray.reduce((accumulated,course)=>{
  if (course.monthDuration>5){
    accumulated.push(course);
     }
  return accumulated;
}, []);
console.log(filteredCourses);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let modifyArray = coursesAndDurationArray.map((value, index) => {
  return{id: index+1,
    title: value.title,
    monthDuration: value.monthDuration
  } } );
console.log(modifyArray);
// =========================

//   #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//   color:'', // 'red','black'
// }
//
// =========================
//



//   #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//   spades:[],
//     diamonds:[],
//   hearts:[],
//   clubs:[]
// }
// =========================



// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
