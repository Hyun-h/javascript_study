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

//자바스크립트로 상품 목록 카드 생성하기
function setCard(id) {
    const card = `
    <div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${products[id].title}</h5>
        <p>가격 : ${products[id].price}</p>
    </div>
    `;

    return card;
}

const row = document.querySelector('.row');
for (let id = 0; id < products.length; id++) {
    row.innerHTML += setCard(id);
}

// select
const pantsSizeList = [28, 30, 32, 34];
const shirtSizeList = [95, 100, 105, 110];
const productSelect = document.querySelector('.product-select');
const optionSelect = document.querySelector('.option-select');

productSelect.addEventListener('change', (e) => {
    //option-select가 생기지 않는 하나의 경우를 참으로 빼서 삼항연산자로 처리
    e.currentTarget.value == '모자' ? optionSelect.classList.remove('show') : optionSelect.classList.add('show');

    //option이 셔츠일 때 option
    if (e.currentTarget.value == '셔츠') {
        optionSelect.innerHTML = '';
        shirtSizeList.forEach((shirtSize) => {
            optionSelect.innerHTML += `<option>${shirtSize}</option>`;
        });
    }

    //option이 바지일 때 option
    if (e.currentTarget.value == '바지') {
        optionSelect.innerHTML = '';
        pantsSizeList.forEach((pantsSize) => {
            optionSelect.innerHTML += `<option>${pantsSize}</option>`;
        });
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
