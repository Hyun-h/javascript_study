# promise

겁먹지 말자!  
promise는 비동기 처리에서 나타난 callback hell을 개선하기 위해 ES6부터 지원하고 있는 디자인 패턴이다.

## 사용 형태

- 콜백함수랑 비슷한데 조금 더 다양한 기능을 가졌다.

```js
const promise = new Promise();

promise.then(function () {
  //프로미스가 성공할 경우 실행할 코드
});
```

- 옆으로 길어지지 않는다. 더 붙일 게 있을 경우 then을 이어붙이면 된다.

```js
const promise = new Promise();

promise
  .then(function () {
    //코드 어쩌구 저쩌구
  })
  .then(function () {
    //코드 어쩌구 저쩌구
  });
```

- 실패할 경우 실행할 수 있는 코드인 catch를 사용할 수 있다.  
  일반 콜백함수는 순차적으로 실행을 했어야 했지만, promise는 코드 실행 후 경우에 따라 다르게 코드를 사용할 수 있다.

```js
const promise = new Promise();

promise
  .then(function () {
    //성공했을 때 코드
  })
  .catch(function () {
    //실패했을 때 코드
  });
  .finally(function () {
    //성공이든 실패든 뭔가 일어났을 때 실행하는 코드
  });
```

- 프로미스는 성공과 실패를 판정하는 기계이다.  
  그래서 프로미스로 성공일 경우, 실패할 경우 코드를 짜주어야 한다.

```js
//성공 판정을 내렸을 경우
const promise = new Promise(function (resolve) {
  resolve();
});

promise.then(function () {
  //성공했을 때 실행 코드
});
```

```js
//실패 판정을 내렸을 경우
const promise = new Promise(function (reject) {
  reject();
});

promise.catch(function () {
  //실패했을 때 실행 코드
});
```

- 예시  
  어려운 연산이 있다고 가정했을 때,  
  new Promise 안에서 성공과 실패를 판단을 하고,  
  그에 맞는 코드를 실행한다.

```js
//성공!
const promise = new Promise(function (resolve, reject) {
  //대충 어려운 연산
  const sum = 1 + 1;
  //then 실행
  resolve();
});

promise
  .then(function () {
    console.log("성공!!!!!");
  })
  .catch(function () {
    console.log("실패!!!!!");
  });
```

```js
//실패!
const promise = new Promise(function (resolve, reject) {
  //대충 어려운 연산
  const sum = 1 + 1;
  //catch 실행
  reject();
});

promise
  .then(function () {
    console.log("성공!!!!!");
  })
  .catch(function () {
    console.log("실패!!!!!");
  });
```

- 성공/실패시 데이터 전달하기

```js
const promise = new Promise(function (resolve, reject) {
  //대충 어려운 연산
  const sum = 1 + 1;
  //then 으로 sum의 데이터 전달
  resolve(sum);
});

promise.then(console.log); //2
```

## promise의 3가지 상태

1. 성공하면 resolved
2. 실패하면 rejected
3. 성공 실패 판정을 대기 중이면 pending

## promise에 대한 오해

프로미스는 비동기적 처리가 가능하게 바꿔주는 마법의 문법이 아니다.  
콜백함수 디자인의 대체제일 뿐이다.

## promise가 적용된 곳들

```js
//jQuery.ajax()
$.ajax()
  .done(function () {})
  .fail();

//fetch() : fetch의 자리에 프로미스가 남는다.
fetch().then().catch();
```
