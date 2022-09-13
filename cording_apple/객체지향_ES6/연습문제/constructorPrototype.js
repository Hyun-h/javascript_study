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
