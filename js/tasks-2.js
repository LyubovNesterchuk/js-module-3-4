// ----------------------------------------------------------------------1.1
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// const idx = styles.indexOf("blues");
// styles[idx] = "classic";
// console.log(styles);

// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }

// logItems(styles);





// -----------------------------------------------------------------------2
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];
 
// function checkLogin(array) {
//        const name = prompt("What is your name?");
//     if (array.includes(name)) {
//        alert(`Welcome, ${name}!`);
//     } else {
//         alert("User not found");
//     }
// }

// checkLogin(logins);




// -----------------------------------------------------------------------3
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//     const args = Array.from(arguments);     // перетворюємо псевдомасив arguments
//                                             // (який містить усі передані в функцію значення)
//                                             //  у справжній масив, з яким зручно працювати.
//     const numbers = [];                     // Створюємо новий масив numbers,
                                            //  куди додамо тільки числа
    
                                                //  Варіант з typeof гірший, бо не спрацює з NaN, що теж єчислом
                                                // const nan = NaN;
                                                // console.log(typeof nan); // number
    // for (let i = 0; i < args.length; i++) {
    //     if (typeof args[i] === "number") {
    //         numbers.push(args[i]);
    //     }
    // }

    

        // for (let i = 0; i < args.length; i++) {
        //     if (!isNaN(args[i])) {
        //         numbers.push(args[i]);
        //     }
        //  }

//     if (numbers.length === 0) {
//         return 0;
//     }

//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     return sum / numbers.length;
// }

// console.log(caclculateAverage(1, "fg", 24, 4, 9, "", NaN, 9));
// console.log(caclculateAverage( "fg",  "", NaN));
// console.log(caclculateAverage(1, "fg", 24, 4, 9, "", 9));
// console.log(caclculateAverage( "fg",  ""));


// ----------------------------------------------------------------------4+
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
// Adjacent — означає "сусідні".

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumAdjacentPairs(arr) {
//     const newArray = [];
//     for (let i = 0; i < arr.length-1; i++) {
//         sum = arr[i] + arr[i + 1];
//         newArray.push(sum);
//     }
//     return newArray;
// }

// console.log(sumAdjacentPairs(someArr));


// -----------------------------------------------------------------------5
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// const notArray= {a: 2, b: 5}

// function findSmallestNumber(arr) {
//     if (Array.isArray(arr)) {
//       return  Math.min(...arr);
//     } else {
//         return "Sorry, it is not an array!";
//     }

// }

// function findSmallestNumber(arr) {
//    return Array.isArray(arr) ? Math.min(...arr) : "Sorry, it is not an array!";
//     }

// console.log(findSmallestNumber(numbers));
// console.log(findSmallestNumber(notArray));



// -------------------------------------------------------------------6+
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.


// function findLongestWord(string) {
//     const arr = string.split(" ");
//     const wordsLength = [];

//     for (const item of arr) {
//         wordsLength.push(item.length);
//     }
//     const longestWorld = Math.max(...wordsLength);
//     return arr[wordsLength.indexOf(longestWorld)];
// }


// function findLongestWord(string) {
//   const words = string.split(' ');
//   let longestWord = '';

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
// console.log(findLongestWord('Я люблю програмувати на JavaScript')); // "програмувати"
// console.log(findLongestWord('Швидкий білий лис стрибнув через паркан')); // "стрибнув"

// ----------------------------------------------------------------------7
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//     console.log(`${key} : ${user[key]}`);
// }



// ----------------------------------------------------------------------8
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };

// const values = Object.values(salaries);

// let sum = 0;

// if (values.length === 0) {
//     sum = 0;
// } else {
//     for (const value of values) {
//     sum += value;
//     }
// }

// console.log(sum);





// -------------------------------------------------------------------------9
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//     x: null,
//     y: null,


//     read(a, b) {
//         this.x = a;
//         this.y = b;
//     },

//     exist() {
//         return this.x !== null && this.y !== null;
//     },
 
//     sum() {
//         if (!this.exist()) {
//             return "No such properties";
//         }
//         return this.x + this.y;
//     },
//     mult() {
//        if (!this.exist()) {
//             return "No such properties";
//         }
//         return this.x * this.y;
//     },
  
// }

// calculator.read(5, 9);
// console.log(calculator.sum());
// console.log(calculator.mult());



// --------------------------------------------------------------------------10
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає масив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];

// function calcTotalPrice(fruits, fruitName) {
//     let totalPrice = 0;
//     let totalQuantity = 0;
//     for (const item of fruits) {
//         if (item.name === fruitName) {
//             totalQuantity +=item.quantity;
//             totalPrice += item.price * item.quantity;;
//         } 
               
//     }

//       if (totalQuantity === 0) {
//         return `Фрукта "${fruitName}" не знайдено на складі.`;
//     }

//     return `На складі ${totalQuantity} кілограм(и) ${fruitName},
//     загальна вартість яких складає ${totalPrice} гривень`
// }
  
// console.log(calcTotalPrice(fruits, "Банан"));
// console.log(calcTotalPrice(fruits, "Апельсин"));
// console.log(calcTotalPrice(fruits, "Абрикос"));



