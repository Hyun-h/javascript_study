# async, await

개발자는 쉽고 효율적인 걸 좋아한다. 그리고 기술은 계속 발전한다.
Promise의 문법이 어려운 당신을 위해 준비했습니다! 따단!
async, await!

## new Promise 어쩌구 저쩌구 복잡한데요... : 그런 당신을 위해 준비했습니다! async!

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

## then()을 간략하게 써보자 : await

어떤 함수 안에 어려운 연산을 실행한 뒤 성공/실패를 판정하는 Promise를 만든다고 가정해보자.

```js
async function sum() {
  const hardThing = new Promise((resolve, reject) => {
    const result = 1 + 1;
    resolve(result);
  });
  hardThing.then(function (result) {
    console.log(result); //2
  });
}

sum();
```

이때 아래에 나온 then()이 너무 복잡해 보인다면 await를 써보자.

```js
async function sum() {
  const hardThing = new Promise((resolve, reject) => {
    const result = 1 + 1;
    resolve(result);
  });

  //Promise가 해결될 때까지 기다렸다가 실행해주세요!
  const result = await hardThing;
  console.log(result); //2
}

sum();
```

await를 Promise를 해결하고 판정이 나기까지 기다린다.  
판정이 끝나면 result() 함수 안에 있던 파라미터는 result 변수에 저장된다.  
<strong>await는 async function 안에서만 then 대신 사용할 수 있다.</strong>

## try, catch

만약 Promise가 실패를 판정했다고 가정해보자.

```js
async function sum() {
  const hardThing = new Promise((resolve, reject) => {
    const result = 1 + 1;
    reject(result);
  });

  const result = await hardThing;
  console.log(result); //error!!

  //위에 에러가 나서 끝나버리는 바람에 이건 출력되지 않는다.
  console.log("Hello~~??????? Anybody else?????");
}

sum();
```

await는 실패 시 에러가 나고 멈춘다.  
이대로 멈추게 되면 console.log(result); 뒤에 내가 원하는 값이 있으면 실행할 수 없는 상태가 된다.  
이때 실패를 다룰 수 있는 문법이 try, catch 이다.

```js
async function sum() {
  const hardThing = new Promise((resolve, reject) => {
    const result = 1 + 1;
    reject(result);
  });

  //try 안에 걸 해보고 에러가 나서 안되면 catch에 있는 걸 실행해주세요!
  try {
    const result = await hardThing;
    //error가 나지만
    console.log(result);
  } catch {
    //출력이 된다. 보통은 이 자리에 에러가 났을 때 경고메세지를 넣어 확인을 요구하는 문구를 넣는다.
    console.log("Finally! You got me!");
  }
}

sum();
```

반면 결과가 정상적일 경우에는 try에서 출력이 잘 된다.

```js
async function sum() {
  const hardThing = new Promise((resolve, reject) => {
    const result = 1 + 1;
    resolve(result);
  });

  try {
    const result = await hardThing;
    //성공 판정을 받을 경우 이 부분이 정상적으로 출력이 잘 된다.
    console.log(result);
  } catch {
    console.log("Finally! You got me!");
  }
}

sum();
```
