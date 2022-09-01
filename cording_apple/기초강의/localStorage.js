/*
localStorage에 array, object 저장하기.
array나 object를 그냥 위에처럼 저장하면 문자열로 강제로 변환이 되면서 깨져서 저장이 됨.

1. 변수에 원하는 형태를 담기
2. array/object -> JSON으로 바꾸기
3. localStorage에 등록하기

만약 sessionStorage를 쓰고 싶으면 local -> session으로 변경
*/
const localArr = [1, 2, 3];
const NewLocalArr = JSON.stringify(localArr);

localStorage.setItem("num", NewLocalArr);

//꺼낼 때도 그대로 꺼내면 문자열로 꺼내지게 되어서 JSON 변환 필요.
const 꺼낸거 = localStorage.getItem("num");
const 꺼낸거배열 = JSON.parse(꺼낸거);
console.log(꺼낸거배열[1]);

/*
localStorage 데이터 수정

1. 자료꺼냄
2. 꺼낸 거 수정하기
3. 다시 넣음
*/

/*
로컬스토리지는 저장이 되지만, 배열은 로딩이 될 때마다 휘발이 된다.
로컬스토리지와 배열의 개념적 기계가 충돌하는 정신 모델을 만들어서 구조 자체가 잘못 구현됨.

TODO: 로컬스토리지 저장하는 함수에서 key: cart기 있느냐 없느냐에 따라 새로 저장 / 수정하기
TODO: 중복된 상품이 있을 경우 나열하는 게 아닌 몇 개인지 구현
*/

const CART_KEY = "cart";
const savedCartItem = localStorage.getItem(CART_KEY);

let cartItems = [];

function saveCartItem() {
  localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
}

if (savedCartItem !== null) {
  displayNotification();
}

//구매버튼 누르면 누른 상품 cartItem에 넣고 saveCartItem 실행
function handleCartList(e) {
  const productId = e.target.dataset.id;
  if (productId != undefined) {
    const newCartItemObj = {
      title: productData[productId].title,
      price: productData[productId].price,
    };
    cartItems.push(newCartItemObj);
    saveCartItem();
  }
}

//cart가 localStorage에 존재할 때 뜨는 UI
function displayNotification() {
  const cartNotification = document.querySelector(".cart_notification");
  cartNotification.classList.add("show");
}

document.querySelector(".row").addEventListener("click", handleCartList);
