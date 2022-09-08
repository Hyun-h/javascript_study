# spread operator

- 뭔가 내용물을 빼고 싶을 때 사용
- 대괄호, 중괄호, 함수 소괄호 안에서만 사용. 안그러면 에러가 남.

## 얘는 뭘까?

1. 괄호 제거

```js
const arr = ["hello", "world"];
console.log(...arr); //hello world
```

2. 문자에 붙일 경우 : 문자도 array처럼 indexing 가능!

```js
const greetings = "hello";
console.log(...greetings); //h e l l o
```

## 어디다 쓸까?

1. array 합치기, Deep Copy

```js
const a = [1, 2, 3];
const b = [4, 5, 6];

//array deep copy
const c = [...a]; //[1, 2, 3]
//array 합치기
const d = [...a, ...b]; //[1, 2, 3, 4, 5, 6]

//왜 복사해서 써야할까? reference data type(array, object)는 바로 가져다 쓰게 되면 값을 공유한다. 각각 독립적인 값을 가지고 쓰고 싶으면 꼭 deep copy해서 쓰자.
const f = a;
a[3] = 4;
console.log(a); //[1, 2, 3, 4]
console.log(f); //[1, 2, 3, 4]
```

2. object 합치기, Deep Copy

```js
const o1 = { a: 1, b: 2 };

//object 합치기
const o2 = { ...o1, c: 3 }; //{ a: 1, b: 2, c: 3  };
//object deep copy
const o3 = { ...o2 }; //{ a: 1, b: 2, c: 3  };

//만약에 복사하다가 값 중복이 일어난다면? : 가장 뒤에 있는 걸 적용
var o1 = { a: 1, b: 2 };
var o2 = { a: 3, ...o1 };
console.log(o2); //{ a: 1, b: 2 };
```

3. array 내의 모든 데이터를 파라미터로 집어넣고 싶을 경우

```js
function sum(a, b, c) {
  console.log(a + b + c);
}

const num = [10, 20, 30];

sum(num[0], num[1], num[2]);
sum(...num); //spread operator
sum.apply(undefined, num); //ES6 이전
```
