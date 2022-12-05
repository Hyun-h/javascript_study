// 무한 이터러블을 생성하는 함수
const infiniteFibonacci = (function* () {
  let [pre, cur] = [0, 1];

  while (true) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
})();

// infiniteFibonacci는 무한 이터러블이다.
for (const num of infiniteFibonacci) {
  if (num > 10000) break;
  console.log(num);
}

// 제너레이터 실행기
const async = (generatorFunc) => {
  const generator = generatorFunc(); // 2

  const onResolved = (arg) => {
    const result = generator.next(arg); // 5

    return result.done
      ? result.value // 9
      : result.value.then((res) => onResolved(res)); // 7
  };
  return onResolved;
};

// 1
async(function* fetchTodo() {
  const BASE_URL = "https://jsonplaceholder.typicode.com/todos/1";

  const response = yield fetch(BASE_URL); // 6
  const todo = yield response.json(); // 8
  console.log(todo); // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
})(); // 4
