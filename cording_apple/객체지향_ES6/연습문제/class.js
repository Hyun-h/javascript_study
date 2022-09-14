class grandpapa {
  constructor(name) {
    this.lastName = "kim";
    this.firstName = name;
  }
}

class papa extends grandpapa {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const papa1 = new papa("john", 50);
console.log(papa1);
