//반복문은 역시 구구단 출력이지!
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const dan = data.slice(1, 9);

for (let danItem of dan) {
  console.log(`${danItem}단`);
  for (let dataItem of data) {
    console.log(`${danItem} x ${dataItem} =`, dataItem * danItem);
  }
}

//데이터 수정해보기
const products = [
  {
    name1: "chair",
    price1: 7000,
  },
  {
    name2: "sofa",
    price: 5000,
  },
  {
    name1: "desk",
    price3: 9000,
  },
];

let newKey;
let newValue;

for (let item of products) {
  for (let key in item) {
    if (isNaN(parseInt(key.slice(-1))) === false) {
      newValue = item[key];

      const keyArr = [...key];
      keyArr.pop();
      const joinValue = keyArr.join("");
      newKey = joinValue;

      item[newKey] = newValue;

      delete item[key];
    }
  }
}

console.log(products);
