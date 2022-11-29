# 자바스크립트 공부를 위한 레포지토리

2022.08.10 시작

## 왜 시작하게 되었는가?

국비지원학원에서 제이쿼리를 배우면서, 학원에서는 가르치지 않은 리액트를 독학하면서 내 중심을 뚫는 불편함이 있었다. 코드를 보면 볼수록 머리가 복잡해지고 가슴은 갑갑한데 말로 설명하기는 어려웠던 막막함이 뒤따랐다.

취직하고 나서 첫 프로젝트를 마무리하고 다음 프로젝트를 위한 공부를 하려고 스택을 선정하고, 그에 대한 강의를 듣는데 들으면 들을수록 이해가 가질 않았다. 그리고 내가 혼자서 이 코드를 스스로 짤 수 있다고? 라는 의구심이 들면서 자신감마저 점점 사라져갔다.  
회사일을 해야하니 억지로 강의를 들으면서 붙들고는 있는데, 이해가 가지 않아 그만둔 공부들의 제법 있었다. 부딪히다 코드를 놓고 포기하고 다른 걸 공부하고 이런 식이었다.

그러다가 이 갑갑함이 폭발하던 계기가 생겼다.  
사람들과 『함수형 코딩』 책을 놓고 스터디를 하게 되었는데, 스터디의 진행방식은 책을 읽고 문제를 만들어와서 푸는 방식이었다. 분명히 밤을 새워가면서 문제를 푸는데 진전되는 것은 없고, 다른 스터디원들을 따라가는 것조차 벅차는 상황에 다가왔다.  
도움을 얻고 싶어 라이브 코딩을 하면서 조언을 얻었는데, 조언을 해주시던 개발자 분은 내가 코드를 짜고 푸는 걸 보면서 지긋이 한 마디 해주셨다.

#### _제가 볼 때는 현아님은 함수형 코딩을 공부하셔야 할 게 아니고, 자바스크립트 기초부터 공부하셔야 해요. 다른 분들은 함수가 어떻게 쓰이고 값을 만들어서 뱉어내는지 이해하고 하는데 현아님은 그 이해를 어려워 하시는 거 같아요._

그 말에 고민하다가 결국 스터디를 중간에 그만뒀다. 너무 맞는 말이었다. 회사에서도 다른 사람이 짠 코드를 수정할 줄 알았지, 그게 어떻게 돌아가는지 심화적으로 이해하지 못했었다. 스터디원들은 중간에 그만두는 나에게 조언과 책을 추천하면서 나의 길을 응원해주었다. 스터디원들의 조언 역시 결국의 본질을 뚫는 것이었다.

1. 자바스크립트의 접근을 리액트로 하다보니 자바스크립트 활용을 어려워 하신 거 같다.
2. 좀 더 좋은 개발자가 되려면 내부적인 이론도 충분히 알아야 한다. 그래야 새로운 것도 잘 받아들일 수 있고, 어떻게 설계하고 어떻게 잘 만들지 고민하는 좀 더 좋은 개발자가 되는 길이다.
3. 기초는 영원하니 천천히 기초 공부 해봅시다.
4. 그리고 생각 너무 깊게하지 마요!!!!!!

4번의 조언은 책 한 권을 추천받게 되는 계기가 되었는데, 스터디 초반부터 꼬리에 꼬리를 무는 생각이 코드 작성을 방해했기 때문이다. 스터디를 그만두자마자 사서 읽은 책 역시 나에게 같은 조언을 하고 있었다.

```
혼란의 첫 번째 유형 : 지식의 부족
"이 코드가 혼란스러운 이유는 의미하는 바를 모르기 때문이다."

-펠리너 헤르만스, 『프로그래머의 뇌』, 2022, 5쪽
```

보통 여러 사람들이 하나의 같은 소리를 하게 되면 그것은 상식과 진리다. 내가 하려는 행동은 조미료에 대한 이해없이 김치에 설탕이 조금 들어간다는 말을 듣고 와서 설탕 한 박스 때려부으려는 꼴이었다.  
라이브러리 전쟁에서 리액트가 현재의 승리자라고 하고 많은 개발자들이 Long Live The React를 외치지만 미래의 어느 시점에서 제이쿼리와 같은 취급을 받는 날이 오지 않으리라는 보장이 있을까? 리액트가 나왔던 2013년에도 이미 대세였던 프레임워크, 라이브러리는 있었다. 유지보수를 위해서 쓰는 곳들이 있지만 현재 대중적으로 많이 쓰이는가?  
하지만 자바스크립트는 영원하다. 새로운 기술이 나와도 자바스크립트를 잘 사용할 줄 안다면 이렇게 쓰면 되겠구나 하고 가지고 와서 쓰면 된다. 앵귤러든, 리액트든, 제이쿼리든, 커피스크립트든, 타입스크립트든 결국에는 자바스크립트를 더 잘 활용하기 위헤 나온 도구들이었다.  
그래서 김장을 하기 앞서 김치에 들어가는 재료가 뭔지, 어떻게 개량하는지 알아보려고 한다. 김장철이 다가오기 전에 미리 준비를 해놔야 한 해를 든든히 날 김치를 만들 수 있겠지.

## 어떻게 진행이 될 예정인가?

현재 계획하고 있는 순서는 이렇다.

1. 코딩애플 강의의 자바스크립트 기초 강의 듣기 => 22년 9월 6일 완료
2. 코딩애플 강의의 ES6강의 듣기 => 22년 10월 12일 완료
3. 모던 자바스크립트 딥다이브 책 정독하고 해당 레포지토리에 기록하기 => 22년 10월 13일 시작
4. 자바스크립트로 된 코딩 테스트를 풀면서 자바스크립트 만져보기

## 공부하는 방법

1. ~~내일 날짜가 있는 새 폴더를 생성한다.~~ => 1일 1커밋 이상으로 대체
2. 계획하고 있는 순서에 따라 공부를 하고 기록한다. => .md 적극 활용
3. 코드 한 줄만 쳐도 괜찮으니 공부하는 것을 **포기하지 않는다.**
4. 10년 뒤에도 개발로 괜찮게 밥 벌어먹고 나를 상상하며 공부한다.

## 모던 자바스크립트 딥 다이브 달성표

### 규칙

1. ~~한 주에 5장씩 나간다.~~ => 2주에 5장씩 나간다 : 천천히 이해해야 하는 개념들의 증가.
2. 1회독은 읽고 정리하는데 의의를 둔다. 이해가 어렵다고 늘어지거나 **포기하지 말 것.**
3. 목표한 장을 읽고 스터디원과 일요일에 점검한다.
4. 스터디원에게 어떤 걸 공부했는지, 어떤 게 이해가 가지 않았는지 토의할 정도로 읽을 것. (온라인에서 확인한다고 대충하지 말라는 소리)

| 시작날짜   | 완료날짜   | 내용        | 링크                                                             |
| ---------- | ---------- | ----------- | ---------------------------------------------------------------- |
| 2022-10-13 | 2022-10-17 | 01장 ~ 05장 | [1장][1장] [2장][2장] [4장][4장] [5장][5장]                      |
| 2022-10-17 | 2022-10-24 | 06장 ~ 10장 | [6장][6장] [7장][7장] [8장][8장] [9장][9장] [10장][10장]         |
| 2022-10-24 | 2022-11-07 | 11장 ~ 15장 | [11장][11장] [12장][12장] [13장][13장] [14장][14장] [15장][15장] |
| 2022-11-08 |            | 16장 ~ 20장 | [16장][16장] [17장][17장] [18장][18장]                           |
| 2022-      |            | 21장 ~ 25장 |                                                                  |
| 2022-      |            | 26장 ~ 30장 |                                                                  |
| 2022-      |            | 31장 ~ 35장 |                                                                  |
| 2022-      |            | 36장 ~ 40장 | [38장][38장]                                                     |
| 2022-      |            | 41장 ~ 45장 |                                                                  |
| 2022-      |            | 46장 ~ 49장 |                                                                  |

<!-- 공부 링크 정리 -->

[1장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/01%EC%9E%A5_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D
[2장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/02%EC%9E%A5_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%9E%80
[4장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/04%EC%9E%A5_%EB%B3%80%EC%88%98
[5장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/05%EC%9E%A5_%ED%91%9C%ED%98%84%EC%8B%9D%EA%B3%BC_%EB%AC%B8
[6장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/06%EC%9E%A5_%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%83%80%EC%9E%85
[7장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/07%EC%9E%A5_%EC%97%B0%EC%82%B0%EC%9E%90
[8장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/08%EC%9E%A5_%EC%A0%9C%EC%96%B4%EB%AC%B8
[9장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/09%EC%9E%A5_%ED%83%80%EC%9E%85_%EB%B3%80%ED%99%98%EA%B3%BC_%EB%8B%A8%EC%B6%95_%ED%8F%89%EA%B0%80
[10장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/10%EC%9E%A5_%EA%B0%9D%EC%B2%B4_%EB%A6%AC%ED%84%B0%EB%9F%B4
[11장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/11%EC%9E%A5_%EC%9B%90%EC%8B%9C_%EA%B0%92%EA%B3%BC_%EA%B0%9D%EC%B2%B4%EC%9D%98_%EB%B9%84%EA%B5%90
[12장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/12%EC%9E%A5_%ED%95%A8%EC%88%98
[13장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/13%EC%9E%A5_%EC%8A%A4%EC%BD%94%ED%94%84
[14장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/14%EC%9E%A5_%EC%A0%84%EC%97%AD_%EB%B3%80%EC%88%98%EC%9D%98_%EB%AC%B8%EC%A0%9C%EC%A0%90
[15장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/15%EC%9E%A5_let_const_%ED%82%A4%EC%9B%8C%EB%93%9C%EC%99%80_%EB%B8%94%EB%A1%9D_%EB%A0%88%EB%B2%A8_%EC%8A%A4%EC%BD%94%ED%94%84.md
[16장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/16%EC%9E%A5_%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0_%EC%96%B4%ED%8A%B8%EB%A6%AC%EB%B7%B0%ED%8A%B8
[17장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/17%EC%9E%A5_%EC%83%9D%EC%84%B1%EC%9E%90_%ED%95%A8%EC%88%98%EC%97%90_%EC%9D%98%ED%95%9C_%EA%B0%9D%EC%B2%B4_%EC%83%9D%EC%84%B1
[18장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/18%EC%9E%A5_%ED%95%A8%EC%88%98%EC%99%80_%EC%9D%BC%EA%B8%89_%EA%B0%9D%EC%B2%B4
[38장]: https://github.com/Hyun-h/javascript_study/tree/main/modern_javascript_deep_dive/38%EC%9E%A5_%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98_%EB%A0%8C%EB%8D%94%EB%A7%81_%EA%B3%BC%EC%A0%95
