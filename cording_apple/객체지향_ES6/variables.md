# variables

## 사용법

```js
const lastName = "kim";
```

- 변수는 자료를 임시로 저장하는 공간
- object, array, function 등 모든 자료를 담음
- const name : 선언 / name : 할당
- var, let, const 세 개의 키워드

<br />

## 변수의 선언

```js
//var는 재선언 가능
var name;
var name;

//let과 const는 재선언 불가능
let age;
let age; //error
const gender;
const gender; //error
```

- let, const로 선언하면 같은 이름의 변수를 두 번 이상 재선언하는 실수를 막아줌.

<br />

## 변수의 값 할당

```js
var name; //선언
name = kim; //할당
var name = kim; //즉 이 형태는 선언과 할당을 동시에 하는 것

const anyObject = {
  name: "kim",
};
anyObject.name = "park"; //가능
```

- 변수를 var, let으로 만들면 재할당이 가능하고 const는 불가능하다.
- 하지만 const 변수에 오브젝트를 담으면 데이터 변경 가능 (할당이 아님!)
  - 만약 object까지 변하지 않게 만들고 싶으면 Object.freeze(anyObject)를 사용하면 됨

<br />

## 변수의 유효범위

```js
function anyFunction() {
  var name = "kim";
  console.log(name); //작동
}
console.log(name); //error
```

- var는 function 내에서만 사용할 수 있다. (function scope)

```js
if (1 === 1) {
  let name = "kim";
  console.log(name); //작동
}
console.log(name); //error
```

- let과 const는 중괄호 내에서만 사용가능. (block scope)

<br />

## 변수의 Hoisting 현상

```js
//사람의 눈에는 이렇게 보이는 선언과 할당
var age = 20;
```

```js
//자바스크립트는 이렇게 읽는다.
var age;
function anything() {
  console.log("hi!");
}
age = 20;

//그래서 아래와 같은 결과가 나올 수 있는 것
console.log(name); //undefined, (주의)const와 let은 Hoisting시 undefined가 자동으로 할당되지 않음.
var name = "Kim";
console.log(name); //kim
```

- Hosting: 변수나 함수의 선언부분을 변수의 범위 제일 위로 강제로 끌고 가서 가장 먼저 해석하는 현상

```js
//error : 함수가 아닌데요!
함수();
var 함수 = function () {
  console.log(안녕);
  var 안녕 = "Hello!";
};

//function 함수() {} : 전부가 Hoisting 됨
//var 함수 = function() {} : 선언 부분만 Hoisting
//Hoisting은 선언 부분만 되기 때문에 실행 중인 함수는 당연히 아직 함수가 아님. 그래서 에러.
```

<br />

## 변수를 여러 개 만들기

```js
const age = 20;
const name = "sara";

const age = 20,
  name = "sara";
```

- 선언할 때 쉼표를 넣으면 하나의 선언에 여러개의 할당을 할 수 있다.
- var, let, const를 여러번 쓰지 않아도 된다는 장점이 있음.

<br />

## 전역변수와 변수의 참조

```js
//전역변수 : 바깥에 있는 변수를 참조해서 쓸 수 있음
let age = 20;

function anyFunction() {
  console.log(age);
}

anyFunction(); // 20
```

```js
function anyFunction() {
  //지역변수 : 블록이나 함수 내에서 선언된 변수
  const name = "kim";
  console.log(name);
}

anyFunction(); //name
```

- var 키워드에 한해서 전역변수는 window에도 보관이 됨.

<br />

## 변수 예시

```js
let a = 1;
var b = 2;
window.a = 3;
window.b = 4;

console.log(a + b); //a=1, b=4
//var b와 window.b는 재할당 가능한 사이라 재할당.
//변수를 참조할 때는 제일 작은 단위를 참조함. 그래서 a는 1.
```

```js
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); // 5 다섯 번 출력
  }, i * 1000);
}
//반복문이 이미 다 실행이 되고 전역변수로 var i = 5가 남아있게 된다. 1~5초 후 이 console.log를 실행하려고 하는데 전역변수 i는 5라 5가 다섯 번 출력이 됨

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); // 0, 1, 2, 3, 4
  }, i * 1000);
}
//let은 block scope여서 1~5초 후 실행하려고 i를 찾으면 for {} 안에 있는 let i 사용가능
```
