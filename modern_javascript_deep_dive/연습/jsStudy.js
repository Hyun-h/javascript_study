function solution(string) {
  // 검사할 기준을 데이터로 만든다
  const bracketsData = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const openBracket = Object.values(bracketsData);

  // 체크하고 넣을 빈 배열
  const checkedArr = [];

  // 매개변수로 들어온 문자열을 배열로 만든다
  const stringArr = [...string];

  stringArr.forEach((item) => {
    // 매개변수로 들어온 배열의 요소(stringArr의 요소)가 데이터의 값(openBracket)과 같은지 확인하고 같으면 checkedArr에 넣는다. (추가)
    if (openBracket.includes(item)) {
      checkedArr.push(item);
    } else {
      // checkedArr의 요소와 data의 값이 일치하면 checkedArr에서 일치하는 요소를 지운다. (추가된 요소 삭제)
      if (checkedArr.includes(bracketsData[item])) {
        checkedArr.pop(bracketsData[item]);
      } else {
        // 모든 조건문을 돌고 나서 조건에 맞지 않는 요소는 집어넣기
        checkedArr.push(item);
      }
    }
  });

  // 체크하고 넣은 checkedArr 배열의 길이로 참 거짓을 확인을 한다.
  if (checkedArr.length) {
    return "FALSE";
  } else {
    return "TRUE";
  }
}

console.log(solution(`(){()}[]`));
console.log(solution(`(){}]`));
console.log(solution(`()`));
console.log(solution(`()[]{}`));
console.log(solution(`(]`));
console.log(solution(`([)]`));
console.log(solution(`{[]}`));

// 배열을 반복문으로 돌린다. 데이터의 키와 비교를 하고 값과 일치하는지 확인
// for (let i in stringArr) {
//   if (openBracket.includes(stringArr[i])) {
//     checkedArr.push(stringArr[i]);
//     console.log("for in openBracket.includes(item) checkedArr", checkedArr);
//   } else {
//     if (checkedArr.includes(bracketsData[stringArr[i]])) {
//       checkedArr.pop(bracketsData[stringArr[i]]);
//       console.log(
//         "for in checkedArr.includes(bracketsData[stringArr[i]])",
//         checkedArr
//       );
//     } else {
//       console.log(
//         "checkedArr 안에 bracketsData 키와 일치하는 게 없을 때 넘어오는 else",
//         bracketsData[stringArr[i]]
//       );
//       return false;
//     }
//   }
// }
