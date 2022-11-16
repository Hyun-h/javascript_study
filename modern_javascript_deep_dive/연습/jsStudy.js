// // 1. 함수는 무명의 리터럴로 생성할 수 있다.
// // 2. 함수는 변수에 저장할 수 있다.
// // 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
// const increase = function (num) {
//   return ++num;
// };

// const decrease = function (num) {
//   return --num;
// };

// // 2. 함수는 객체에 저장할 수 있다.
// const auxs = { increase, decrease };

// // 3. 함수의 매개변수에 전달할 수 있다.
// // 4. 함수의 반환값으로 사용할 수 있다.
// function makeCounter(aux) {
//   let num = 0;

//   return function () {
//     num = aux(num);
//     return num;
//   };
// }

// // 3. 함수는 매개변수에게 함수를 전달할 수 있다.
// const increaser = makeCounter(auxs.increase);
// console.log(increaser()); // 1
// console.log(increaser()); // 2

// // 3. 함수는 매개변수에게 함수를 전달할 수 있다.
// const decreaser = makeCounter(auxs.decrease);
// console.log(decreaser()); // -1
// console.log(decreaser()); // -2

// function square(number) {
//   return number * number;
// }

// console.log(Object.getOwnPropertyDescriptors(square));
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));

// console.log(function () {}.hasOwnProperty("prototype"));
// console.log({}.hasOwnProperty("prototype"));

// const obj = { a: 1 };

// console.log(obj.__proto__ === Object.prototype); // true

// console.log(obj.hasOwnProperty("a")); // true
// console.log(obj.hasOwnProperty("__proto__")); // false

// // 기명 함수 표현식
// var namedFunc = function foo() {};
// console.log(namedFunc.name); // foo

// // 익명 함수 표현식
// var anonymousFunc = function () {};
// // ES5: name 프로퍼티는 빈 문자열을 값으로 갖는다.
// // ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖ㄴ드다.
// console.log(anonymousFunc.name); // anonymousFunc

// // 함수 선언문(Function declaration)
// function bar() {}
// console.log(bar.name); // bar

// function foo() {}
// console.log(foo.length); // 0

// function bar(x) {
//   return x;
// }
// console.log(bar.length); // 1

// function baz(x, y) {
//   return x * y;
// }
// console.log(baz.length); // 2

// function sum() {
//   let res = 0;

//   // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회할 수 있다.
//   for (let i = 0; i < arguments.length; i++) {
//     res += arguments[i];
//   }

//   return res;
// }

// console.log(sum());
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));

// function sum() {
//   // arguments 객체를 배열로 변환
//   const array = Array.prototype.slice.call(arguments);
//   return array.reduce(function (pre, cur) {
//     return pre + cur;
//   }, 0);
// }

// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4, 5));

// function sum(...args) {
//   return args.reduce((pre, cur) => pre + cur, 0);
// }

// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4, 5));

// const circle = {
//   radius: 5, // 반지름

//   // 원의 지름: 2r
//   getDiameter() {
//     return 2 * this.radius;
//   },

//   // 원의 둘레: 2πr
//   getPerimeter() {
//     return 2 * Math.PI * this.radius;
//   },

//   // 원의 넓이: πrr
//   getArea() {
//     return Math.PI * this.radius ** 2;
//   },
// };

// console.log(circle);
// // {radius: 5, getDiameter: ƒ, getPerimeter: ƒ, getArea: ƒ}

// console.log(circle.getDiameter()); // 10
// console.log(circle.getPerimeter()); // 31.41592653589793
// console.log(circle.getArea()); // 78.53981633974483

// // 생성자 함수
// function Circle(radius) {
//   this.radius = radius;
//   this.getArea = function () {
//     // Math.PI는 원주율을 나타내는 상수다.
//     return Math.PI * this.radius ** 2;
//   };
// }

// // 반지름이 1인 인스턴스 생성
// const circle1 = new Circle(1);
// // 반지름이 2인 인스턴스 생성
// const circle2 = new Circle(2);

// // Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
// // getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
// // getArea 메서드는 하나만 생성하여 모드 인스턴스가 공유해서 사용하는 것이 바람직하다.
// console.log(circle1.getArea === circle2.getArea); // false

// console.log(circle1.getArea()); // 3.141592653589793
// console.log(circle2.getArea()); // 12.566370614359172

// 생성자 함수
function Circle(radius) {
  this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
// 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다.
// 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
console.log(circle1.getArea === circle2.getArea);

console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566370614359172
