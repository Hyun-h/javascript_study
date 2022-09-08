var pants = 20;
var socks = 100;

function 해체분석기(단어들, 변수1, 변수2) {
  console.log(단어들);
  console.log(변수1);
  console.log(변수2);
  console.log(`${단어들[1]}${변수1} ${단어들[0]}${변수2}`);

  //하지만 pants라는 변수가 0인 경우 바지0 이렇게 출력되는게 싫어서
  //`바지다팔렸어요 양말100`이라고 문자를 아예 바꿔버리고 싶습니다.
  if (변수1 === 0) {
    변수1 = " 다 팔렸어요";
    console.log(`${단어들[0]}${변수1}${단어들[1]}${변수2}`);
  }
}

console.log(`바지${pants} 양말${socks}`);
해체분석기`바지${pants} 양말${socks}`;
