# constructor, prototype

부모가 가진 속성을 그대로 물려받아서 오브젝트(자식)를 뽑는걸 상속(inheritance)이라 한다.  
상속은 constructor와 prototype으로 구현할 수 있다.

## constructor

### 용도

object를 복사하고 싶을 때 사용. 비슷한 object를 쉽게 찍어낼 수 있다.

```js
//object를 복사할 수 없다면 어떻게 할까?
//하드코딩
const student1 = { name: "kim", age: 15 };
const student2 = { name: "kim", age: 15 };

//constructor : object 생성 기계
function student() {
  //this : 새로 생성되는 object => 이게 그 instance
  this.name = "kim";
  this.age = 15;
}

const student1 = new student();
console.log(student1); //{name: 'kim', age: 15}
```

### 오브젝트 안에 함수가 들어가야 한다면

```js
//하드코딩 : 당연하게도 하나하나 다 넣어야 한다
const student1 = {
  name: "kim",
  age: 15,
  sayHi: function () {
    console.log(`Hi! I am ${this.name}`);
  },
};

//constructor
function student() {
  this.name = "kim";
  this.age = 15;
  this.sayHi = function () {
    console.log(`Hi! I am ${this.name}`);
  };
}

const student1 = new student();
student1.sayHi(); //Hi! I am kim
```

### 예시랑 다르게 오브젝트에 각각 다른 걸 넣고싶은데?

함수에서 파라미터를 사용했던 걸 떠올려보자. 그대로 쓰면 된다.

```js
function student(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`Hi! I am ${this.name}`);
  };
}

const student1 = new student("kim", 15);
const student2 = new student("park", 20);
console.log(student1); //{name: 'kim', age: 15, sayHi: ƒ}
console.log(student2); //{name: 'park', age: 20, sayHi: ƒ}
student1.sayHi(); //Hi! I am kim
student2.sayHi(); //Hi! I am park
```

## prototype

자바스크립트에서 지원하는 상속 방법이다.  
constructor를 만들면 prototype이라는 공간이 자동으로 생긴다.  
prototype은 유전자다.  
prototype에 값을 추가하면 모든 자식들이 물려받기 가능하다.

```js
function student(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`Hi! I am ${this.name}`);
  };
}
const student1 = new student("kim", 15);
const student2 = new student("park", 20);

console.log(student.prototype); //{constructor: ƒ}

student.prototype.gender = "man";

console.log(student1.gender); //man
```

놀랍게 student1, student2를 출력해보면 object 안에 gender가 나오지 않는다.  
부모의 유전자(prototype)에 등록을 해서 가능하다.  
왜 가능할까?

### 작동원리

위의 예시 코드 기준으로 자바스크립트는 아래와 같이 확인을 하며 작동한다.

```
1. student1이 직접 gender를 가지고 있는가? 예 : 출력 / 아니오 : 2번으로
2. student1의 부모 유전자(student.prototype)가 gender를 가지고 있는가? 예 : 출력
```

내가 직접 가지고 있는지 검사한 후 내가 가지고 있지 않으면 부모 혹은 그 조상의 유전자들을 차례대로 검사한다.  
자바스크립트 작동원리를 따라가면 내장함수는 작동원리도 쉽게 이해할 수 있다.  
부모 유전자에도 없으면 그 위의 부모 유전자, 거기에도 없으면 부모의 부모 유전자에도 찾게 된다.  
올라가다 보니 찾게 되는 조상 유전자가 내장함수이고, 그래서 실행이 가능하다.  
그래서 mdn에서 내장함수를 검색하면 <strong>Array.prototype</strong>.sort() 라고 적혀있다.

```js
//사람의 눈에 보이는 방식
const arr = [1, 2, 3];

//컴퓨터가 실제 내부적으로 만드는 방식 : array를 만드는 기계에서 하나 뽑음
//즉, 부모가 가지고 있는 유전자를 상속 받음
//그래서 부모의 유전자에 내장함수가 있는지 물어볼 수 있음 -> 내장함수 사용
const arr = new Array(1, 2, 3);
```

```js
//array 뿐만 아니라 object도 마찬가지
//모든 object자료형은 Object 부모를 이용해 상속해서 만든다.
const obj = { name: "kim" };
const obj = new Object();
```

### prototype 특징

1. prototype은 constructor 함수에만 생성된다.

```js
const arr = [1, 2, 3];
console.log(arr.prototype); //undefined
```

2. 내 부모의 유전자(부모의 prototype)를 검사하고 싶다면?

```js
console.log(arr.__proto__); //[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(student1.__proto__); //{gender: "man", constructor: ƒ}
```

```js
//__proto__ 특성을 이용해 부모를 강제로 등록할 수 있다.
const parents = { name: "kim" };
const child = {};
child.__proto__ = parents;
console.log(child.name); // "kim"
```

3. console에서 prototype 정보는 항상 출력이 된다.  
   부모의 부모를 따라 탐색하다보면 모든 object 자료형의 조상은 Object()라는 기계이다. (Object.prototype)  
   모든 array 자료형도 Array()라는 부모를 지나서 조상 쪽으로 가면 Object()이다.  
   모든 함수 자료형의 조상도 Object()이다.  
   그래서 자바스크립트는 모든 게 다 Object라고 이야기 한다.

## prototype으로 상속시키는거랑 constructor로 상속시키는거랑 차이?

자식들이 값을 직접 소유하게 하고 싶으면 constructor로 상속, 부모만 가지고 있고 그걸 참조해서 쓰게 만들고 싶으면 prototype으로 상속.  
상속할 수 있는 함수 같은 것들은 prototype으로 만들어서 사용한다.

## 같이 읽으면 좋을 자료

- https://medium.com/@limsungmook/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%99%9C-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85%EC%9D%84-%EC%84%A0%ED%83%9D%ED%96%88%EC%9D%84%EA%B9%8C-997f985adb42 : 자바스크립트는 왜 프로토타입을 선택했을까
- https://black7375.tistory.com/86 : 객체지향 시스템과 패러다임 그리고 철학
