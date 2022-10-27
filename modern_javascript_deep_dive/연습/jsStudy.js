const sampleData = [
  { name: "Kim", age: 20, address: "Seoul" },
  { name: "Lee", age: 11, address: "Suwon" },
  { name: "Park", age: 45, address: "Daegu" },
  { name: "Woo", age: 62, address: "Ulsan" },
  { name: "Choi", age: 32, address: "Busan" },
];

// let copyData = [...sampleData];
// delete copyData[2];

// console.log(copyData);
// console.log(copyData[2]);

// const filterData = copyData.filter((arrItem) => arrItem !== undefined);

// console.log(filterData);

//splice는 원본을 건드리므로 원본 데이터 복사해서 사용하기
const shopsArr = [...sampleData];

//target index 제거
shopsArr.splice(2, 1);

//수정된 배열 보내기
console.log(shopsArr);
