//navbar 열고 닫기
document.querySelector(".navbar-toggler").addEventListener("click", () => {
  document.querySelector(".list-group").classList.toggle("show");
});

//login modal 열고 닫기
document.querySelector("#modal-open").addEventListener("click", () => {
  document.querySelector(".black-bg").classList.toggle("show-modal");
});

document.querySelector("#modal-close").addEventListener("click", () => {
  document.querySelector(".black-bg").classList.toggle("show-modal");
});

//form 관련 이벤트
document.querySelector("form").addEventListener("submit", (e) => {
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;

  //input 빈값 체크
  if (emailValue.trim() === "" || passwordValue.trim() === "") {
    alert("빈칸 채워주세요!");
    e.preventDefault();
  }

  //비밀번호 길이 체크
  //TODO: alert 함수로 뽑아보기
  if (passwordValue.length <= 6) {
    alert("비밀번호 좀 길게 치쇼!");
    e.preventDefault();
  }

  //email 정규식
  if (/\S+@\S+\.\S+/.test(emailValue) === false) {
    alert("이메일 형식 아님");
    e.preventDefault();
  }

  //비밀번호 대문자 정규식
  if (/[A-Z]/.test(passwordValue) === false) {
    alert("비밀번호에 알파벳 대문자 없음");
    e.preventDefault();
  }
});

//버튼 눌렀을 때 light, dark 바뀜
let count = 0;
document.querySelector(".badge").addEventListener("click", () => {
  count += 1;

  if (count % 2 === 1) {
    document.querySelector(".badge").innerHTML = "Light 🔄";
  } else {
    document.querySelector(".badge").innerHTML = "Dark 🔄";
  }
});

//1초마다 5라는 문자를 1씩 감소, 0이 되면 박스 숨기기
let timerCount = 5;
const counter = setInterval(timer, 1000);

//setInterval 안에 들어가는 함수
function timer() {
  //1씩 마이너스
  timerCount--;

  //카운트가 0일 때 발동
  if (timerCount === 0) {
    //변수에 저장한 setInterval 가져와서 중단하기
    clearInterval(counter);
    document.querySelector(".alert").style.display = "none";
  }

  //키운트를 받아서 innerHTML로 넣어주기
  document.querySelector(".alert > span").innerHTML = timerCount;
}

//캐러셀
//TODO: transition 중복적인 코드 정리해보기. 코드 구조 다시 짜기
document.querySelector(".slide-1").addEventListener("click", () => {
  document.querySelector(".slide-container").style.transform =
    "translateX(0vw)";
});
document.querySelector(".slide-2").addEventListener("click", () => {
  document.querySelector(".slide-container").style.transform =
    "translateX(-100vw)";
});
document.querySelector(".slide-3").addEventListener("click", () => {
  document.querySelector(".slide-container").style.transform =
    "translateX(-200vw)";
});

//다음 버튼을 누르는 이벤트 발생
let currentPhoto = 1;
document.querySelector(".next").addEventListener("click", () => {
  document.querySelector(
    ".slide-container"
  ).style.transform = `translateX(-${currentPhoto}00vw)`;
  if (currentPhoto === 1) {
    currentPhoto += 1;
  }
});

document.querySelector(".before").addEventListener("click", () => {
  document.querySelector(".slide-container").style.transform = `translateX(-${
    currentPhoto - 1
  }00vw)`;
  if (currentPhoto === 2) {
    currentPhoto -= 1;
  }
});
