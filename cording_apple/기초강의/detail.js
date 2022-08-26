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

//카드 UI
function setCard(product) {
    const card = `
    <div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${product.title}</h5>
        <p>가격 : ${product.price}</p>
    </div>
    `;

    return card;
}

//데이터로 카드 생성하기
function drawCard(data) {
    const row = document.querySelector('.row');
    data.forEach((product) => {
        row.innerHTML += setCard(product);
    });
}

drawCard(products);

//더보기 클릭했을 때 상품 카드 더 나오게 하기
const more = document.getElementById('more');

let moreClick = 0;
more.addEventListener('click', () => {
    //클릭할 때마다 횟수 올라감
    moreClick++;

    //클릭횟수를 저장한 변수를 api주소 쪽에 넣어서 다른 api 호출하게 함
    fetch(`https://codingapple1.github.io/js/more${moreClick}.json`)
        .then((res) => res.json())
        .then(function (data) {
            console.log(data);
            drawCard(data);
        })
        .catch(function (error) {
            console.log('실패함');
        });

    //2번 카운팅 되면 버튼 사라지게 하기
    if (moreClick === 2) {
        document.getElementById('more').style.display = 'none';
    }
});

//가격 오름차순
const sortBtn = document.getElementById('sort');
sortBtn.addEventListener('click', () => {
    const sortProduct = products.sort((a, b) => {
        //sort도 forEach깉이 루프를 돌면서 두 파라미터를 비교하는 형태라 object형태에서 꺼내쓸 수 있는듯
        return a.price - b.price;
    });

    document.querySelector('.row').innerHTML = '';
    drawCard(sortProduct);
});

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

//sort()
const arr1 = [7, 3, 5, 6, 2];
const arr2 = ['이', '히', '기', '디', '비'];

//return이 양수면 a를 오른쪽으로, 음수면 b를 오른쪽으로 정렬
//return a - b : 오름차순
//return a - b : 내림차순
arr1.sort(function (a, b) {
    return b - a;
});

//문자 내림차순
arr2.sort(function (a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
    if (a === b) return 0;
});

console.log(arr1);
console.log(arr2);
