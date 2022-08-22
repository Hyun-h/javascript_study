//navbar 열고 닫기
document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('.list-group').classList.toggle('show');
});

//login modal 열고 닫기
document.querySelector('#modal-open').addEventListener('click', () => {
    document.querySelector('.black-bg').classList.toggle('show-modal');
});

document.querySelector('#modal-close').addEventListener('click', () => {
    document.querySelector('.black-bg').classList.toggle('show-modal');
});

//form 관련 이벤트
document.querySelector('form').addEventListener('submit', (e) => {
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;

    function alertMsg(msg) {
        alert(msg);
        e.preventDefault();
    }

    //input 빈값 체크
    if (emailValue.trim() === '' || passwordValue.trim() === '') {
        alertMsg('빈칸을 채워주세요!');
        return;
    }

    //비밀번호 길이 체크
    if (passwordValue.length <= 6) {
        alertMsg('비밀번호 좀 길게 치쇼!');
        return;
    }

    //email 정규식
    if (/\S+@\S+\.\S+/.test(emailValue) === false) {
        alertMsg('이메일 형식 아님');
        return;
    }

    //비밀번호 대문자 정규식
    if (/[A-Z]/.test(passwordValue) === false) {
        alertMsg('비밀번호에 알파벳 대문자 없음');
        return;
    }
});

//버튼 눌렀을 때 light, dark 바뀜
let count = 0;
document.querySelector('.badge').addEventListener('click', () => {
    count += 1;

    if (count % 2 === 1) {
        document.querySelector('.badge').innerHTML = 'Light 🔄';
    } else {
        document.querySelector('.badge').innerHTML = 'Dark 🔄';
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
        document.querySelector('.alert').style.display = 'none';
    }

    //키운트를 받아서 innerHTML로 넣어주기
    document.querySelector('.alert > span').innerHTML = timerCount;
}

//캐러셀
//각각의 버튼에도 재정의를 해야 앞뒤 버튼과 함께 썼을 때 버그가 생기지 않음. 늘 변경되어야 하는 변수이므로 제일 최상단으로 보내기.
let currentPhoto = 0;
const slideBtn = document.querySelectorAll('.slide-button');

//반복적으로 쓰이는 translateX 뽑아서 함수로 만들기
function setTranslate(moveVw) {
    const slideContainer = document.querySelector('.slide-container');

    slideContainer.style.transform = `translateX(-${moveVw}00vw)`;
}

//forEach로 배열이 반복문
slideBtn.forEach((buttons, index) => {
    buttons.addEventListener('click', () => {
        //클릭 이벤트가 일어날 때마다 각 버튼에 인덱스와 currentPhoto 일치하게 변수 재정의
        currentPhoto = index;
        setTranslate(currentPhoto);
    });
});

//캐러셀 앞뒤 버튼
//캐러샐이 무한으로 -가 되지 않도록 최저 숫자 부여
const startNum = 0;
//배열은 0부터 시작
const LastNum = slideBtn.length - 1;

document.querySelector('.next').addEventListener('click', () => {
    if (LastNum > currentPhoto) {
        currentPhoto++;
        setTranslate(currentPhoto);
    }
});

document.querySelector('.before').addEventListener('click', () => {
    if (startNum < currentPhoto) {
        currentPhoto--;
        setTranslate(currentPhoto);
    }
});

//scroll event
window.addEventListener('scroll', () => {
    //widow.scrollY === window.pageYOffset 세로 스크롤 얼마나 내려갔나 감지
    //window.scrollTo(x, y) : 내가 원하는 좌표로 이동하기
    //widow.scrollBy(x, y) : 현재 위치에서부터 강제로 좌표만큼 스크롤하기
    console.log(window.scrollY);
});

//TODO: 스크롤바 내리면 네비게이션 로고 작게 만들기
//TODO: 회원약관 끝까지 읽으면 alert 띄우기
