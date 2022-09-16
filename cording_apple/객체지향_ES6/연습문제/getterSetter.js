//모던 자바스크립트 딥다이브 예제
const person = {
  //데이터 프로퍼티
  firstName: "John",
  lastName: "Doe",

  //fullName은 접근자 함수로 구성된 접근자 프로퍼티
  //getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  //setter 함수
  set fullName(name) {
    //배열 디스트럭처링 할당
    [this.firstName, this.lastName] = name.split(" ");
  },
};

//데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(`${person.firstName} ${person.lastName}`); //John Doe

//접근자 프로퍼티를 통한 프로퍼티 값의 저장
//접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person.fullName = "Tomas Lee";
console.log(person); //{firstName: 'Tomas', lastName: 'Lee'}

//접근자 프로퍼티를 통한 프로퍼티 값의 참조
//접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName); //Tomas Lee

const person2 = {
  name: "John Doe",
  age: 30,
  get nextAge() {
    return this.age + 1;
  },
  set setAge(age) {
    this.age = parseInt(age);
  },
};

console.log(person2.nextAge); //31

person2.setAge = 40;
console.log(person2.age);
console.log(person2.nextAge);

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
console.log(neoPerson.nextAge); //21

neoPerson.setAge = 40;
console.log(neoPerson.nextAge); //41

/*
문제 4.
자바스크립트로 간단한 게임 기능을 가진 오브젝트를 뽑는 class를 만들고 싶습니다. 
다음 조건에 따라 class를 만들어보세요. class 이름은 Unit이라고 합시다.

(1) 모든 Unit의 인스턴스는 공격력, 체력 속성이 있으며 기본 공격력은 5, 기본 체력은 100으로 설정되어 있어야 합니다.
(2) 모든 Unit의 인스턴스는 전투력을 측정해주는 battlePoint라는 getter가 있습니다.
console.log( 인스턴스.battlePoint ) 이렇게 사용하면 현재 공격력과 체력을 더한 값을 콘솔창에 출력해주어야합니다.
(3) 모든 Unit의 인스턴스는 heal이라는 setter가 있습니다.
인스턴스.heal = 50 이렇게 사용하면 체력 속성이 50 증가해야합니다. 
*/

class Unit {
  constructor() {
    this.ap = 5;
    this.hp = 100;
  }
  get battlePoint() {
    return this.ap + this.hp;
  }
  set setHeal(heal) {
    this.hp += heal;
  }
}

const unit1 = new Unit();
unit1.setHeal = 50;
console.log(unit1.battlePoint);

/*
문제 5.
data.setter함수(1,2,3,4,5) 이렇게 입력하면 
data = { odd : [1,3,5], even : [2,4] }
이렇게 저장이 되어야합니다. 
*/

const Discrimination = {
  odd: [],
  even: [],
  //getter
  //getter 함수를 사용하면 odd, even에 저장된 모든 데이터들이 숫자순으로 정렬되어 출력
  sortArr() {
    this.odd.sort((a, b) => a - b);
    this.even.sort((a, b) => a - b);
  },

  //setter
  //setter 함수에 1,2,3,4 이렇게 아무 자연수나 파라미터로 입력하면 홀수는 odd, 짝수는 even 이라는 속성에 array 형태로 저장
  setNumber(...rest) {
    rest.forEach((item) => {
      item % 2 === 1 ? this.odd.push(item) : this.even.push(item);
    });
  },
};

Discrimination.setNumber(5, 6, 4, 3, 3, 42, 3, 65, 6, 7, 8);
Discrimination.sortArr();

console.log(Discrimination);
