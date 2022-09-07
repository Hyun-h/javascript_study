const people = {
  name: "손흥민",
  sayHi: function () {
    console.log(`안녕, 나는 ${this.name}`);
  },
};
people.sayHi();

const file = {
  data: [1, 2, 3, 4, 5],
};
//이렇게 하면 오브젝트 밖에서 함수 제작 가능
file.addAllAdd = function () {
  const arr = this.data;
  let add = 0;
  arr.forEach((item) => (add += item));
  console.log(add);
};
file.addAllAdd();

document.getElementById("button")?.addEventListener("click", function () {
  setTimeout(() => console.log(this.innerHTML), 1000);
});
