const CART_KEY = "cart";

function saveCartItem(newCartItemObj) {
  //저장된 로컬스토리지 값 제이슨으로 불러오기
  const savedCartItem = localStorage.getItem(CART_KEY);
  let cartItems = [];

  if (savedCartItem !== null) {
    const parsedCartItems = JSON.parse(savedCartItem);
    //some()으로 원하는 값이 존재하는지 참, 거짓으로 판별
    const isParsedItem = parsedCartItems.some((item) => {
      return item.title === newCartItemObj.title;
    });
    //로컬스토리지의 값과 비교했을 때 중복이면 count만 수정
    if (isParsedItem) {
      cartItems = parsedCartItems.map((item) => {
        if (item.title === newCartItemObj.title) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    } else {
      cartItems = [...parsedCartItems, newCartItemObj];
    }
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  } else {
    localStorage.setItem(CART_KEY, JSON.stringify([newCartItemObj]));
  }

  //오브젝트 초기화
  newCartItemObj = {};
  displayNotification();
}

//구매버튼 누르면 누른 상품이 오브젝트로 생성되고 파라미터로 saveCartItem에 전달
function handleCartList(e) {
  const productId = e.target.dataset.id;
  if (productId !== undefined) {
    const newCartItemObj = {
      title: productData[productId].title,
      price: productData[productId].price,
      count: 1,
    };
    saveCartItem(newCartItemObj);
  }
}

//장바구니에 담긴 걸 표시하는 UI
function displayNotification() {
  const cartNotification = document.querySelector(".cart_notification");
  cartNotification.classList.add("show");
}

//localStorage에 cart값이 담긴 게 확인되면 UI 띄우기
//페이지가 로드되었을 때 로컬스토리지 값
const initCartItems = localStorage.getItem(CART_KEY);
if (initCartItems !== null) {
  displayNotification();
  console.log("initCartItems", JSON.parse(initCartItems));
}

document.querySelector(".row").addEventListener("click", handleCartList);
