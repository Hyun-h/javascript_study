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
