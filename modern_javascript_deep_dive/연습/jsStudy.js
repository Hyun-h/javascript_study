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

// console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
// console.log(Object.getOwnPropertyDescriptor(function () {}, "prototype"));

// const person = {};

// // 데이터 프로퍼티 정의
// Object.defineProperty(person, "firstName", {
//   value: "John",
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// Object.defineProperty(person, "lastName", {
//   value: "Doe",
// });

// let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
// console.log("firstName", descriptor);
// // firstName {value: 'John', writable: true, enumerable: true, configurable: true}

// // 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다.
// descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
// console.log("lastName", descriptor);
// // lastName {value: 'Doe', writable: false, enumerable: false, configurable: false}

// // [[Enumerable]]의 값이 false인 경우
// // 해당 프로퍼티는 for ... in 문이나 Object.keys 등으로 열거할 수 없다.
// // lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다.
// console.log(Object.keys(person)); // ['firstName']

// // [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없다.
// // lastName 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할 수 없다.
// // 이때 값을 변경하면 에러는 발생하지 않고 무시된다.
// person.lastName = "Kim";
// console.log(person.lastName); // Doe

// // [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없다.
// // lastName 프로퍼티는 [[Configurable]]의 값이 false이므로 삭제할 수 없다.
// // 이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시된다.
// delete person.lastName;
// console.log(person.lastName); // Doe

// // [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의할 수 없다.
// // Object.defineProperty(person, "lastName", { enumerable: true });
// // TypeError: Cannot redefine property: lastName

// descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
// console.log("lastName", descriptor);
// // lastName { value: 'Doe', writable: false, enumerable: false, configurable: false }

// // 접근자 프로퍼티 정의
// Object.defineProperty(person, "fullName", {
//   // getter 함수
//   get() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   // setter 함수
//   set(name) {
//     [this.firstName, this.lastName] = name.split(" ");
//   },
//   enumerable: true,
//   configurable: true,
// });

// descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
// console.log("fullName", descriptor);
// // fullName {enumerable: true, configurable: true, get: ƒ, set: ƒ}

// person.fullName = "Jane Smith";
// console.log(person); // {firstName: 'Jane', lastName: 'Doe'}

const person = {};

Object.defineProperties(person, {
  // 데이터 프로퍼티 정의
  firstName: {
    value: "Jonn",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "Lee",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  // 접근자 프로퍼티 정의
  fullName: {
    // getter 함수
    get() {
      return `${this.fistName} ${this.lastName}`;
    },
    // setter 함수
    set(name) {
      [this.firstName, this.lastName] = name.split(" ");
    },
    enumerable: true,
    configurable: true,
  },
});

person.fullName = "Jane Smith";
console.log(person); // {firstName: 'Jane', lastName: 'Smith'}
