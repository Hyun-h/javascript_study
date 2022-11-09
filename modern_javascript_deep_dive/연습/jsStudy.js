// const o = {};

// //console.log(o.[[prototype]]);
// console.log(o.__proto__);

// const person = {
//   name: "Lee",
// };

// person.age = 20;

// console.log(Object.getOwnPropertyDescriptor(person, "name"));
// console.log(Object.getOwnPropertyDescriptors(person));

// const person = {
//   // 데이터 프로퍼티
//   firstName: "John",
//   lastName: "Deo",

//   // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
//   // getter 함수
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   // setter 함수
//   set fullName(name) {
//     // 배열 디스트럭처링 할당
//     [this.firstName, this.lastName] = name.split(" ");
//   },
// };

// // 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
// console.log(person.firstName + " " + person.lastName); // John Deo

// // 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// // 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
// person.fullName = "Jane smith";
// console.log(person); // {firstName: 'Jane', lastName: 'smith'}

// // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// // 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
// console.log(person.fullName); // Jane smith

// // fistName은 데이터 프로퍼티다.
// // 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
// // 프로퍼티 어트리뷰트를 가진다.
// let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
// console.log(descriptor);
// // {value: 'Jane', writable: true, enumerable: true, configurable: true}

// // fullName은 접근자 프로퍼티이다.
// // 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]]
// // 프로퍼티 어트리뷰트를 갖는다.
// descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
// console.log(descriptor);
// // {enumerable: true, configurable: true, get: ƒ, set: ƒ}-

console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
console.log(Object.getOwnPropertyDescriptor(function () {}, "prototype"));
