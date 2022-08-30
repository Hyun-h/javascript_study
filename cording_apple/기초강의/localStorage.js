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

TODO: 구매버튼 누르면 누른 상품명 localStorage에 넣기
key: cart, Value: ["product1", "product2"]
팁1: 내 형제요소(sibling) 찾는 법 알아내기
팁2: localStorage가 비어있을 때 / 뭐가 있을 때 저장방식이 다름.
    구매버튼을 누를 때 cart 항목이 없으면 array 추가해야 함.
    구매버튼을 누를 때 cart 항목이 없으면 array 수정해야 함.

TODO: cart.html 방문 시 localStorage에 저장된 상품명들 다 보여주기
*/
const CART_KEY = "cart";

let cartItem = [];

function saveCartItem() {
  localStorage.setItem(CART_KEY, JSON.stringify(cartItem));
}

const savedCartItem = localStorage.getItem(CART_KEY);

if (savedCartItem !== null) {
  //cart가 localStorage에 존재할 때 뜨는 UI
  const cartNotification = document.querySelector(".cart_notification");
  cartNotification.classList.add("show");
}
