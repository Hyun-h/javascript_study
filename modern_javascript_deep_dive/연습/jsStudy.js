const $counter = document.getElementById("counter");
const $increase = document.getElementById("increase");
const $decrease = document.getElementById("decrease");

let num = 0;
const render = function () {
  $counter.innerText = num;
};

$increase.addEventListener("click", function () {
  num++;
  console.log("increase 버튼 클릭", num);
  render();
});

// $increase.onClick = function () {
//   num++;
//   console.log("increase 버튼 클릭", num);
//   render();
// };

$decrease.addEventListener("click", function () {
  num--;
  console.log("decrease 버튼 클릭", num);
  render();
});

// $decrease.onClick = function () {
//   num--;
//   console.log("decrease 버튼 클릭", num);
//   render();
// };

console.log(score);

score = 80;
var score;

console.log(score);
