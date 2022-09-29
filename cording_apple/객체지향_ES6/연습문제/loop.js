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

let newValue;
let newKey;

for (let item of products) {
  for (let key in item) {
    //여기를 어떻게 처리하면 좋을까?
    //이 방법은 뒤집힌다.
    //마지막글자를 숫자로변환했을 때 NaN이 안나오면 (숫자면)
    // if (isNaN(parseInt(key.slice(-1))) == false) {
    //   newValue = item[key];
    //   newKey = key.slice(0, -1);
    //   item[newKey] = newValue;
    //   delete item[key];
    // }
  }
}

console.log(products);
