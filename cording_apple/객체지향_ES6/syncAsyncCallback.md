# sync/async & callback

자바스크립트는 항상 한줄씩 동기적으로 처리한다. (synchronous)

```js
console.log(1);
console.log(2);
console.log(3);
```

하지만 오래걸리는 작업이 있으면 웹브라우저에 의해 오래 걸리는 작업은 제껴두고 빨리 처리할 수 있는 것부터 처리를 하는데 그 방식을 비동기라고 한다. (asynchronous)

```js
console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
console.log(3);

//출력 : 1 - 3 - 2
```

자바스크립트는 동기식 처리를 하기 때문에 오래 걸리는 연산을 만나면 멈춰버린다.  
하지만 Web API와 연관된 특수한 함수를 쓰면 작업이 오래 걸릴 때 다른 것부터 실행 가능(비동기식 처리)하다.

만약 비동기 상황에서 코드를 순차적으로 실행시키고 싶으면 콜백함수를 이용한다.  
콜백함수란? 함수 안에 함수가 들어가는 것

```js
//예시코드

//setTime function
setTimeout(() => {
  console.log(2);
}, 1000);

//EventTarget.addEventListener()
someElement.addEventLIstener("click", () => {
  console.log("hi!");
});
```

자바스크립트에서 순차적으로 실행하고 싶다는 함수가 있다고 가정해보자.  
아래와 같이 짜게 되면 자바스크립트는 Web API와 관련된 함수가 나오면 나중에 실행될 수 있는 비동기적인 특수성 때문에 순차적인 실행을 보장하지 않는다.

```js
//만약 이 함수가 setTimeout이나 ajax 라면 순차적으로 함수가 실행되지 않는다
function first() {
  console.log(1);
}

function second() {
  console.log(2);
}

first();
second();
```

안정적으로 순차적인 실행을 하고 싶으면 아래와 같이 콜백함수를 만들어보자.

```js
//방법 1.
function first(callback) {
  console.log(1);
  callback();
}

function second() {
  console.log(2);
}

first(second);

//?또는 직접 함수선언문을 넣는다.
first(function () {
  console.log(2);
});
```

하지만 이렇게 순차적으로 실행하려고 콜백함수를 여러 번 사용하면 옆으로 길어지는 단점이 생긴다.
(callback hell)

```js
first(function(){
  second(function(){
    third(function(){
      ...
    });
  });
});
```
