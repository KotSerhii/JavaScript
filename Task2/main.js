// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//
// let arr = [123, 'fifa', true, 789, 'end', false, 987, "candy", 2323, 'start']
// console.log(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9]);
//

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//
// let book1 = {id: 1, title: 'War', pageCount: 234, genre:'History'};
// let book2 = {id: 2, title: 'Sweety', pageCount: 2314, genre:'Comedy'};
// let book3 = {id: 3, title: 'Killer', pageCount: 234, genre:'Detective'};
//

//   #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//
// let book4 = {id: 1, title: 'War', pageCount: 234, genre:'History',
//   authors: [
//     {name: 'Kirilo',age:23},
//     {name: 'Kera',age:33}
//     ]};
// let book5 = {id: 2, title: 'Sweety', pageCount: 2314, genre:'Comedy',
//   authors: [
//     {name: 'Hot',age:23},
//     {name: 'Pera',age:33}
//   ]
// };
// let book6 = {id: 3, title: 'Killer', pageCount: 234, genre:'Detective',
//   authors: [
//     {name: 'Kilo',age:23},
//     {name: 'Mols',age:33}
//   ]
// };


//   #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
// let users = [
//   {name: 'oleg', username:'oleg', password:'123456'},
//   {name: 'valya', username:'valya', password:'234567'},
//   {name: 'katya', username:'katya', password:'345678'},
//   {name: 'gesha', username:'gesha', password:'456789'},
//   {name: 'nika', username:'nika', password:'567890'},
//   {name: 'nikita', username:'nikita', password:'678901'},
//   {name: 'mishan', username:'mishan', password:'789012'},
//   {name: 'boris', username:'boris', password:'890123'},
//   {name: 'kris', username:'kris', password:'901234'},
//   {name: 'serg', username:'serg', password:'012345'}
// ];
// console.log(users[0]['password'], users[0].name);
// console.log(users[1]['password'], users[1].name);
// console.log(users[2]['password'], users[2].name);
// console.log(users[3]['password'], users[3].name);
// console.log(users[4]['password'], users[4].name);
// console.log(users[5]['password'], users[5].name);
// console.log(users[6]['password'], users[6].name);
// console.log(users[7]['password'], users[7].name);
// console.log(users[8]['password'], users[8].name);
// console.log(users[9]['password'], users[9].name);


// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці,
// вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати.
// Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням
// вичключаємо одразу
//
// let weather = [
//   {day:'Monday', morningT:12,afternoonT:23,eveningT:14},
// {day:'Tuesday', morningT:13,afternoonT:24,eveningT:15},
// {day:'Wednesday', morningT:12,afternoonT:22,eveningT:16},
// {day:'Thursday', morningT:11,afternoonT:21,eveningT:14},
// {day:'Friday', morningT:10,afternoonT:22,eveningT:12},
// {day:'Saturday', morningT:9,afternoonT:23,eveningT:10},
// {day:'Sunday', morningT:8,afternoonT:22,eveningT:8}
// ]

// Логічні розгалуження:
//
//   #bAUsaq6LI
//   - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//   Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = +prompt('Enter a number');
// if (x !== 0) {
//   console.log('Right');
// } else {
//   console.log('Wrong');
// }

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time = +prompt(
//   'Enter minutes from 0 to 59',
// )
// if (time < 0 || time > 59) {
//   console.log('Wrong time');
//  } else if (time >= 0 && time < 15) {
//   console.log('First quater');
// } else if (time >= 15 && time < 30) {
//   console.log('Second quater');
// } else if (time >= 30 && time < 45) {
//   console.log('Third quater');
// } else {
//   console.log('Fourth quater');
// }

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).
//
// let day = +prompt('Enter date');
// if(day<=0 || day>31){
//   console.log("Please enter a valid date");
// }
// else if (day<=10){
//   console.log("This is the first decade");
// }
// else if (day<=20){
//   console.log("This is the second decade");
// }
// else {
//   console.log("This is the third decade");
// }

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let day = prompt("Enter a weekday");
// switch (day) {
//   case "Sunday":
//     console.log('Sunday');
//     break;
//   case "Monday":
//     console.log('Monday');
//     break;
//   case "Tuesday":
//     console.log('Tuesday');
//     break;
//   case "Wednesday":
//     console.log('Wednesday');
//     break;
//   case "Thursday":
//     console.log('Thursday');
//     break;
//   case "Friday":
//     console.log('Friday');
//     break;
//   case "Saturday":
//     console.log('Saturday');
//     break;
//     default:
//       console.log('Unknown error or the first capital letter');
// }


//   #uwsz1RnTQJ1
//   - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
let a = +prompt('Enter the first number');
let b = +prompt('Enter the second number');
if (a > b){
  console.log(`Max is ${a}')

//     #iBvqtjEm
//   - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//     (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//


//   #awLXL6TBzg
//   - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
//   кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//
