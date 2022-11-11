// // 빈 객체의 생성
// const person = new Object();

// //  프로퍼티 추가
// person.name = "Lee";
// person.sayHello = function () {
//   console.log(`Hi! My name is ${this.name}`);
// };

// console.log(person); // {name: 'Lee', sayHello: ƒ}
// person.sayHello(); // Hi! My name is Lee

// // String 생성자 함수에 의한 String 객체 생성
// const strObj = new String("Lee");
// console.log(typeof strObj); // object
// console.log(strObj); // String {'Lee'}

// // Number 생성자 함수에 의한 Number 객체 생성
// const numObj = new Number(123);
// console.log(typeof numObj); // object
// console.log(numObj); // Number {123}

// // Boolean 생성자 함수에 의한 Boolean 객체 생성
// const boolObj = new Boolean(true);
// console.log(typeof boolObj); // object
// console.log(boolObj); // Boolean {true}

// // Function 생성자 함수에 의한 Function 객체(함수) 생성
// const func = new Function("x", "return x * x");
// console.log(typeof func); // function
// console.dir(func); // ƒ anonymous(x )

// // Array 생성자 함수에 의한 Array 객체(배열) 생성
// const arr = new Array(1, 2, 3);
// console.log(typeof arr); // object
// console.log(arr); // [1, 2, 3]

// // RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
// const regExp = new RegExp(/ad+c/i);
// console.log(typeof regExp); // object
// console.log(regExp); // /ad+c/i

// // Data 생성자 함수에 의한 Date 객체 생성
// const date = new Date();
// console.log(typeof date); // object
// console.log(date); // Fri Nov 11 2022 10:36:25 GMT+0900 (한국 표준시)

// const circle1 = {
//   radius: 5,
//   getDiameter() {
//     return 2 * this.radius;
//   },
// };

// console.log(circle1.getDiameter());

// const circle2 = {
//   radius: 10,
//   getDiameter() {
//     return 2 * this.radius;
//   },
// };

// console.log(circle2.getDiameter());

// function Circle(radius) {
//   // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
//   console.log(this);

//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2 * this.radius;
//   };
// }

// // 인스턴스의 생성
// const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
// const circle2 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

// console.log(circle1.getDiameter()); // 10
// console.log(circle2.getDiameter()); // 20

// // new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다.
// // 즉, 일반 함수로서 호출된다.
// const circle3 = Circle(15);

// // 일반 함수로 호출된 Circle은 반환문이 없다. 그래서 암묵적으로 undefined를 반환한다.
// console.log(circle3);

// // 일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킨다.
// console.log(radius); // 15

// function Circle(radius) {
//   // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩 된다.
//   console.log(this); // Circle {}

//   // 2. this에 바인딩되어 있는 인스턴스를 초기화 한다.
//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2 * this.radius;
//   };
//   return 100;

//   // 3. 완성된 인스턴스가 바인딩 된 this가 암묵적으로 반환된다.
// }

// // 인스턴스의 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
// const circle = new Circle(5);
// console.log(circle); //

// 함수는 객체다.
// function foo() {}

// // 함수는 객체이므로 프로퍼티를 소유할 수 있다.
// foo.prop = 10;

// // 함수는 객체이므로 메서드를 소유할 수 있다.
// foo.method = function () {
//   console.log(this.prop);
// };

// foo.method(); // 10

// // 일반 함수 정의: 함수 선언문, 함수 표현식
// function foo() {}
// const bar = function () {};
// // 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.
// const baz = {
//   x: function () {},
// };

// // 일반 함수로 정의된 함수만이 constructor다.
// new foo(); // -> foo {}
// new bar(); // -> bar {}
// new baz.x(); // -> x {}

// // 화살표 함수 정의
// const arrow = () => {};

// new arrow(); // TypeError: arrow is not a constructor

// // 매서드 정의: ES6 메서드 축약 표현만 메서드로 인정한다.
// const obj = {
//   x() {},
// };

// new obj.x(); // TypeError: obj.x is not a constructor
