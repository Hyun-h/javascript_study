function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "Kim";
}

var num = 100;
var person = { name: "Lee" };

console.log(num);
console.log(person);

changeVal(num, person);

console.log(num);
console.log(person);

// 전역 실행문맥 생성. 전체 정의(word, init) 호이스팅
var word = "실행 컨텍스트에 따라 여기에 무슨 문장이 씌여도 출력되지 않습니다.";
init(); // init 실행문맥 생성. 내부 정의(word, sentence) 호이스팅
function init() {
  var word = "눈";
  function sentence() {
    console.log(`10월인데도 ${word}이 소복하게 쌓였다`); // 현재 실행문맥 내에 정의된게 없으니 outer 로 chain
  }
  sentence(); // sentence 실행문맥 생성. 내부 정의 호이스팅
}
