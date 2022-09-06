# this의 여러가지 뜻

1. 그냥 쓰거나 일반 함수 안에서 쓰면 <strong>window</strong>

```js
//결과값은 {window} object
console.log(this);

function 함수() {
  console.log(this);
}

함수();
```

```js
//만약 use strict 모드라면 일반함수 내에서는 undefined
"use strict";

function 함수() {
  console.log(this);
}

함수();
```

2. 오브젝트 내 함수 안에서 쓰면 <strong>그 함수를 가지고 있는 오브젝트</strong>를 뜻함

```js
const object = {
  data: "kim",
  //주의! anyFunction: () => {} 이 형태로 쓰면 this는 함수 밖 최상단에 있던 거 그대로 사용해서 다른 게 출력될 수 있음.
  anyFunction: function () {
    //나를 포함하고 있는 오브젝트 입니다.
    console.log(this);
  },
  //오브젝트 안에 함수 넣을 때 이렇게 쓸 수 있음.
  anyFunction() {
    console.log(this);
  }

  //{data: "kim", anyFunction: f}
  object.anyFunction();
};
```

<br />

## 결국에는 1번이나 2번이나 같은 뜻이다.

window는 DOM을 보관하고 관리하는 전역객체이다. 즉 엄청 큰 {object}인 셈.  
자바스크립트 입장에서 1번을 더 풀어쓰면

```js
const window = {
  함수() {
    console.log(this);
  },
};

//즉 window.함수()
//그래서 {window}가 출력
```

<br>

---

<br>

3. 기계(오브젝트 생성기계 constructor) 안에서 쓰면 새로 생성되는 오브젝트를 뜻함

```js
class Polygon {
  constructor() {
    //여기서 this : constructor에게서 새로 생성되는 오브젝트 (instance)
    this.name = "Polygon";
  }
}

const poly1 = new Polygon();

console.log(poly1.name);
```

4. event listener에서의 this : 지금 이벤트 동작하는 곳

```js
document.getElementById("button").addEventListener("click", function (e) {
  this; //e.currentTarget;
});
```

<br>

---

<br>

- case1. event listener 내에서 콜백함수를 쓰면 this는?  
  <strong>함수가 쓰인 위치에 따라 this값이 변함</strong> : 콜백함수에서 쓰인 this는 일반 함수에서 쓰인 것. 따라서 {window} 출력

```js
document.getElementById("button").addEventListener("click", function (e) {
  const arr = [1, 2, 3];
  arr.forEach(function (item) {
    //{window}
    console.log(this);
  });
});
```

- case2. 오브젝트 내에서 콜백함수를 쓰면 this는?  
  <strong>근본없는 일반함수가 콜백함수로 들어가면 최상단 object인 window 출력</strong>

```js
const object = {
  names: ["sara", "john", "tom"],
  anyFunction: function () {
    //해당함수를 소유한 오브젝트를 출력
    //{names: Array(3), anyFunction: f}
    console.log(this);
    object.names.forEach(function () {
      //{window}
      console.log(this);
    });
  },
};

object.anyFunction();
```

- case3. 오브젝트 내에서 콜백함수를 arrow function으로 쓰면 this는?  
  <strong>arrow function은 내부의 this값을 변화시키지 않음. 외부 this값 그대로 재사용 가능</strong>

```js
const object = {
  names: ["sara", "john", "tom"],
  anyFunction: function () {
    //{names: Array(3), anyFunction: f}
    console.log(this);
    object.names.forEach(() => {
      //names: Array(3), anyFunction: f}
      console.log(this);
    });
  },
};

object.anyFunction();
```
