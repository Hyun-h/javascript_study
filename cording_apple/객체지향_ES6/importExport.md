# import, export

- import 한 변수, 함수는 사용 가능하지만 수정은 불가능하다. read-only
- 브라우저 호환성 생각하면 기존에 쓰던 `<script src="#"></script>` 형태가 나을 수 있다.
- 모던 브라우저에서 `<script type="module" src="경로"></script>` 형태로 import, export 문법을 사용할 수 있다.
- react, vue, node 등에서 많이 보던 그거 맞다.

---

## 사용법

1. export default 문법  
   import 가져올 거 from '경로'  
   export default 내보낼거

```js
//library.js
const a = 10;
//export default는 파일 하나당 한 번 사용 가능
export default a;
```

```html
<!-- index.html -->
<script type="module">
  /*
    js 파일에서 export default을 쓸 때, import 뒤에 있는 부분은 작명하는 부분이어서 이름을 마음대로 바꿔도 된다.
    예) import aaaaaa from "./library.js";
   */
  import a from "./library.js";
  console.log(a); //10
</script>
```

2. 여러 개를 내보내는 export 문법  
   import {가져올 것들} from '경로'  
   export {내보낼 것들}  
   이 때는 <strong>import나 export나 변수명이 같아야 한다.</strong>

   여러 개를 내보내고 싶으면 아래와 같이 하자.

```js
//library.js
const a = 10;
const b = 20;

export { a, b };
```

또는

```js
//library.js
export const a = 10;
export const b = 20;
```

```html
<!-- index.html -->
<script type="module">
  import { a, b } from "./library.js";
  console.log(a, b); //10 20
</script>
```

3. export와 export default 동시에 사용 가능하다.

```js
//library.js
const a = 10;
const b = 20;
const c = 30;

export { a, b };
export default c;
```

```html
<!-- index.html -->
<script type="module">
  //export default 한 건 제일 왼쪽에 써주고 나머지를 나열한다.
  import c, { a, b } from "./library.js";
  console.log(a, b); //10 20
  console.log(c); //30
</script>
```

4. 변수명이 마음에 들지 않을 경우? : import 변수명 as 바꿀 이름

```html
<!-- index.html -->
<script type="module">
  import c as changeC, { a as changeA } from "./library.js";
  console.log(changeA); //10
  console.log(changeC); //30
</script>
```

5. import 할 변수들이 너무 많을 때 \* 사용하기  
   import \* as 변수들명 from '경로'

```js
//library.js
const a = 10;
const b = 20;
const c = 30;

export { a, b };
export default c;
```

```html
<!-- index.html -->
<script type="module">
  import c, * as allVariables from "./library.js";
  console.log(allVariables.a); //10 : 변수들명.변수명 으로 하나하나 가져오기
  console.log(c); //30
</script>
```
