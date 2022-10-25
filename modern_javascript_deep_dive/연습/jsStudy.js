// var person = {
//   name: "Lee",
// };

// // 프로퍼티 값 갱신
// person.name = "Kim";

// // 프로퍼티 동적 생성
// person.address = "Seoul";

// console.log(person);

var person = {
  name: "Lee",
};

var copy = person;

console.log(copy === person);

copy.name = "Kim";

person.address = "Seoul";

console.log(person);
console.log(copy);
