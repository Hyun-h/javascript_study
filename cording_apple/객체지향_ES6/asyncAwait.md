# async, await

개발자는 쉽고 효율적인 걸 좋아한다. 그리고 기술은 계속 발전한다.
Promise의 문법이 어려운 당신을 위해 준비했습니다! 따단!
async, await!

## new Promise 어쩌구 저쩌구 복잡한데요...

그렇다면 function 앞에 async를 붙여보자.  
함수 실행 후 Promise 오브젝트가 남아서 then 사용이 가능하다.  
이제는 new Promise() 어쩌구 저쩌구 디자인 안해도 된다.

```js
//function 앞에 async를 붙이면
async function sum() {
  1 + 1;
}

//함수 실행 후 Promise 오브젝트가 남아 뒤에 then을 붙일 수 있다.
sum().then(function () {
  console.log("더하기 성공!");
});
```

```js
//결과값을 반환받을 경우
async function sum() {
  return 1 + 1;
}

sum().then(function (result) {
  console.log(result); //2
});
```

하지만 이렇게 보내면 성공만 가능한데, 실패할 경우에는 어떻게 나타낼까?

```js
//실패를 보내야 하는 경우
async function sum() {
  return Promise.reject("실패!");
}

sum().then(function (result) {
  console.log(result); //exercise.html:1 Uncaught (in promise) 실패! => 에러메세지를 보낸다.
});
```
