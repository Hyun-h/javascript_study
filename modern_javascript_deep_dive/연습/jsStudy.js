// var Counter = (function () {
//   // private 변수
//   var num = 0;

//   // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
//   return {
//     increase() {
//       return ++num;
//     },
//     decrease() {
//       return --num;
//     },
//   };
// })();

// // private 변수는 외부로 노출되지 않는다.
// console.log(Counter.num); // undefined

// console.log(Counter.increase()); // 1
// console.log(Counter.increase()); // 2
// console.log(Counter.decrease()); // 1
// console.log(Counter.decrease()); // 0

// var foo = 123;
// var foo = 456;

// let bar = 123;
// let bar = 456;

// let foo = 1;

// {
//   let foo = 2;
//   let bar = 3;
// }

// console.log(foo);
// console.log(bar);

// //전역 스코프
// let i = 10;

// // 함수 레벨 스코프
// function foo() {
//   let i = 100;

//   // 블록 레벨 스코프
//   for (let i = 1; i < 3; i++) {
//     console.log("블록 레벨 스코프 i", i);
//   }

//   console.log("함수 레벨 스코프 i", i);
// }

// foo();

// console.log("전역 스코프 i", i);

// // 전역 변수
// var x = 1;
// // 암묵적 전역
// y = 2;
// // 전역 함수
// function foo() {}

// // var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
// console.log(window.x); // 1
// // 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 이ㅏㅆ다.
// console.log(x); // 1

// // 암묵적 전역은 전역 객체 window의 프로퍼티다.
// console.log(window.y); // 2
// console.log(y); // 2

// // 함수 선언문으로 정의한 전역 함수는 전역 객체 window의 프로퍼티다.
// console.log(window.foo); //
// // 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
// console.log(foo); //

let x = 1;

// let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다.
console.log(window.x); // undefined
console.log(x); // 1
