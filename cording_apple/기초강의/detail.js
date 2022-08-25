//tab menu
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

//이벤트 내부에서 반복되는 forEach 분리해서 함수로 만들기
function isTabActive(selectors, className) {
    selectors.forEach((item) => {
        item.classList.remove(className);
    });
}

//tab nodeList 반복문
tabButtons.forEach((button, index) => {
    //nodeList 배열의 요소가 클릭되는 이벤트
    button.addEventListener('click', () => {
        isTabActive(tabButtons, 'orange');
        button.classList.add('orange');

        isTabActive(tabContents, 'show');
        tabContents[index].classList.add('show');
    });
});

//object에서 자료 뽑아서 변경
const car = {
    name: '소나타',
    price: [50000, 20000, 40000],
};

document.getElementById('product-name').innerText = car.name;
document.getElementById('product-price').innerText = car.price[0];

//products 데이터를 html에 바인딩하기
const products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 50000, title: 'Springfield Shirt' },
    { id: 2, price: 60000, title: 'Black Monastery' },
];

const title = document.querySelectorAll('.card-body > h5');
const price = document.querySelectorAll('.card-body > p');

function setProduct(id) {
    title[id].innerText = products[id].title;
    price[id].innerText = `가격 : ${products[id].price}`;
}

for (let i = 0; i < products.length; i++) {
    setProduct(i);
}

// select
const productSelect = document.querySelector('.product-select');
const optionSelect = document.querySelector('.option-select');

productSelect.addEventListener('change', (e) => {
    //option-select가 생기지 않는 하나의 경우를 참으로 빼서 삼항연산자로 처리
    e.currentTarget.value == '모자' ? optionSelect.classList.remove('show') : optionSelect.classList.add('show');

    //option이 바지일 때 option html 교체
    if (e.currentTarget.value == '셔츠') {
        const shirtOption = `<option>95</option>
        <option>100</option>`;

        optionSelect.innerHTML = '';
        optionSelect.innerHTML = shirtOption;
    }

    if (e.currentTarget.value == '바지') {
        //밑에처럼 짜버리면 확장성 부족해짐. js에서 html 생성하는 방법을 배우는 이유는 확장성 때문임.
        // optionSelect.options[0].innerHTML = '28';
        // optionSelect.options[1].innerHTML = '30';
        const pentsOption = `<option>28</option>
        <option>30</option>`;

        optionSelect.innerHTML = '';
        optionSelect.innerHTML = pentsOption;
    }
});

//자바스크립트로 html 생성
const test = document.getElementById('test');

//방법1 => 추천
//document.createElement('p') : ()안에 요소를 만들어주세요!
const createPTag = document.createElement('p');
createPTag.innerHTML = '안녕!!!!';
//필요하다면 createPTag.classList.add()로 class 추가도 가능
//selector.appendChild() : selector로 찾은 요소에 ()를 추가해주세영!
test.appendChild(createPTag);

//방법2
const pHello = '<p>안녕!</p>';
//selector.insertAdjacentHTML() : html에 괄호 안에 걸 추가해주세요!
//beforeend : 안쪽 제일 아래에 추가해주세요
//그냥 때려박고 싶을 때는 test.innerHTML = pHello;
test.insertAdjacentHTML('beforeend', pHello);
