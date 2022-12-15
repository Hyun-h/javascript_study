const person = {
  name: "Lee",
  address: "Seoul",
};

// Person 객체에 name 프로퍼티가 존재한다.
console.log("name" in person); // true
// Person 객체에 address 프로퍼티가 존재한다.
console.log("address" in person); // true
// Person 객체에 age 프로퍼티가 존재한다.
console.log("age" in person); // false

console.log("toString" in person);

console.log(Reflect.has(person, "name")); // true
console.log(Reflect.has(person, "toString")); // true

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("age")); // false
console.log(person.hasOwnProperty("toString")); // false
