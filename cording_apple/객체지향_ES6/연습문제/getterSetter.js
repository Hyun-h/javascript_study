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
