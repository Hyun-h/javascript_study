// function add(x, y) {
//   console.log(arguments);

//   return x + y;
// }

// console.log(add(2, 5, 10)); // 7

// function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     // 매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러를 발생시킨다.
//     throw new TypeError("인수는 모두 숫자 값이어야 합니다.");
//   }

//   return x + y;
// }

// console.log(add(2));
// console.log(add("a", "b"));

// function add(a, b, c) {
//   a = a || 0;
//   b = b || 0;
//   c = c || 0;

//
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2));
// console.log(add(1));
// console.log(add());

function add(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(add(1, 2, 3));
console.log(add(1, 2));
console.log(add(1));
console.log(add());
