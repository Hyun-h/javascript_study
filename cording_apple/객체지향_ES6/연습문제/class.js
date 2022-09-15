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
