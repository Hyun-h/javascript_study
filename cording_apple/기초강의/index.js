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
//주의점 : 스크롤 이벤트리스너는 1초에 60번 이상 실행돼서 컴퓨터에게 부담을 줄 수 있음. 많이 쓰지 말 것
//주의점 : 1초에 60번 이상 되다보니 중복으로 체크될 때도 있음

window.addEventListener('scroll', () => {
    //스크롤 내리면 네비게이션 폰트 작게, 배경색 변경
    if (window.scrollY >= 100) {
        document.querySelector('.navbar').classList.add('nav-active');
    } else {
        document.querySelector('.navbar').classList.remove('nav-active');
    }

    //페이지 내릴 때 얼마나 읽어주는지 알려주는 UI
    const html = document.querySelector('html');
    const scrollPercent = Math.floor(((window.scrollY + html.clientHeight) / html.scrollHeight) * 100);
    document.querySelector('.scroll_ui').style.width = `${scrollPercent}vw`;
});

//회원약관 끝까지 읽으면 alert 띄우기
//스크롤 이벤트가 발생했을 때 alert 한 번만 띄우기
let alertOnce = false;
const terms = document.querySelector('.terms');
terms.addEventListener('scroll', () => {
    //terms.scrollHeight : 스크롤 가능한 높이
    //terms.scrollTop : 스크롤바 내린 높이
    //terms.clientHeight : 눈에 보이는 div 박스 높이
    if (terms.scrollTop + terms.clientHeight >= terms.scrollHeight - 10 && alertOnce === false) {
        alert('약관에 동의하십니까?');
        alertOnce = true;
    }
});

//tab menu
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

function isTabActive(selectors, className) {
    selectors.forEach((item) => {
        item.classList.remove(className);
    });
}

tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        isTabActive(tabButtons, 'orange');
        button.classList.add('orange');

        isTabActive(tabContents, 'show');
        tabContents[index].classList.add('show');
    });
});
