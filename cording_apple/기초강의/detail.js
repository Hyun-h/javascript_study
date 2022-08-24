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
