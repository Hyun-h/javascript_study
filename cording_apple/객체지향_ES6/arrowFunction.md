# Arrow Function

```js
//기존
const greetings1 = function () {
  console.log("hi!");
};

greetings1();

//Arrow Function
const greetings2 = () => {
  console.log("hi!");
};

greetings2();
```

## Arrow Function 장점

1. 함수 본연의 기능을 아주 잘 표현한다.  
   여러가지 기능을 하는 코드를 한 단어로 묶고 재사용 하고 싶을 때, 입출력기능을 만들 때 함수를 쓰게 된다.  
   Arrow Function은 <strong>입출력기능을 아주 직관적으로 표현할 수 있어 직관적으로 파악할 수 있다.</strong>

```js
const add = (a) => {
  return a + 10;
};

console.log(add());
```

2. 파라미터 1개면 소괄호 생략 가능
3. 중괄호 안에 <strong>return 한 줄 뿐이면</strong> 중괄호와 return 생략가능

```js
//리턴 한 줄 밖에 없을 경우
const add = (a) => a + 10;
//함수 하나 밖에 없을 경우
const anyFunction = (a) => console.log;

console.log(add());
```

## Arrow Function 예시

1. forEach 콜백함수

```js
[1, 2, 3, 4].forEach((a) => console.log(a));
```

2. event listener

```js
document.getElementById("button").addEventListener("click", (e) => {
  //Arrow Function은 함수 내의 this 값을 재정의 하지 않고 바깥에 있던 this값을 그대로 사용
  //this !== e.currentTarget(X)
  //this === {window}(O)
  console.log(this);
});
```

3. Object 안의 함수

```js
const anyObject = {
  anyFunction: () => {
    //event listener의 예시와 마찬가지
    //{window}
    return this;
  },
};

anyObject.anyFunction();
```
