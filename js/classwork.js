// function foo() {
//     console.log(arguments);
// };
// foo(1, 2, 3);
// foo(4, 5, 6, 7, 8, 9, 0);

// function foo() {

//     const arr = [1, 2, 3];
//     console.log(Array.isArray(arr));
//     console.log(Array.isArray(arguments));
// };
// foo(1, 2, 3);
// foo(4, 5, 6, 7, 8, 9, 0);


// function foo() {
//     const args = Array.from(arguments);
//     console.log(Array.isArray(args));
// };
// foo(1, 2, 3);
// foo(4, 5, 6, 7, 8, 9, 0);

// function foo() {
//     console.log(arguments[1]);
// };
// foo(1, 2, 3);
// foo(4, 5, 6, 7, 8, 9, 0);

// function foo() {
//     const args = Array.from(arguments);
//     console.log(args);
//     console.log(args.join(""));
//     console.log(args.join(" "));
// };
// foo(1, 2, 3);
// foo(4, 5, 6, 7, 8, 9, 0);

// const add = function () {
//     console.log(arguments);
// };
// console.log(add(1, 2, 3));
// console.log(add(4, 5, 6, 7, 8, 9, 0));

// const add = function () {
//     const args = Array.from(arguments);
//     let total = 0;
//     for (let item of args) {
//         total += item;
//     }
//     return total;
// };
// console.log(add(1, 2, 3));
// console.log(add(4, 5, 6, 7, 8, 9, 0));

// const calAverage = function () {
//     let total = 0;
//     for (let item of arguments) {
//         total += item;
//     }
//     return total / arguments.length;
// };
// console.log(calAverage(1, 2, 3));
// console.log(calAverage(4, 5, 6, 7, 8, 9, 0));


// function logItems(items) {

//     for (let i = 0; i < items.length; i++) {
//         console.log(`${i+1} -${items[i]}`);
//     }
// }

// logItems("njj", "fgh", "ghjj");
// logItems(["njj", "fgh", "ghjj"]);




// -------------------------------------------


// function printInfo(names, phones) {
//     const namesArr = names.split(",");
//     console.log(namesArr);
//     const phonesArr = phones.split(",");
//     for (let i = 0; i < namesArr.length; i++){
//         console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//     }
// }

// printInfo("Jacob, William, Anna, Maria", "12345, 4567, 7890, 89056")


// ----------------------------------------------------------------------

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     const doubleHours = String(hours).padStart(2, "0");
//     const doubleMinutes = String(minutes).padStart(2, "0");
//     return `${doubleHours}:${doubleMinutes}`;
// }

// console.log(formatTime(345));
// console.log(formatTime(13));
// console.log(formatTime(61));


// -----------------------------------------------------------------------

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function foo(arr, count) {
//     const res = [];
//     for (let i = 0; i < arr.length; i += count) {
//         console.log(arr[i], i);
//     }
    
// }
// console.log(foo(data, 2));



// -----------------------------------------------------------------------

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function foo(arr, count) {
//     const res = [];
//     for (let i = 0; i < arr.length; i += count) {
//         const comb = arr.slice(i, i + count);
//         console.log(comb);
//         res.push(comb);
//     }
//     return res;
// }
// console.log(foo(data, 3));


// ------------------------------------------------------------------------

// foo()
// function foo() {
//     console.log("lalala")
// }

// const foo = function () {
//     console.log("tototo")
// }
// console.log(foo);
// foo();

// ------------------------------------------------------------------------


// const fileName = "lalala.jpg";
// function getName(str) {
//     const res = str.split(".");
//     return res;
// }
// console.log(getName(fileName));


// -----------------------------------------------------------------------

// const friends = ["Rachel", "Monica", "Phoebe", "Joey", "Chandler", "Ross"]

// for (let i = 0; i < friends.length; i++){
//     friends[i]=friends[i]+`-${[i+1]}`
// };
// console.log(friends);

// friends[0] = "Petya + " + friends[0];
// console.log(friends);

// ------------------------------------------------------------------------

// const values = "8 9";
// const arr = values.split(" ");
// const res = arr[0] * arr[1];
// console.log(res);
// const resulr = (arr[0] + arr[1])*2;
// console.log(resulr);



// -----------------------------------------------------------------------

// const user = {
//     name: "Alicie",
//     age: "24",
//     hobby: "html",
//     premium: true,
// }
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = "false";

// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }

// --------------------------------------------------------------------------

// const salaries = {
//     Olya: 100,
//     Petya: 120,
//     Kolya: 110,
// }
// function sum(obj) {
//     let total = 0;
//     const values = Object.values(obj);
//     console.log(values);
//     for (const value of values) {
//         total += value;
//     }
//     return total;
// }
// console.log(sum({}));
// console.log(sum(salaries));


// --------------------------------------------------------------------
// function foo(storage, item) {
//     const itemLower = item.toLowerCase();
//     const isIncludes = storage.includes(itemLower);
    
//     if (isIncludes) {
//         return item;
//     } else {
//         return "Sorry!";
//     }
// }
// console.log(foo(["apple", "plum", "pear"], "Ar"));
// console.log(foo(["apple", "plum", "pear"], "peAr"));
// console.log(foo(["apple", "plum", "pear"], "orrAnge"));


// 2.
// function foo(storage, item) {
//     const itemLower = item.toLowerCase();
//     for (const item of storage) {
//         if (item.includes(itemLower)) {
//         return item;
//         }
//     }
//     return "Sorry!";
// }

// console.log(foo(["apple", "plum", "pear"], "pe"));


// --------------------------------------------------------------------

// const friends = [
//     { name: "Ross", online: false },
//     { name: "Rachel", online: true },
//     { name: "Monica", online: false },
//     { name: "Phoebe", online: true },
//     { name: "Joey", online: true },
//     { name: "Chandler", online: false }
// ]
// // пошук друга за іменем

// function findByName(arr, name) {
//     for (const item of arr) {
//         // console.log(item);
//         // console.log(item.name);
//         if (item.name.toLowerCase() === name.toLowerCase()) {
//             return item.name;
//         }
//     }
//     return "Not found!";
// }
// console.log(findByName(friends, "Rachel"));
// console.log(findByName(friends, "Ra"));
// console.log(findByName(friends, "RACHel"));


// // імена всіх друзів
// function getAllNames(arr){
//     const namesArr = [];
//     for (item of arr) {
//         // console.log(item);
//         namesArr.push(item.name);
//     }
//     return namesArr;
// }
// console.log(getAllNames(friends));

// // імена дузів, які зараз онлайн
// function getOnlineFriends(arr){
//     const OnlineFriendsArr = [];
//     for (item of arr) {
//         // console.log(item);
//         if(item.online) {
//           OnlineFriendsArr.push(item.name);
//         }
//     }
//     return OnlineFriendsArr;
// }
// console.log(getOnlineFriends(friends));



// --------------------------------------------------------
// const stones = [
//     { name: "Смарагд", price: 800, quantity: 5 },
//     { name: "Діамант", price: 1000, quantity: 10 },
//     { name: "Сапфір", price: 500, quantity: 45 },
//     { name: "Щебінь", price: 10, quantity: 100 },
// ]

// function totalPrice(arr, name) {
//     let totalPrice = 0;
//     for (const item of arr) {
//         if (item.name === name) {
//             totalPrice += item.price * item.quantity;
//         }
//     }
//     return totalPrice;
// }
// console.log(totalPrice(stones, "Смарагд"));
// console.log(totalPrice(stones, "Бірюза"));

// -------------------------------------------------------------
// const playList = {
//     name: "My playlist",
//     rating: 5,
//     tracks: ["track - 1", "track - 2", "track - 3", "track - 4"],
//     changeName(newName) {
//         this.name = newName;
//     },
//     addTrack(newTrack) {
//         this.tracks.push(newTrack);
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackcount() {
//         return this.tracks.length;
//     }
// }

// console.log(playList);

// playList.changeName("New playlist");
// playList.addTrack("track-5");
// playList.updateRating(12);
// playList.getTrackcount();

// console.log(playList);
// console.log(playList.name);
// console.log(playList.tracks);
// console.log(playList.rating);
// console.log(playList.getTrackcount());


// --------------------------------------------------------------------
// const temperatures = [12, 35, 34, 23, 30, 18];

// console.log(Math.max(temperatures));
// console.log(Math.max(...temperatures));




// -------------------------------------------------------------------

// const objA = { x: 1, y: 2 };
// const objB = { x: 3, z: 4 };

// const objC = {
//     ...objA,
//     x:7,
//     ...objB,
//     y:9,
// }

// console.log(objC);

// ----------------------------------------------------------------------
// оновлюємо налаштування користувача
// const dafaultSettings = {
//     theme: "light",
//     showNotifications: true,
//     hideSidebar: false
// };

// const userSettings = {
//     theme: "dark",
//     showNotifications: false,
//     hideSidebar: true
// };

// const finalSettings = {
//     ...dafaultSettings,
//    ...userSettings
// };

// console.log(finalSettings);



// ---------------------------------------------------------
// /*
//  * Типів транзакцій всього два. Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };
  
// const account = {
//     // Поточний баланс рахунку
//   balance: 0,
  
//     // Історія транзакцій
//   transactions: [],
  
//     /*
//      * Метод створює та повертає об'єкт транзакції.
//        Кожна транзакція це об'єкт із властивостями: id, type та amount
//      * Приймає суму та тип транзакції.
//      */
//   createTransaction(amount, type) {
//     const obj = { id: amount, amount, type };
//     return obj;
//   },

//     /*
//      * Метод, що відповідає за додавання суми до балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій
//      */
//     deposit(amount) {
//       this.balance += amount;
//       const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//       this.transactions.push(transaction);
//     },
  
//     /*
//      * Метод, що відповідає за зняття суми з балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій.
//      *
//      * Якщо amount більше ніж поточний баланс, виводь повідомлення
//      * про те, що зняття такої суми не можливе, недостатньо коштів.
//      */
//     withdraw(amount) {
//       if(this.balance < amount) {
//         console.log("Недостатньо коштів");
//         return;
//       }

//       this.balance -= amount;
//       const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//       this.transactions.push(transaction);
//     },
  
//     /*
//      * Метод повертає поточний баланс
//      */
//     getBalance() {
//       return this.balance;
//     },
  
//     /*
//      * Метод шукає та повертає об'єкт транзакції по id
//      */
//     getTransactionDetails(id) {
//       for(const item of this.transactions) {
//         if(item.id === id) {
//           return item;
//         }
//       }
//     },
  
//     /*
//      * Метод повертає кількість коштів
//      * певного типу транзакції з усієї історії транзакцій
//      */
//     getTransactionTotal(type) {
//       let sum = 0;
//       for(const item of this.transactions) {
//         if(item.type === type) {
//           sum += item.amount;
//         }
//       }

//       return sum;
//     },
// };


// account.deposit(300);
// account.deposit(100);

// account.withdraw(200);

// console.log(account.getBalance());
// console.log(account.getTransactionDetails(300));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));


// console.log(account);

// -----------------------------------------------------------------------------

// function checkArrays(firstArray, secondArray) {
//     if (firstArray.length !== secondArray.length) {
//         return false;
//     }

//     for (let i = 0; i < firstArray.length; i++){
//         if (firstArray[i] !== secondArray[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkArrays([1, 2 , 4], [1, 2, 4]));
// console.log(checkArrays(["fg", "io"], ["gf", "io"]));
// console.log(checkArrays(["fg","io"], ["fg","io", "gf", "io"]));

// ---------------------------------------------------------------------------

// const arrayNumbers = [11, 9, 5, 4, 1];
// function updateArray(arr) {
//     const newArray = [];
//     for (let i = arr.length - 1; i >= 0; i--){
//         newArray.push(arr[i]);
//     }
//     return newArray;
// }
// console.log(updateArray(arrayNumbers));



// ------------------------------------------------------------------------------------
// Функція приймає обєкт і повертає новий без вказаних параметрів

// function updateObject(obj, ...rest) {
//     const newObj = {};
//     const keys = Object.keys(obj);

//     for (const key of keys) {
//         if (!rest.includes(key)) {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }

// console.log(updateObject({a:1, b:3, c:5}, "a", "b"));


// -------------------------------------------------------------------------------------

// Напишіть функцію, яка прибирає значення, які повторюються

// function filterValues(arr) {
//     const newArr = [];
//     for (const elem of arr) {
//         if (!newArr.includes(elem)) {
//             newArr.push(elem);
//         }
//     }
//     return newArr;
// }
// console.log(filterValues(["arr", 3, 6, 3, "arr", 7, 9]));