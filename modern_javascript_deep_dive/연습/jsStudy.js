// var x = "global";

// function foo() {
//   var x = "local";
//   console.log(x);
// }

// foo();

// console.log(x);

// var x = "global x";
// var y = "global y";

// function outer() {
//   var z = "outer's local z";

//   console.log(x);
//   console.log(y);
//   console.log(z);

//   function inner() {
//     var x = "inner's local x";

//     console.log(x);
//     console.log(y);
//     console.log(z);
//   }

//   inner();
// }

// outer();

// console.log(x);
// console.log(z);

// function foo() {
//   console.log("global function foo");
// }

// function bar() {
//   function foo() {
//     console.log("local function foo");
//   }

//   foo();
// }

// bar();

// var x = 1;
// console.log(x);

// if (true) {
//   var x = 10;
//   console.log(x);
// }

// console.log(x); // 10

// var i = 10;

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i);

var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo();
bar();
