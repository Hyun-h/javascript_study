# default parameter, argument

## default parameter

자바스크립트에서는 엄격하게 체크하는 타 언어와는 다르게 파라미터의 갯수가 달라도 에러가 나지 않는다.

```js
function sum(a, b) {
  console.log(a); //1
  console.log(a + b); //NaN
}

sum(1);
```

함수에 파라미터를 넣을 때 <strong>파라미터를 넣지 않으면</strong> 기본으로 설정해 줄 값을 넣어주는 설정을 할 수 있다.

```js
//파라미터 b에 아무 값도 들어오지 않을 경우 10을 넣어주세요!
function sum(a, b = 10) {
  console.log(a + b);
}

sum(1); //11
sum(1, 2); //3
```

default parameter에는 수학 연산, 함수도 넣는 게 가능하다.

```js
//수학연산을 넣었을 경우
function sum(a, b = 2 * a) {
  console.log(a + b);
}

sum(1); //3

//함수를 넣었을 경우
function anyFunction() {
  return 10;
}

function sum(a, b = anyFunction()) {
  console.log(a + b);
}

sum(1); //11
```
