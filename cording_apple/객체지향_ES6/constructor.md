# constructor

## 용도

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

## 오브젝트 안에 함수가 들어가야 한다면

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

## 예시랑 다르게 오브젝트에 각각 다른 걸 넣고싶은데?

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
