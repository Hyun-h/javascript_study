//문제 1 <img> 이미지 로딩 성공과 실패할 경우 특정 코드를 실행하기
const test = document.getElementById("test");

const promise = new Promise((resolve, reject) => {
  test.addEventListener("load", () => {
    resolve("성공");
  });
  test.addEventListener("error", () => {
    reject("실패");
  });
});

promise.then(console.log).catch(console.log);

//문제 2 Ajax로 받아온 인삿말을 콘솔창에 출력
//파싱이 어떤 걸로 되느냐에 따라 .json()를 붙이든 .text()를 붙이든 할 것.
fetch("https://codingapple1.github.io/hello.txt")
  .then((res) => res.text())
  .then((data) => console.log(data));

//async, await 연습
//클릭하면 성공했어요를 띄우는 Promise 만들기

//내가 한 것
async function buttonClick() {
  const click = new Promise((resolve) => {
    document.getElementById("button").addEventListener("click", () => {
      resolve("성공했어요!");
    });
  });
  click.then(console.log);
}

// const buttonPromise = new Promise((resolve) => {
//   document.getElementById("button").addEventListener("click", () => {
//     resolve("성공했어요!");
//   });
// });

// async function buttonClick() {
//   const result = await buttonPromise;
//   console.log(result);
// }

buttonClick();
