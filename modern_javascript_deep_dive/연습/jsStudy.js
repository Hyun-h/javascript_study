for (var i = 2; i < 10; i++) {
  console.log(`${i}단`);
  for (var j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("-----");
}

// var count = 0;

// while (count < 3) {
//   console.log(count);
//   count++
// }

// var count = 0;

// while (true) {
//   console.log(count);
//   count++;

//   // count가 3이면 코드 블록을 탈출한다.
//   if (count === 3) break;

var count = 0;

do {
  console.log(count);
  count++;
} while (count < 3);
