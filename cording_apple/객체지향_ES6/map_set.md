# Map, Set 자료형

## Map

Object와 같이 Map도 key, value를 저장할 수 있다.

```js
const person = new Map();

//생성
person.set("name", "Kim");

//Map(1) {'name' => 'Kim'}
console.log(person);
```

왜 결과값이 => 로 나올까?
Map 자료형은 자료 간의 <strong>연관성</strong>을 표현하기 위해 사용한다.  
key, value 형식으로 저장하려면 Object 형태로 사용하고, <strong>연관성</strong>으로 표현하고 싶으면 Map으로 쓰면 된다.

그래서 자료의 이름만을 표시하는 Object는 key에 string이 들어간다.  
반면에 Map은 모든 형태의 자료형이 들어갈 수 있다.

```js
person.set([1, 2, 3], "Kim"); //연관성만 표시하므로 이런 형태 매우 가능.
```

### Map 활용

```js
const person = new Map();
person.set("age", 20);

//꺼내기
person.get("age");
//삭제하기
person.delete("age");
//자료 갯수 세기
person.size;

//Map 자료 반복문 돌리기
for (var key of person.keys()) {
  console.logO(key);
}

//자료를 직접 넣고 싶을 때
const person = new Map([
  ["age", 20],
  ["name", "Kim"],
]);
```

## Set

Array 자료형과 비슷하게 생겼다.

특징은

1. 자료를 일렬로 쭉 저장할 수 있다.
2. 중복 자료를 절대로 허용하지 않는다.

```js
const listArr = ["john", "tom", "andy", "tom"];
const listSet = new Set(listArr);

//Set(3) {'john', 'tom', 'andy'} : 중복 데이터를 방지하고 싶을 때 유용하다.
console.log(listSet);
```

### 활용

```js
const listArr = ["john", "tom", "andy", "tom"];
const listSet = new Set(listArr);

//자료 추가하기
listSet.add("sally");
//자료 있는지 확인
listSet.add("tom");
//자료 몇 개인지 세기
listSet.size;
```

Array에 있는 중복 데이터를 제거할 때 매우 유용하다

```js
let listArr = ["john", "tom", "andy", "tom"];
const listSet = new Set(listArr);

listArr = [...listSet];
//['john', 'tom', 'andy']
console.log(listArr);
```
