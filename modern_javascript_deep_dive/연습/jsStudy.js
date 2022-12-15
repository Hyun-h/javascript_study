const person = {
  name: "Lee",
  address: "Seoul",
  __proto__: { age: 20 },
};

// // for ... in 문의 변수 prop에 person 객체의 프로퍼티 키가 할당된다.
// for (const key in person) {
//   console.log(key + ": " + person[key]);
// }
// // name: Lee
// // address: Seoul

// console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));

// for (const key in person) {
//   console.log(key + ": " + person[key]);
// }

// const sym = Symbol();
// const obj = {
//   a: 1,
//   [sym]: 10,
// };

// for (const key in obj) {
//   console.log(key + ": " + obj[key]);
// }
// // a: 1

for (const key in person) {
  // 객체 자신의 프로퍼티인지 확인한다.
  if (!person.hasOwnProperty(key)) continue;
  console.log(key + ": " + person[key]);
}

// console.log(Object.keys(person)); // [ 'name', 'address' ]
// console.log(Object.values(person));
// console.log(Object.entries(person)); //[ [ 'name', 'Lee' ], [ 'address', 'Seoul' ] ]

// Object.entries(person).forEach(([key, value]) => console.log(key, value));
/*
name Lee
address Seoul
*/
