// -----------------------------------------------------------------------------1

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





// ---------------------------------------------------------------------------2

// const arrayNumbers = [11, 9, 5, 4, 1];
// function updateArray(arr) {
//     const newArray = [];
//     for (let i = arr.length - 1; i >= 0; i--){
//         newArray.push(arr[i]);
//     }
//     return newArray;
// }
// console.log(updateArray(arrayNumbers));




// ------------------------------------------------------------------------------------3
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



// -----------------------------------------------------------------------------4

// Скористаємося delete перед цим створивши новий обєкт!!!!!
// який матиме інше посилання і вже в ньому видалятимеммо

// function updateObject(obj, ...rest) {
//     const newObj = {...obj};
//     const keys = Object.keys(obj);

//     for (const elem of rest) {
//         delete newObj[elem];
//     }
//     return newObj;
// }

// console.log(updateObject({a:1, b:3, c:5}, "a", "b"));




// ----------------------------------------------------------------------------------5

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