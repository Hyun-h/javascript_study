//키, 몸무게, 상의사이즈, 하의사이즈 정보를 각각 뽑아서 4개의 변수를 만들기
let bodyInfo = {
  body: {
    height: 190,
    weight: 70,
  },
  size: ["상의 Large", "바지 30인치"],
};

let {
  body: { height, weight },
  size: [상의, 하의],
} = bodyInfo;

console.log(height, weight, 상의, 하의); //190 70 '상의 Large' '바지 30인치'
