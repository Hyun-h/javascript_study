# 20.1 strict mode란?

```js
function foo() {
  x = 10;
}
foo();

console.log(x); // ?
```

어떤 개발자가 위와 같은 코드를 짰다.  
개발자는 그만 실수로 선언하지 않은 변수에 값을 할당했다.

자바스크립트 엔진은 선언하지 않은 변수에 값을 할당했을 때 에러를 발생시키지 않고 암묵적으로 전역 객체에 x 프로퍼티를 동적 생성한다.  
이때 전역 객체의 x 프로퍼티는 마치 전역 변수처럼 사용할 수 있다.  
이런 현상을 암묵적 전역(implicit global)이라 한다.

strict mode는 자바스크립트 언어의 문법을 엄격하게 적용하여 개발자의 실수, 오류를 발생시킬 가능성이 있는 코드, 자바스크립트 엔진의 최적화 작업에 문제를 이르킬 수 있는 코드에 대해 명시적인 에러를 발생시킨다.

ESLint로 strict mode와 유사한 효과를 얻을 수 있다.
ESLint는 소스코드를 실행하기 전에 소스코드를 스캔하여 문법적 오류와 잠재적 오류를 찾아내고 오류의 원인을 리포팅 해준다.

# 20.2 strict mode의 적용

전역의 선두 또는 함수 몸체의 선두에 "use strict";을 추가한다.  
전역의 선두에 추가하면 스크립트 전체에 strict mode가 적용된다.

```js
"use strict";

function foo() {
  x = 10; // ReferenceError: x is not defined
}
foo();
```

함수 몸체의 선두에 추가하면 해당 함수와 중첩 함수에 strict mode 가 적용된다.

```js
function foo() {
  "use strict";

  x = 10; // ReferenceError: x is not defined
}
foo();
```

코드 선두에 "use strict";를 위치시키지 않으면 strict mode가 제대로 동작하지 않는다.

```js
function foo() {
  x = 10; // 에러가 발생하지 않는다.

  ("use strict");
}
foo();
```

# 20.3 전역에 strict mode를 적용하는 것은 피하자

전역에 적용한 strict mode는 다른 스크립트에 영향을 주지 않고 해당 스크립트에 한정되어 단위별로 적용된다.

```html
<!DOCTYPE html>
<html lang="en">
  <body>
  <script>
    "use strict";
  </script>
  <script>
    x = 1; // 에러가 발생하지 않는다
  </script>
  <script>
    "use strict";

    y = 1;
    console.log(y); // ReferenceError: y is not defined
  </script>
</html>
```

strict mode와 non-strict mode 혼용하는 것은 오류를 발생시킬 수 있다.  
외부 서드파티 라이브러리에서 non-strict mode인 경우가 있어서 전역에 strict mode를 적용시키는 것은 바람직하지 않다.

그런 경우 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수 선두에 strict mode를 적용하자.

```js
// 즉시 실행한수 선두에 strict mode 적용
(function () {
  "use strict";

  // Do something...
})();
```

# 20.4 함수 단위로 strict mode를 적용하는 것도 피하자

앞의 설명처럼 함수 단위로 적용할 수 있지만 어떤 함수별로 strict mode를 적용여부를 결정하는 건 바람직하지 않고 함수마다 strick mode를 적용하는 건 번거롭다.  
그리고 strict mode가 적용된 함수가 참조할 함수 외부 컨텍스트에 strict mode를 적용하지 않는다면 문제가 발생할 수 있다.

```js
(function () {
  // non-strict mode
  var let = 10; // 에러가 발생하지 않는다.

  function foo() {
    "use strict";

    let = 20; // Unexpected strict mode reserved word
  }
  foo();
})();
```

strict mode는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 게 바람직하다.

# 20.5 strict mode가 발생시키는 에러

## 암묵적 전역

선언하지 않은 변수를 참조하면 ReferenceError가 발생한다.

```js
(function () {
  "use strict";

  x = 1;
  console.log(x); // ReferenceError: x is not defined
})();
```

## 변수, 함수, 매개변수의 삭제

delete 연산자로 변수, 함수, 매개변수를 삭제하면 ReferenceError가 발생한다.

```js
(function () {
  "use strict";

  var x = 1;
  delete x; // Delete of an unqualified identifier in strict mode

  function foo(a) {
    delete a; // Delete of an unqualified identifier in strict mode
  }
  delete foo; // Delete of an unqualified identifier in strict mode
})();
```

## 매개변수 이름의 중복

중복된 매개변수 이름을 사용하면 ReferenceError가 발생한다.

```js
(function () {
  "use strict";

  // SyntaxError: Duplicate parameter name not allowed in this context
  function foo(x, x) {
    return x + x;
  }

  console.log(foo(1, 2));
})();
```

## with 문의 사용

with 문은 SyntaxError가 발생한다.

with 문은 전달된 객체를 스코츠 체인에 추가한다.  
동일한 객체의 프로퍼티를 반복해서 사용할 때 객체 이름을 생략할 수 있어서 코드가 간단해지지만 성능과 가독성이 나빠진다.

```js
(function () {
  "use strict";

  // SyntaxError: Strict mode code may not include a with statement
  with ({ x: 1 }) {
    console.log(x);
  }
})();
```

# strict mode 적용에 의한 변화

## 일반 함수의 this

strict mode에서 함수를 일반 함수로 호출하면 this에 undefined가 바인딩된다.  
생성자 함수가 아닌 함수 내부에서는 this가 필요없기 때문이다.  
이때 에러는 발생하지 않는다.

```js
(function () {
  "use strict";

  function foo() {
    console.log(this); // undefined
  }
  foo();

  function Foo() {
    console.log(this); // foo
  }
  new Foo();
})();
```

## arguments 객체

strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.

```js
(function (a) {
  "use strict";
  // 매개변수에 전달된 인수를 재할당하여 변경
  a = 2;

  // 변경된 인수가 arguments 객체에 반영되지 않는다.
  console.log(arguments); // { 0: 1, length: 1}
})(1);
```
