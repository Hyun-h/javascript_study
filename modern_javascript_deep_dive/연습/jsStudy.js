// // 제너레이터 함수
// function* genFunc() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// // 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
// const generator = genFunc();

// // 제너레이터 객체는 이터러블이면서 동시에 이터레이터다.
// // 이터러블 Symbol.iterator 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속받은 객체다.
// console.log(Symbol.iterator in generator); // true
// // 이터레이터는 next 메서드를 갖는다.
// console.log("next" in generator); // true

function* getFunc() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (e) {
    console.error(e);
  }
}

const generator = getFunc();

// console.log(generator.next());
// console.log(generator.return("End!"));
console.log(generator.next());
console.log(generator.throw("Error!"));
