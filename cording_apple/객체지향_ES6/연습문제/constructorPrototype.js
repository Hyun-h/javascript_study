function createProductData(name, price) {
  this.name = name;
  this.price = price;
  this.vat = function () {
    console.log(this.price * 0.1);
  };
}

const product1 = new createProductData("shirts", 50000);
const product2 = new createProductData("pants", 60000);

console.log(product1);
console.log(product2);

product1.vat();
product2.vat();

console.log(createProductData.prototype);

createProductData.prototype.category = "wear";

console.log(product1.category);

//문제1
function student(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`Hi! I am ${name}!`);
  };
}

const student1 = new student("kim", 20);
const student2 = new student("park", 21);
const student3 = new student("lee", 22);

console.log(student1, student2, student3);
student1.sayHi();
student2.sayHi();
student3.sayHi();

//문제2 : 아래의 출력 결과와 이유는?
/*
Kim이 나오는 이유 : 자바스크립트의 구동원리를 생각하자!
constructor에 의해 a에 직접적인 object가 생겼고,
a.__proto__.name = "Park"; 은 a의 부모에 정보를 넣는 것이라 출력이 후순위임.
console.log에는 a의 직접적인 정보인 Kim에 출력된다.
*/
function Parent() {
  this.name = "Kim";
}
var a = new Parent();

a.__proto__.name = "Park";
console.log(a.name);

//문제3 : 아래의 함수는 왜 의도한대로 출력이 되지 않는 것인가?
/*
arrow function은 function() 의 대체제가 아니다.
함수 안에서 this 의 뜻은 매번 재정의가 되는데,
function() 은 함수 안에서 this가 재정의가 된다.
arrow function은 바깥에 있는 this를 그대로 사용하고 싶을 때 사용한다.
*/
function Student(이름, 나이) {
  this.name = 이름;
  this.age = 나이;
}

Student.prototype.sayHi = () => {
  console.log("안녕 나는 " + this.name + "이야");
};
var 학생1 = new Student("Kim", 20);

학생1.sayHi(); //왜 이 코드가 제대로 안나오죠?

//문제4 모든 array에 적용할 수 있는 함수를 직접 새로 만들려면?
console.log(Array.prototype);
Array.prototype.remove3 = function () {
  //this에서 3을 찾아서 제거해주세요
  console.log(this);
  return this.filter((el) => el !== 3);
};

const arr = [1, 2, 3, 4];
console.log(arr.remove3());
