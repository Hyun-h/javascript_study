# Symbol

## 심볼 만드는 방법

```js
const symbol = Symbol("아무 설명이나 넣기");
```

## 심볼은 어디다 쓸까?

심볼은 Object 자료형의 비밀스러운 key 값으로 나왔다.

그냥 일반적인 형태로 자료를 저장할 경우 노출이 그대로 된다.

```js
const person = {
  name: "Kim",
};

//이렇게 키를 추가해버리면 숨기고 싶은 데이터일 경우 노출이 된다.
person.weight = 100;

consol.log(person); //{name: 'Kim', weight: 100}
```

반면 심볼을 사용하면 아래와 같이 나온다.

심볼을 입력하는 방법 1.

```js
const weight = Symbol("몸무게는 노출되기 싫어요!");
const person = {
  name: "Kim",
};

//오브젝트에 자료를 그냥 넣을 경우
person.weight = 100;
//심볼을 이용해 자료를 넣을 경우
person[weight] = 200;

console.log(person); //{name: 'Kim', weight: 100, Symbol(몸무게는 노출되기 싫어요!): 200}
```

심볼을 입력하는 방법 2.

```js
const weight = Symbol("몸무게는 노출되기 싫어요!");
const person = {
  name: "Kim",
  //이렇게 직접 넣어줄 수 있다.
  [weight]: 200,
};
```

단순히 console.log로 출력하면 어떤게 다른지 실감이 나지 않는데, 반복문으로 출력을 할 때 어떤 게 다른지 확인할 수 있다.

```js
for (let key in person) {
  //심볼을 이용해 넣은 자료는 출력되지 않는다
  console.log(person[key]); //Kim 100
}
```

반복문에 뜨지 않을 분이지 아래처럼 충분히 출력할 수 있다!

```js
console.log(person[weight]); //200
```

심볼은 enumerable(열거할 수 있는) 하지 않아 반복문에서 출력되지 않는다.  
그래서 비밀스럽게 내용을 넣고 싶다던가, 오브젝트 안에서 주석을 달고 싶을 경우 사용한다.  
또한 반복문에 뜨지 않아 기존 코드를 해칠 염려가 없으므로 import 해 온 파일이나 라이브러리를 쓸 때 오브젝트에 자료를 추가하고 싶은 경우에도 쓴다.

## 특징

1. 설명이 같다고 해서 같은 Symbol이 아니다.  
   Symbol()이라고 할 때마다 각각 유니크하게 생성된다.

```js
const a = Symbol("설명1");
const b = Symbol("설명1");

console.log(a === b); //false
```

2. Symbol.for()로 만드는 전역심볼  
   Symbol.for()로 새로운 Symbol을 만들 때 설명이 같으면 이미 그 설명을 가지고 있는 Symbol을 그 자리에 집어넣는다.

```js
const a = Symbol.for("설명1");
//즉, const b = a. 똑같다고 인지하고 집어넣는다.
const b = Symbol.for("설명1");

console.log(a === b); //true
```

3. 기본 내장 심볼
   자료형에 [Symbol.iterator]를 붙여 출력을 하면 기본으로 내장되어 있는 심볼을 볼 수 있다.  
   심볼은 몰래 자료를 저장할 때 쓰는 자료형이어서 반복문을 써도 출력되지 않아 인지하지 못하고 있었다.

```js
const arr = [2, 3, 4];
//위의 person[weight]과 비슷하지 않은가? 이것도 원리는 똑같다.
console.log(arr[Symbol.iterator]);
```
