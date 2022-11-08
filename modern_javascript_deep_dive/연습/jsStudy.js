// const o = {};

// //console.log(o.[[prototype]]);
// console.log(o.__proto__);

const person = {
  name: "Lee",
};

person.age = 20;

console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptors(person));
