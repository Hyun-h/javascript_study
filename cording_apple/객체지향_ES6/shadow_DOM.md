# shadow DOM

가끔 가다가 복잡하게 생긴 HTML 태그가 있다.

```html
<input type="range" />
```

개발자 도구 설정에서 Show user agent shadow DOM을 키고 확인하면 이 타입은 여러 개의 div로 이루어져 있는 걸 확인할 수 있다.  
이처럼 shadow DOM은 일반적으로는 볼 수 없는 숨겨진 HTML이다.

## 사용법

1. 사용하고 싶은 element를 생성한다.

```html
<div id="mordor"></div>
```

2. JS 부분에서 attachShadow({ mode: 'open' })로 열어준다.

```js
const mordor = document.getElementById("mordor");
mordor.attachShadow({ mode: "open" });
```

3. 이제 숨기고 싶은 걸 넣어준다.

```js
mordor.shadowRoot.innerHTML = `
    <p>심연에서 왔도다</p>
  `;
```

4. elements 창에서 shadow DOM 사용할 걸 확인해보자.

## 이거 왜 쓰는데요?

이거 단독으로만 놓고 보면 써야할 이유를 못느끼지만, web components 와 함께 쓰면 효과가 강력해진다.  
두 개를 같이 쓰면 HTML 모듈을 완벽하게 만들 수 있다.

web components의 단점은 컴포넌트와 상관없는 외부의 다른 태그도 오염이 되기 쉽다는거다.

```js
class createCustomInput extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <label>안녕하세요!</label>
      <input />
      <style>label {color : red}</style>
    `

    //번외
    //이 방법으로 하면 영향을 주지 않고 이 안에서 핵셜한다. 이 방법을 쓰는 게 안전한 거 같다.
    // const label = document.createElement('label');
    // const input = document.createElement('input');
    // label.innerText = `${name} 입력하세요`
    // label.style.color = "red"
    // this.appendChild(label);
    // this.appendChild(input);
}

//customElements.define('붙일 이름', 가져올 클래스)
customElements.define("custom-input", createCustomInput);
```

```html
<custom-input></custom-input>
<!-- 컴포넌트 바깥 부분도 영향을 받는다 -->
<label>나는 왜 빨갛게 물들었지?</label>
```

class를 부여해서 해결을 해도 다른 곳과 class가 겹칠 수 있는 문제가 발생하는 등 번거로운 문제가 발생할 수 있다.  
이럴 땐 shadow DOM을 열어서 집어 넣으면 된다.  
shadow DOM의 스타일은 컴포넌트 밖에 영향을 주지 않는다.

```js
class createCustomInput extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <label>안녕하세요!</label>
      <input />
      <style>label {color : red}</style>
    `;
  }
}

customElements.define("custom-input", createCustomInput);
```

```html
<custom-input></custom-input>
<!-- 더이상 영향을 받지 않는다 -->
<label>영향을 받지 않는다!</label>
```

스타일과 태그를 shadow DOM으로 집어넣으니 다른 태그를 오염시
키지 않는다.  
web component를 만들 때 shadow DOM을 활용하는데, 진정한 html 모듈 개발이 가능하다.

## <template> tag

컴포넌트 길이가 너무 길어진다면 template에 넣어놓고 사용할 수 있다.

```html
<custom-input></custom-input>

<template id="template1">
  <label>안녕하세요!</label>
  <input />
  <style>
    label {
      color: red;
    }
  </style>
</template>
```

```js
class createCustomInput extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });

    //template 꺼내서 쓰기
    this.shadowRoot.append(template1.content.cloneNode(true));
  }
}

customElements.define("custom-input", createCustomInput);
```

template는 특수한 코드라 렌더링되지 않는다. 그래서 여기에 html을 보관하고 shadow DOM에서 꺼내서 쓰면 된다.

## 기능 넣기

shadow DOM에도 기능을 넣을 수 있다.  
eventListener로 예시를 들면 아래와 같다.

```html
<custom-input></custom-input>

<template id="template1">
  <label>안녕하세요!</label>
  <input />
  <style>
    label {
      color: red;
    }
  </style>
</template>
```

```js
class createCustomInput extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template1.content.cloneNode(true));

    //event
    const clickEvent = this.shadowRoot.querySelector("label");
    clickEvent.addEventListener("click", function () {
      console.log("click");
    });
  }
}

customElements.define("custom-input", createCustomInput);
```
