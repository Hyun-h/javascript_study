// (function () {
//   console.log("bar");
// })();

// var add = function test(x, y) {
//   return x + y;
// };

// console.log(add(2, 5)); // 7

// console.dir(add);
// console.dir(sub);

// console.log(add(2, 5));
// console.log(sub(2, 5));

// function add(x, y) {
//   return x + y;
// }

// var sub = function (x, y) {
//   return x - y;
// };

// var add1 = (function () {
//   var a = 10;
//   return function (x, y) {
//     return x + y + a;
//   };
// })();

// console.log(add1(1, 2)); // 13

// var add2 = (function () {
//   var a = 10;
//   return new Function("x", "y", "return x + y + a;");
// })();

// console.log(add2(1, 2)); // ReferenceError: a is not defined
