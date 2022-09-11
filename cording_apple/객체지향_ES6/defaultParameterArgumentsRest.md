# default parameter, argument, rest

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
sum(1, 2); //3 : 파라미터를 둘 다 넣으면 발동하지 않음
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

## arguments

모든 파라미터를 한꺼번에 묶어서 다루고 싶을 경우 arguments를 사용해보자.  
모든 파라미터를 array 형태로 넣어 사용할 수 있게 하는 변수가 arguments

```js
function anyFunction(a, b, c) {
  //array처럼 생겼지만 엄밀하게 말하면 array는 아님. array처럼 쓸 수 있음.
  console.log(arguments); //arguments(3) [1, 2, 3, 어쩌구저쩌구]
  console.log(arguments[0]); //1
  console.log(arguments[1]); //2
  console.log(arguments[2]); //3
  console.log(arguments[3]); //undefined

  //사용예시
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

anyFunction(1, 2, 3);
```

## rest

만약 arguments를 쓰는 상태에서 파라미터를 일부분만을 사용하고 싶은 경우가 생기면 배열을 다루듯 자료를 쪼개야 하는 일이 발생한다.  
또한 arguments는 파라미터가 몇 개가 들어갈건지 미리 선언해줘야 한다.  
그런 불편함을 개선한 ES6 문법이 rest이다.

```js
//rest parameter
//...rest의 명칭은 원하는대로 넣어줘도 괜찮다. 예시)...parameters
function anyFunction(...rest) {
  console.log(rest); //[1, 2, 3, 4, 5, 6, 7]
}

//파라미터가 몇 개가 들어오던지 미리 지정하지 않아도 된다.
anyFunction(1, 2, 3, 4, 5, 6, 7);
```

arguments는 모든 파라미터를 배열에 담지만, rest parameter는 ...rest 자리에 오는 모든 파라미터를 배열 안에 담아준다.

```js
function anyFunction(a, b ...rest) {
  console.log(rest); //[3, 4, 5, 6, 7]
}

anyFunction(1, 2, 3, 4, 5, 6, 7);
```

### 사용시 주의점

1. rest는 <strong>여기 뒤에 있는 모든 파라미터</strong>를 뜻하기 때문에 가장 뒤에 써야한다.
2. 두 번 이상 사용 금지

```js
function anyFunction(...rest, a, b) {
  console.log(rest); //error
}

function anyFunction(a, b, ...rest, ...rest2) {
  console.log(rest); //error
}
```

### ...rest vs ...spread operator 차이

rest : 함수 파라미터에 붙음  
spread operator : 그 외 나머지
