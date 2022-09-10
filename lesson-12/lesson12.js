"use strict";
// const obj2 = {
//   b: 10,
// };
//
// const obj1 = {
//   nested: obj2,
// };

// const keyToRemove = prompt("key to remove");
//
// delete obj1.nested[keyToRemove];
// console.log(obj2);

// function deleteField(obj, keyToRemove) {
//   delete obj[keyToRemove];
// }
//
// deleteField(obj1, "nested");
// console.log(obj1);

// const user1 = {
//   name: "gena",
//   age: 10,
// };
//
// const user2 = {
//   name: "vasya",
//   age: 13,
// };
//
// const arr1 = [user1, user2];
// const arr2 = new Array(user1, user2);
// const arr3 = new Array();
// arr3[0] = user1;
// arr3[1] = user2;
// const arr4 = Array.from(arr1);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

// arr3[3] = 1;
// arr3.length = 100;
// console.log(arr3.length);

// const user3 = {
//   name: "lena",
//   age: 11,
// };

// Добавление, убирание в начале и в конце
// console.log("push", arr4.push(user3)); // вернет новую длину
// console.log(arr4);
// console.log("pop", arr4.pop()); // вернет попнутый элемент
// console.log(arr4);
// console.log("unshift", arr4.unshift(user3)); // вернет новую длину
// console.log(arr4);
// console.log("shift", arr4.shift()); // вернет шифтнутый элемент
// console.log(arr4);

// Ревертирование
// console.log("reverse", arr4.reverse()); // вернет обработанный массив
// console.log(arr4);

// Сортировка
// arr4.push(user3);
// function sortir(a, b) {
//   return a.age - b.age;
// }
// console.log("sort", arr4.sort(sortir)); // вернет обработанный массив
// console.log(arr4);

// Splice
const arr = [1, 2, 3];
// console.log(arr.splice(1, 2));
// console.log(arr.splice(0, 1, -1));
console.log(arr.splice(-1, 1, "test1", "test2"));
console.log(arr);
