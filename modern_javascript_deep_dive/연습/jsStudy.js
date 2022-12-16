// "use strict";

// function foo() {
//   x = 10; // ReferenceError: x is not defined
// }
// foo();

// (function () {
//   // non-strict mode
//   var let = 10; // 에러가 발생하지 않는다.

//   function foo() {
//     "use strict";

//     let = 20; // Unexpected strict mode reserved word
//   }
//   foo();
// })();

// (function () {
//   "use strict";

//   x = 1;
//   console.log(x); // ReferenceError: x is not defined
// })();

// (function () {
//   "use strict";

//   var x = 1;
//   delete x;

//   function foo(a) {
//     delete a;
//   }
//   delete foo;
// })();

// (function () {
//   "use strict";

//   // SyntaxError: Duplicate parameter name not allowed in this context
//   function foo(x, x) {
//     return x + x;
//   }

//   console.log(foo(1, 2));
// })();

// (function () {
//   "use strict";

//   with ({ x: 1 }) {
//     console.log(x);
//   }
// })();

// (function () {
//   "use strict";

//   function foo() {
//     console.log(this); // undefined
//   }
//   foo();

//   function Foo() {
//     console.log(this); // foo
//   }
//   new Foo();
// })();

(function (a) {
  "use strict";
  // 매개변수에 전달된 인수를 재할당하여 변경
  a = 2;

  // 변경된 인수가 arguments 객체에 반영되지 않는다.
  console.log(arguments);
})(1);
