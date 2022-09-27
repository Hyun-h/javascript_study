# 또 나왔다! 반복문!

반복문은 코드를 여러 번 실행할 때, array와 object에서 자료를 꺼내쓸 때 사용된다.

```js
//그냥 for 문
for (let i = 0; i < 3; i++) {
  console.log(i);
}

//forEach (array 전용)
[1, 2, 3].forEach((item) => console.log(item));

//for in 반복문 (object 전용)
for (let key in object) {
}

//for of 반복문 (iterable 전용)
for (let key of object) {
}
```

~~컬렉션 하나 빠진 인피니티 스톤인가~~

## for in 반복문

object 에 있던 값을 전부 하나씩 꺼내서 사용할 때 사용한다.

```js
const object = { name: "kim", age: 30 };

for (let key in object) {
  //kim
  //30
  console.log(object[key]);
}
```

### for in 반복문 특징

1. enumerable 한 것만 반복해준다.  
   위 예시 오브젝트에서 숨겨진 정보를 출력할 수 있는데 거기서 enumerable(셀 수 있는) 한 것만 반복해준다.  
   일반 자료들은 항상 enumerable이 true 가 기본값이다.

```js
const object = { name: "kim", age: 30 };

console.log(Object.getOwnPropertyDescriptor(object, "name")); //{value: 'kim', writable: true, enumerable: true, configurable: true}
```

2. 부모의 prototype도 반복해준다.

```js
class parent {
  //어쩌구 저쩌구
}
parent.prototype.name = "park";

const object = new parent();

//부모에게 object 하나 뽑아주쇼!
for (let key in object) {
  console.log(object[key]); //park
}
```

만약에 내가 직접 가지고 있는 값만 가지고 싶으면 아래와 같아 써보자.

```js
for (let key in object) {
  //object.hasOwnProperty(key) : 직접 존재하는지 여부를 참 거짓으로 결과값 반환. 참이면 출력해주세요!
  if (object.hasOwnProperty(key)) {
    console.log(object[key]);
  }
}
```

## for of 반복문

array, string, arguments, NodeList, Map, Set을 반복할 때 사용한다.

```js
//잡다한 걸 넣어야 하는 for, forEach와 비교해보자.
const array = [2, 3, 4, 5];

for (let item of array) {
  console.log(item); //2 3 4 5
}

//글자수대로 반복문이 돌면서 출력해준다.
for (let item of "가나다라마바사") {
  console.log(item); //가 나 다 라 마 바 사
}
```

iterable한 자료형에만 사용이 가능하다.  
만약에 내 자료가 iterable한 지 궁금하면 이걸로 확인해보자.

```js
arr[Symbol.iterator]();
```
