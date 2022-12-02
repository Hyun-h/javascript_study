// // // 제너레이터 함수
// function* genFunc() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// // 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
// // 이터러블이면서 동시에 이터레이터인 제너레이터 객체는 next 메서드를 갖는다.
// const generator = genFunc();

// // 처음 next 메서드를 호출하면 첫 번째 yield 표현식이 실행되고 일시 중지된다.
// // next 메서드는 이터레이터 리절트 객체({value, done})를 반환한다.
// // value 프로퍼티는 첫 번째 yield 표현식 yield된 값 1이 할당된다.
// // done 프로퍼티에는 제너레이터 함수가 끝까지 실행되었는지를 나타내는 false가 할당된다.
// console.log(generator.next()); // { value: 1, done: false }

// // 다시 next 메서드를 호출하면 두 번째 yield 표현식까지 실행되고 일시 중지된다.
// // next 메서드는 이터레이터 리절트 객체({value, done})를 반환한다.
// // value 프로퍼티는 두 번째 yield 표현식 yield된 값 2이 할당된다.
// // done 프로퍼티에는 제너레이터 함수가 끝까지 실행되었는지를 나타내는 false가 할당된다.
// console.log(generator.next()); // { value: 2, done: false }

// // 다시 next 메서드를 호출하면 세 번째 yield 표현식까지 실행되고 일시 중지된다.
// // next 메서드는 이터레이터 리절트 객체({value, done})를 반환한다.
// // value 프로퍼티는 세 번째 yield 표현식 yield된 값 3이 할당된다.
// // done 프로퍼티에는 제너레이터 함수가 끝까지 실행되었는지를 나타내는 false가 할당된다.
// console.log(generator.next()); // { value: 3, done: false }

// // 다시 next 메서드를 호출하면 남은 yield 표현식이 없으므로 제너레이터 함수의 마지막까지 실행한다.
// // next 메서드는 이터레이터 리절트 객체({value, done})를 반환한다.
// // value 프로퍼티는 제너레이터 함수의 반환값 undefined가 할당된다.
// // done 프로퍼티에는 제너레이터 함수가 끝까지 실행되었는지를 나타내는 false가 할당된다.
// console.log(generator.next()); // { value: 3, done: false }

function* genFunc() {
  // 처음에 next 메서드를 호출하면 첫 번째 yield 표현식까지 실행되고 일시 중지된다.
  // 이때 yield된 값 1은 next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티에 할당된다.
  // x변수에는 아직 아무것도 할당되지 않았다. x 변수의 값은 next 메서드가 두 번째 호출될 때 결정된다.
  const x = yield 1;

  // 두 번째 next 메서드를 호출할 때 전달한 인수 10은 첫 번째 yield 표현식을 할당받는
  // x 변수에 할당된다. 즉, const x = yield 1;은 두 번째 next 메서드를 호출했을 때 완료된다.
  // 두 번째 next 메서드를 호출하면 두 번째 yield 표현식까지 실행되고 일시 중지된다.
  // 이때 yield된 값 x + 10은 next 메서드가 변환한 이터레이터 리절트 객체의 value 프로퍼티에 할당된다.
  const y = yield x + 10;

  // 세 번째 next 메서드를 호출할 때 전달한 인수 20은 두 번째 yield 표현식을 할당받는 y 변수에 할당된다.
  // 즉, const y = yield (x + 10);는 세 번째 next 메서드를 호출했을 때 완료된다.
  // 세 번째 next 메서드를 호출하면 함수 끝까지 실행된다.
  // 이때 제너레이터 함수의 반환값 x + y는 next 메서드가 반환한 이터레이터 리절트 객체의
  // value 프로퍼티에 할당된다. 일반적으로 제너레이터의 반환값은 의미가 없다.
  // 따라서 제너레이터에서는 값을 반환할 필요가 없고 return은 종료의 의미로만 사용해야 한다.
  return x + y;
}

// 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
// 이터러블이며 동시에 이터레이터인 제너레이터 객체는 next 메서드를 갖는다.
const generator = genFunc(0);

// 처음 호출하는 next 메서드에는 인수를 전달하지 않는다.
// 만약 처음 호출하는 next 메서드에 인수를 전달하면 무시된다.
// next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티에는 첫 번째 yield된 값 1이 할당된다.
let res = generator.next();
console.log("generator.next();", res); // { value: 1, done: false }

// next 메서드에 인수로 전달한 10은 genFunc 함수의 x 변수에 할당된다.
// next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티에는 두 번째 yield된 값 20이 할당된다.
res = generator.next(10);
console.log("generator.next(10);", res); // { value: 20, done: false }

// next 메서드에 인수로 전달한 20은 gentFunc 함수의 y 변수에 할당된다.
// next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티에는 이터레이터 함수의 반환값 30이 할당된다.
res = generator.next(20);
console.log("generator.next(20);", res); // { value: 30, done: true }
