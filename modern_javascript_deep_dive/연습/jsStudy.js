// // 무한 이터러블을 생성하는 함수
// const infiniteFibonacci = (function* () {
//   let [pre, cur] = [0, 1];

//   while (true) {
//     [pre, cur] = [cur, pre + cur];
//     yield cur;
//   }
// })();

// // infiniteFibonacci는 무한 이터러블이다.
// for (const num of infiniteFibonacci) {
//   if (num > 10000) break;
//   console.log(num);
// }

// // 제너레이터 실행기
// const async = (generatorFunc) => {
//   const generator = generatorFunc(); // 2

//   const onResolved = (arg) => {
//     const result = generator.next(arg); // 5

//     return result.done
//       ? result.value // 9
//       : result.value.then((res) => onResolved(res)); // 7
//   };
//   return onResolved;
// };

// // 1
// async(function* fetchTodo() {
//   const BASE_URL = "https://jsonplaceholder.typicode.com/todos/1";

//   const response = yield fetch(BASE_URL); // 6
//   const todo = yield response.json(); // 8
//   console.log(todo); // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
// })(); // 4

// async function fetchTodo() {
//   const BASE_URL = "https://jsonplaceholder.typicode.com/todos/1";

//   const response = await fetch(BASE_URL);
//   const todo = await response.json();
//   console.log(todo);
// }

// fetchTodo();

// // async 함수 선언문
// async function foo(n) {
//   return n;
// }
// foo(1).then((v) => console.log(v)); // 1

// // async 함수 표현식
// const bar = async function (n) {
//   return n;
// };
// bar(2).then((v) => console.log(v)); // 2

// // async 화살표 함수
// const baz = async (n) => n;
// baz(3).then((v) => console.log(v)); // 3

// // async 메서드
// const obj = {
//   async foo(n) {
//     return n;
//   },
// };
// obj.foo(4).then((v) => console.log(v)); // 4

// // async 클래스 메서드
// class MyClass {
//   async bar(n) {
//     return n;
//   }
// }
// const myClass = new MyClass();
// myClass.bar(5).then((v) => console.log(v)); // 5

const getGithubUserName = async (id) => {
  const res = await fetch(`https://api.github.com/users/${id}`); // 1
  const { name } = await res.json(); // 2
  console.log(name);
};

getGithubUserName("Hyun-h");
