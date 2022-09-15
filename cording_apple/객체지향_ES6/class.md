# class

constructor를 만드는 신문법

## 사용법

```js
class parents {
  constructor() {
    this.name = "kim";
  }
}

const child = new parents();
console.log(child); //부모 {name: "kim"}
```

### 함수를 쓰고 싶으면

1. constructor에 추가하든가 : 자식이 직접 함수를 가짐

```js
class parents {
  constructor() {
    this.name = "kim";
    this.sayHi = function () {
      console.log("hello");
    };
  }
}
```

2. constructor 아래에 추가하던가 : 부모 prototype에 추가

```js
class parents {
  constructor() {
    this.name = "kim";
  }
  //자식 오브젝트에는 추가되지 않는다. 내장 함수를 만든다던가 할 때 편함.
  sayHi() {
    console.log("hello");
  }
}
```

### 함수를 여러 개 추가하고 싶으면

1. constructor 아래에 추가

```js
class parents {
  constructor() {
    this.name = "kim";
  }
  sayHi() {
    console.log("hello");
  }
  sayAnything() {
    console.log("say yeah!");
  }
}
```

2. 밖에서 추가

```js
class parents {
  constructor() {
    this.name = "kim";
  }
  sayHi() {
    console.log("hello");
  }
}

parents.prototype.sayAnything = function () {
  console.log("say yeah!");
};
```

### class의 constructor에 파라미터 추가

```js
class parents {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const child = new parents("park", 30);
```

## 번외 : Object.getPrototypeOf()

```js
class parents {
  constructor() {
    this.name = "kim";
  }
  sayHi() {
    console.log("hello");
  }
}

const child = new parents();

console.log(child.__proto__); //parents의 prototype(유전자)이 출력됨
Object.getPrototypeOf(child); //위와 같은 의미
```

---

## extends : class를 상속하기

기존의 class와 유사하지만 속성을 그대로 물려받은 class를 만들고 싶으면 extends를 하자.

```js
class grandpapa {
  constructor(name) {
    this.lastName = "kim";
    this.firstName = name;
  }
}

class papa extends grandpapa {
  //grandpapa의 속성을 받으면서 새로운 속성 추가도 가능하다.
  constructor(age) {
    this.age = age; //error! 이유는 아래로
  }
}
```

### super()

#### 첫번째 용도

<strong>물려받는 class의 constructor라는 뜻.</strong>

extends해서 쓴 class는 this를 그냥 못써서 꼭 2가지의 규칙을 따라야 한다.

1. extends한 class의 constructor에 super()를 추가할 것.
2. 만약 부모 요소의 constructor에 전달해야 하는 파라미터가 있으면 constructor와 super의 파라미터에 부모 constructor 파라미터를 꼭 넣을 것.

```js
class grandpapa {
  constructor(name) {
    this.lastName = "kim";
    this.firstName = name;
  }
}

class papa extends grandpapa {
  constructor(name, age) {
    //만약에 부모에게 전달해야 하는 파라미터가 있으면 constructor와 super에 해당 파라미터를 꼭 넣는다. (매우 중요)
    super(name);
    this.age = age;
  }
}

const papa1 = new papa("john", 50);
console.log(papa1); //papa {lastName: 'kim', firstName: 'john', age: 50}
```

#### 두번째 용도

<strong>부모 class의 prototype을 의미</strong>

```js
class grandpapa {
  constructor(name) {
    this.lastName = "kim";
    this.firstName = name;
  }
  sayHi() {
    console.log("I am grandpapa!");
  }
}

class papa extends grandpapa {
  constructor(name, age) {
    //부모 class의 constructor
    super(name);
    this.age = age;
  }
  sayHi() {
    console.log("I am papa!");
    //부모 class의 prototype을 의미, 그걸 실행시켜 주세요!
    super.sayHi();
  }
}

const papa1 = new papa("john", 50);
```
