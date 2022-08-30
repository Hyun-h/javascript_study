/*
TODO:
더보기를 눌러서 목록이 불러와졌을 때도 정렬 기능 3가지가 작동하게 하기

1. fetchData 분리하기
2. products와 fetchData를 그대로 가지고 와서 쓰지 않게 하기.
3. 빈배열 생성
4. 빈배열 안에 products 복사해서 넣기
5. 클릭이 되어서 (총 2번) data를 fetch 할 때마다 fetch 한 데이터를 빈배열 안에 넣기.
6. 빈배열에 넣어진 데이터를 가지고 와서 상품 목록 생성하기
7. 빈배열에 넣어진 데이터를 가지고 와서 상품 목록 정렬하는 기능 구현
8. 빈배열에 넣어진 데이터를 가지고 와서 상품 목록 필터하는 기능 구현

일단 구현은 완료. 마음에 안드는데... 새로운 방법이 떠오를 때마다 계속 고쳐볼 것.
*/
const products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

//ajax에서 데이터 가져오기
function fetchData(moreClick) {
  //클릭횟수를 저장한 변수를 주소 쪽에 넣어서 다른 호출하게 함
  fetch(`https://codingapple1.github.io/js/more${moreClick}.json`)
    .then((res) => res.json())
    .then(function (data) {
      isProductData(data);
    })
    .catch(function (error) {
      console.log("실패함");
    });
}

//products, fetchData 합친 배열 만들기
let productData = [...products];
drawCard(productData);

function isProductData(arr) {
  const data = productData.concat(arr);
  productData = data;
  drawCard(productData);
}

//더보기 클릭했을 때 데이터 뽑아오기
const more = document.getElementById("more");

let moreClick = 0;
more.addEventListener("click", () => {
  //클릭할 때마다 횟수 올라감
  moreClick++;
  fetchData(moreClick);

  //2번 카운팅 되면 버튼 사라지게 하기
  if (moreClick === 2) {
    document.getElementById("more").style.display = "none";
  }
});

//카드 UI
function setCard(product) {
  const card = `
    <div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${product.title}</h5>
      <p>가격 : ${product.price}</p>
      <button data-id=${product.id} class="btn btn-dark buy">구매</button>
    </div>
    `;

  return card;
}

//데이터로 카드 생성하기
function drawCard(data) {
  const row = document.querySelector(".row");
  row.innerHTML = "";
  data.forEach((product) => {
    row.innerHTML += setCard(product);
  });
}

//products 목록에 대해 가격순정렬, 상품명정렬, 6만원 이하 기능 구현
const sortBtns = document.querySelector(".sort_container");
sortBtns.addEventListener("click", (e) => {
  //장렬
  const ascending = productData.sort((a, b) => {
    if (e.target.dataset.sort === "price") {
      //기격 정렬
      return a.price - b.price;
    }

    if (e.target.dataset.sort === "product") {
      //상품명 내림차순
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
      if (a.title === b.title) return 0;
    }
  });

  drawCard(ascending);

  //가격 필터
  if (e.target.dataset.sort === "under-price") {
    const underPrice = productData.filter((arr) => {
      return arr.price <= 60000;
    });

    drawCard(underPrice);
  }
});

// select
const pantsSizeList = [28, 30, 32, 34];
const shirtSizeList = [95, 100, 105, 110];
const productSelect = document.querySelector(".product-select");
const optionSelect = document.querySelector(".option-select");

productSelect.addEventListener("change", (e) => {
  //option-select가 생기지 않는 하나의 경우를 참으로 빼서 삼항연산자로 처리
  e.currentTarget.value == "모자"
    ? optionSelect.classList.remove("show")
    : optionSelect.classList.add("show");

  //option이 셔츠일 때 option
  if (e.currentTarget.value == "셔츠") {
    optionSelect.innerHTML = "";
    shirtSizeList.forEach((shirtSize) => {
      optionSelect.innerHTML += `<option>${shirtSize}</option>`;
    });
  }

  //option이 바지일 때 option
  if (e.currentTarget.value == "바지") {
    optionSelect.innerHTML = "";
    pantsSizeList.forEach((pantsSize) => {
      optionSelect.innerHTML += `<option>${pantsSize}</option>`;
    });
  }
});

//object에서 자료 뽑아서 변경
const car = {
  name: "소나타",
  price: [50000, 20000, 40000],
};

document.getElementById("product-name").innerText = car.name;
document.getElementById("product-price").innerText = car.price[0];

//tab menu
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

//이벤트 내부에서 반복되는 forEach 분리해서 함수로 만들기
function isTabActive(selectors, className) {
  selectors.forEach((item) => {
    item.classList.remove(className);
  });
}

//tab nodeList 반복문
tabButtons.forEach((button, index) => {
  //nodeList 배열의 요소가 클릭되는 이벤트
  button.addEventListener("click", () => {
    isTabActive(tabButtons, "orange");
    button.classList.add("orange");

    isTabActive(tabContents, "show");
    tabContents[index].classList.add("show");
  });
});

//localStorage
//등록
localStorage.setItem("이름", "홍길동");
//출력
localStorage.getItem("이름");
console.log(localStorage.getItem("이름"));
//삭제
localStorage.removeItem("이름");
