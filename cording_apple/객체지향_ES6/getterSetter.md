# getter, setter (accessor function : 접근자 함수)

## 함수를 만들어 object data를 다루는 이유

- object 자료가 복잡할 때 데이터를 꺼내기 쉽다.
- 내부에 있는 변수를 건드리지 않아서 실수를 방지할 수 있다. 안전하게 데이터를 변경할 수 있다.

```js
const person = {
  name: "John Doe",
  age: 30,
  nextAge() {
    return this.age + 1;
  },
  //데이터를 수정해주는 함수 제작
  setAge(age) {
    this.age = age;
  },
};

person.setAge(20);
```

왜 person.age = 20; 으로 변경하지 않는걸까?  
데이터를 직접 수정하게 되면 수정할 데이터에 오류가 있을 때 검사하는 안전장치가 없이 그대로 넣어버린다.

```js
//직접 수정
person.age = "20";

//문자열로 출력. 하지만 내년 나이를 알려면 숫자열이 필요하다.
console.log(typeof person.age); //string
```

함수를 만들어서 데이터를 수정하면 검사를 하고 안전하게 기능개발을 할 수 있다.

```js
const person = {
  name: "John Doe",
  age: 30,
  nextAge() {
    return this.age + 1;
  },
  setAge(age) {
    //문자가 들어와도 숫자로 바꿔주는 내장함수에 넣어줌. 안전장치에 넣어서 한 번 더 검사
    this.age = parseInt(age);
  },
};

person.setAge("20");
console.log(person.age); //20
console.log(typeof person.age); //number
```

---

## 위와 같이 함수를 쓰려면 소괄호 써야하고 복잡하니 get, set을 씁시다

```js
const person = {
  name: "John Doe",
  age: 30,
  get nextAge() {
    return this.age + 1;
  },
  set setAge(age) {
    this.age = parseInt(age);
  },
};

//getter : 괄호없이 출력 가능
console.log(person.nextAge); //31

//setter : 괄호 안에 넣는 방식이 아닌, 등호로 사용하는 방식이라 직관적임
person.setAge = 40;
console.log(person.age); //40
console.log(person.nextAge); //41
```

### getter

- 데이터를 꺼내는 함수이므로 꼭 <strong>return</strong>이 있어야 한다.
- 파라미터가 없어야 한다.

### setter

- 파라미터가 <strong>1개</strong> 있어야 한다.

## class에서의 get/set

```js
//class로 get set 쓰기
class person3 {
  constructor() {
    this.name = "park";
    this.age = 20;
  }
  get nextAge() {
    return this.age + 1;
  }
  set setAge(age) {
    this.age = age;
  }
}

const neoPerson = new person3();

//getter 쓰기
console.log(neoPerson.nextAge); //21

//setter 쓰기
neoPerson.setAge = 40;
console.log(neoPerson.nextAge); //41
```
