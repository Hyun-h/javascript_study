# Template literals, tagged literals

## backaquote, backtick

1. 사용법

```js
const text = `sara`;
```

2. 장점

```js
//엔터키 가능
const list = `
    <ul>
        <li>test1</li>
    </ul>
`;

//중간중간에 변수 넣기 쉬움
const name = "sara";
const text = `Hi! I am ${name}`;
```

<br />

## tagged literal

1. 사용법

```js
let name = "sara";
let text = `Hi! I am ${name}`;

function anyFunction() {
  return 10;
}

//15
//놀랍게 함수가 실행을 한다. 함수 옆에 괄호기 아닌 백틱 문자열을 넣어도 실행.
console.log(anyFunction`Hi! I am ${name}`);
```

2. 왜 사용하냐면

```js
let name = "sara";
let text = `안녕하세요 ${name} 입니다`;

function breakText(words, variables) {
  console.log(words);
  console.log(variables);
}

//(2) ['안녕하세요 ', ' 입니다', raw: Array(2)]
//sara
breakText`안녕하세요 ${name} 입니다`;
```

- ES6 문법에서는 backtick으로 쓰인 문자를 해체, 분석할 수 있음
- 단어 순서 변경, 제거, 변수 위치를 옮기는 작업이 쉽게 가능해짐
- 해체하는 기준은 중괄호
- 해체분석기 파라미터1 : 문자들을 array화 해줌
- 해체분석기 파라미터2 : 변수를 뜻함
- 해체분석기 파라미터2 : 두 번째 변수를 뜻함
