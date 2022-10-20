var year = 2000;
var month = 2;
var days = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;

  case 2:
    // 윤년 계산 알고리즘
    // 1. 연도가 4로 나누어 떨어지는 해(2000, 2004, 2008, 2012, 2016, 2020...)는 윤년이다.
    // 2. 연도가 4로 나누어 떨어지더라도 연도가 100으로 나누어 떨어지는 해(2000, 2100, 2200)는 평년이다.
    // 3. 연도가 400으로 나누어 떨어지는 해(2000, 2400, 2800...)는 윤년이다.
    days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    break;
  default:
    console.log("Invalid month");
}

console.log(days);
