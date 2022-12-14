// // // 프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인의 종점에 위치한다.
// // // obj -> null
// let obj = Object.create(null);

// console.log(Object.getPrototypeOf(obj) === null); // true
// // Object.prototype을 상속받지 못한다.
// console.log(obj.toString()); // TypeError: obj.toString is not a function

// // obj -> Object.prototype -> null
// // obj = {};와 동일하다.
// obj = Object.create(Object.prototype);
// console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// // obj -> Object.prototype -> null
// // obj = { x: 1 };와 동일하다.
// obj = Object.create(Object.prototype, {
//   x: { value: 1, writable: true, enumerable: true, configurable: true },
// });
// // 위 코드는 아래와 동일하다.
// // obj = Object.create(Object.prototype);
// // obj.x = 1;
// console.log(obj.x); // 1
// console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// const myProto = { x: 10 };
// // 임의의 객채를 직접 상속받는다.
// // obj -> myProto -> Object.prototype -> null
// obj = Object.create(myProto);
// console.log(obj.x); // 10
// console.log(Object.getPrototypeOf(obj) === myProto); // true

// // 프로토타입이 null인 객체, 즉 프로토타입 체인의 종점에 위치하는 객체를 생성한다.
// const obj = Object.create(null);
// obj.a = 1;

// //console.log(obj.hasOwnProperty("a"));
// // TypeError: obj.hasOwnProperty is not a function

// // Object.prototype의 빌트인 메서드는 객체로 직접 호출하지 않는다.
// console.log(Object.prototype.hasOwnProperty.call(obj, "a"));

const myProto = { x: 10 };

// 객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있다.
const obj = {
  y: 20,
  // 객체ㅐ를 직접 상속받는다.
  // obj -> myProto -> Object.prototype -> null
  __proto__: myProto,
};
/*
위 코드는 아래와 동일하다.
obj = Object.create(Object.prototype, {
  x: { value: 1, writable: true, enumerable: true, configurable: true },
});
*/

console.log(obj.x, obj.y); // 10 20
console.log(Object.getPrototypeOf(obj) == myProto); // true
