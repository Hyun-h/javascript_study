# Web Components

JS로 구현할 수 있는 브라우저 기본 기능이다.  
자주 나타나고 긴 HTML도 함수처럼 재사용 할 수 있고, 큰 사이트도 확장성 있게 사용한다.  
이 개념에서 React, Vue가 나왔다. 만약 이걸 더 가볍고 쉽게 사용해보고 싶으면 Lit, Stencil 같은 걸 써보자.

## 이건 너무 반복되는 게 많고 깁니다!

간혹가다가 HTML 덩어리들이 반복되고 길어질 때가 있다.

```html
<label>이름 입력하세요</label>
<input />
<label>이메일 입력하세요</label>
<input />
<label>아이디 입력하세요</label>
<input />
<label>비밀번호 입력하세요</label>
<input />
```

이럴 때 사용 할 수 있는 게 Web Components이다.

## 사용법

### 커스텀 태그를 만들자 : 컴포넌트

```js
class createCustomInput extends HTMLElement {
  connectedCallback() {
    //방법1 : 덜 귀찮다.
    // this.innerHTML = `
    //   <label>안녕하세요!</label>
    //   <input />
    // `

    //방법2 : 생성 속도가 빠르다.
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerText = "이름 입력하세요";
    this.appendChild(label);
    this.appendChild(input);
  }
}

//customElements.define('붙일 이름', 가져올 클래스)
customElements.define("custom-input", createCustomInput);
```

```html
<custom-input></custom-input>
```

1. connectedCallback() 함수 안에 넣고 싶은 커스텀 html을 넣는다.
2. html을 만들고 싶으면 자바스크립트로 html을 만드는 문법을 쓴다. (방법은 위에 참조)
3. customElements.define()을 쓰면 컴포넌트 등록이 가능해진다.

### 모양만 같고 조금씩 내용이 변하는 걸 하고 싶은데요! : attribute를 활용하자

```js
class createCustomInput extends HTMLElement {
  connectedCallback() {
    //괄호 안의 요소를 가져와서 쓰고 싶습니다.
    const name = this.getAttribute("name");
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerText = `${name} 입력하세요`;
    this.appendChild(label);
    this.appendChild(input);
  }
}

customElements.define("custom-input", createCustomInput);
```

```html
<custom-input name="이름"></custom-input>
<custom-input name="이메일"></custom-input>
<custom-input name="아이디"></custom-input>
<custom-input name="비밀번호"></custom-input>
```

getAttribute(attributeName)을 쓰면 요소의 attributeName 으로 정의된 attribute를 가져와서 사용 할 수 있다.  
그래서 html 상에서는 custom-input의 label 부분이 각각 이름 입력하세요, 이메일 입력하세요, 아이디 입력하세요, 비밀번호 입력하세요로 보인다.

### attribute가 변경될 때 특정 코드 실행하게 하기

```js
class createCustomInput extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name");

    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerText = `${name} 입력하세요`;
    this.appendChild(label);
    this.appendChild(input);
  }

  static get observedAttributes() {
    //감시할 attribute들을 array로 넣기
    return ["name"];
  }

  attributeChangedCallback() {
    //attribute 변경 시 실행할 코드
    //name이 변경될 때마다 콘솔로 확인할 수 있다
    console.log(this.getAttribute("name"));
  }
}

customElements.define("custom-input", createCustomInput);
```

1. static get observedAttributes() 안에 감시할 attribute 들을 array 형태로 넣는다.
2. 변경되는 순간 attributeChangedCallback() 함수를 실행시켜준다.

이걸 실행하면서 확인할 수 있는건 react, vue에서 제공하는 html 재렌더링도 구현할 수 있다는 점이다.  
다만 다른 점은 state가 변할 경우 자동으로 html을 재랜더링 하는 기능도 제공하고, virtual DOM을 이용해서 재렌더링을 빠르고 효율적으로 도와준다.
