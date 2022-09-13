//spread 문제 1 : 코드의 출력 결과는?
var a = [1, 2, 3];
var b = "김밥";
var c = [...b, ...a];
console.log(c); //[김, 밥, 1, 2, 3]

//spread 문제 2 : 대괄호가 가득한 위 코드의 출력 결과는?
var a = [1, 2, 3];
var b = ["you", "are"];
var c = function (a, b) {
  console.log([[...a], ...[...b]][1]); //you
};
c(a, b);

//default 파라미터 문제 1 : 코드의 출력 결과는?
function 함수(a = 5, b = a * 2) {
  console.log(a + b);
  return 10;
}
함수(3); //9

//default 파라미터 문제 2 : 코드의 출력 결과는?
function 함수(a = 5, b = a * 2) {
  console.log(a + b);
}
함수(undefined, undefined); //undefined

//array 만드는 함수 제작
function 어레이(...rest) {
  return rest;
}

var newArray = 어레이(1, 2, 3, 4, 5);
console.log(newArray); //출력예제 : [1,2,3,4,5]

//Math.max를 이용하여 아래 array의 최댓값을 구하는 함수 만들기. 단 괄호 안에 하나하나 넣으면 안됨.
var numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
const maxNumber = Math.max(...numbers);
console.log(maxNumber);

//sort()를 활용하여 글자를 알파벳순으로 정렬해주는 함수 만들기
function 정렬(text) {
  const sortText = [...text].sort();
  console.log(...sortText);
}

정렬("bear");

//데이터마이닝 기능 만들기
/*
글자세기('aacbbb') 라고 입력하면 콘솔창에

{ a : 2, b : 3, c : 1 }

▲ 이렇게 출력해주는 글자세기() 라는 함수를 만들고 싶습니다.

쉽게말하자면 입력한단어에 들어있는 알파벳의 갯수를 세어서 오브젝트에 기록해주고 출력까지 해주는 함수입니다. 

글자세기라는 함수를 어떻게 만들면 될까요? 
*/
function 글자세기(text) {
  const textArr = [...text].sort();

  const result = textArr.reduce((acc, curr) => {
    console.log("acc", acc, "curr", acc[curr]);
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  console.log("result", result);
}

글자세기("aacbbb");
