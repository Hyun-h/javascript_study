# Object.create()

constructor와 prototype으로 상속하는 방법은 2009년 이전의 방법이다.  
ES5에서 아래와 같은 상속 구현방법이 나왔다.

```js
Object.create(프로토타입으로 쓸 부모 object);
```

## 사용하기

```js
const parents = { name: "kim", age: 50 };
const child = Object.create(parents);
console.log(child); //{} : prototype을 쓸 부모를 부여한 거지 child에게 직접적으로 부여된 건 없음.
console.log(child.name); //"Kim"
/*
자바스크립트 구동원리를 늘 기억하자!
1. 자식이 name을 직접 가지고 있나? 아니오? : 2번으로
2. 그럼 자식의 부모 prototype에는 name이 있나? 네! : Kim 츨력
*/
```

### 자식의 정보를 바꾸고 싶으면? : 직접 정보를 주면 된다.

```js
const parents = { name: "kim", age: 50 };
const child = Object.create(parents);
child.age = 20;

console.log(child.age); //20
```

### 손주도 만들어보자

```js
const parents = { name: "kim", age: 50 };
const child = Object.create(parents);
child.age = 20;

const grandChild = Object.create(parents);

console.log(grandChild.name); //"kim"
console.log(grandChild.age); //20
//직접적으로 grandChild에 부여된 게 없을 경우, 부모와 조상의 prototype을 타고 올라가며 제일 가까운 것을 찾아서 출력
```
