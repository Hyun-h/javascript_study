// (function () {
//   var a = 3;
//   var b = 5;
//   console.log(a * b);
// })();
// (function foo() {
//   var a = 3;
//   var b = 5;
//   console.log(a * b);
// })();

// foo();

// var res = (function (a, b) {
//   return a * b;
// })(3, 5);

// console.log(res);

// function countdown(n) {
//   for (var i = n; i >= 0; i--) console.log(i);
// }

// countdown(10);

// function countdown(n) {
//   if (n < 0) return;
//   console.log(n);
//   countdown(n - 1);
// }

// countdown(10);

// function outer() {
//   var x = 1;

//   // 중첩 함수
//   function inner() {
//     var y = 2;
//     // 외부 함수의 변수를 참조할 수 있다.
//     console.log(x + y); // 3
//   }

//   inner();
// }

// outer();

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logAll = function (i) {
  console.log(i);
};

repeat(5, logAll);

var logOdds = function (i) {
  if (i % 2) console.log(i);
};

repeat(5, logOdds);
