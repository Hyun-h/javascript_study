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
    super(name);
    this.age = age;
  }
  sayHi() {
    console.log("I am papa!");
    super.sayHi();
  }
}

const papa1 = new papa("john", 50);
console.log(papa1.sayHi());

//class 문제 1. : class로 강아지 오브젝트 뽑아내는 기계 만들기
class Dog {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
  plusAge() {
    //객체 instanceof 생성자 함수 : 우변의 생성자 함수의 prototype에 바인딩된 객체가 좌변의 객체 프로토타입 체인 상에 존재하면 true, 아니면 false 반환.
    if (this instanceof Cat) {
      return this.age + 1;
    }
  }
}

const dog1 = new Dog("말티즈", "white");
const dog2 = new Dog("진돗개", "brown");

console.log(dog1, dog2);

//class 문제 2. : 위 class를 extends 해오고 필요한 항목 추가
class Cat extends Dog {
  constructor(type, color, age) {
    super(type, color);
    this.age = age;
  }
}

const cat1 = new Cat("코숏", "white", 5);
const cat2 = new Cat("러시안블루", "brown", 2);

console.log(cat1, cat2);
console.log(cat1.plusAge(), cat2.plusAge());

/*
class 문제 3.
모든 고양이와 강아지 object들은 plusAge() 라는 함수를 사용할 수 있습니다. 
(1) 한살먹기 함수는 강아지 class로부터 생성된 오브젝트가 사용하면 콘솔창에 에러를 출력해주어야합니다. 
(2) 한살먹기 함수는 고양이 class로 부터 생성된 오브젝트가 사용하면 현재 가지고있는 age 속성에 1을 더해주는 기능을 실행해야합니다.
 */
