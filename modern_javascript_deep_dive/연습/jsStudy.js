// var x = 1,
//   y = 2;

// var obj = {
//   x: x,
//   y: y,
// };

// console.log(obj);

// var prefix = "prop";
// var i = 0;

// var obj = {};

// obj[prefix + "-" + ++i] = i;
// obj[prefix + "-" + ++i] = i;
// obj[prefix + "-" + ++i] = i;

// console.log(obj);

// const prefix = "prop";
// let i = 0;

// const obj = {
//   [`${prefix}-${++i}`]: i,
//   [`${prefix}-${++i}`]: i,
//   [`${prefix}-${++i}`]: i,
// };

// console.log(obj);

// var obj = {
//   name: "Lee",
//   sayHi: function () {
//     console.log("Hi! " + this.name);
//   },
// };

// obj.sayHi();

const obj = {
  name: "Lee",
  sayHi() {
    console.log(`Hi! ${this.name}`);
  },
};

obj.sayHi();
