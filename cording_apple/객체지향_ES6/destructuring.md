# destructuring

## array에서

ES6 이전에 array에서 destructuring 할당은 이랬다.

```js
var arr = [1, 2, 3];

var one = arr[0];
var two = arr[1];
var three = arr[2];

console.log(one, two, three); //1 2 3
```

하지만 ES6에서는 아래와 같이 할 수 있다.

```js
const arr = [1, 2, 3];

const [one, two, three] = arr;

console.log(one, two, three); //1 2 3
```

배열 디스트럭처링 할당의 기준은 배열이 인덱스여서 순서대로 할당된다.  
이때 좌변과 우변의 갯수가 반드시 일치하지 않아도 되지만 남는 건 undefined 처리가 된다.

```js
const [a, b, c] = [1, 2];

console.log(a, b, c); //1 2 undefined
```

배열 디스트럭처링 할당은 default parameter처럼 default를 설정할 수 있다.

```js
const [a, b, c = 5] = [1, 2];

console.log(a, b, c); //1 2 5
```

함수의 파라미터 자리에 디스트럭처링 할당을 응용해서 넣을 수 있다.

```js
function printValue([one, two]) {
  console.log(one, two);
}

printValue([1, 2]); // 1 2
```

## object에서

object 데이터를 꺼내 변수에 담으려면?

ES5 ver.

```js
var peopleObj = { peopleName: "kim", peopleAge: 30 };
var peopleName = peopleObj.peopleName;
var peopleAge = peopleObj.peopleAge;
```

ES6 ver.
주의할 점은 <strong>변수명을 key와 똑같이 써야한다.</strong>

```js
const peopleObj = { peopleName: "kim", peopleAge: 30 };
//키를 기준으로 디스트럭처링 할당이 이루어지므로 순서는 의미없다.
const { peopleAge, peopleName } = peopleObj;

console.log(peopleName, peopleAge); //kim 30
```

object 또한 default 지정이 가능하다.

```js
const peopleObj = { peopleName: "kim" };
const { peopleAge = 0, peopleName } = peopleObj;

console.log(peopleName, peopleAge); //kim 0
```

key와 맞춘 변수명을 변경하고 싶을 경우 아래와 같이 한다.

```js
const peopleObj = { peopleName: "kim", peopleAge: 30 };
const { peopleName: justName, peopleAge } = peopleObj;

console.log(justName, peopleAge); //kim 30
```

반대로 변수들을 object에 집어넣고 싶을 때는 이렇게 축약할 수 있다.

```js
const name = "kim";
const age = 30;

const obj = { name, age }; // === const obj = { name : name, age : age };
```

디스트럭처링 할당으로 함수의 파라미터 자리에 오브젝트의 데이터만 넣는 것도 가능하다.

```js
const peopleObj = { peopleName: "kim", peopleAge: 30 };

function printValue({ peopleName, peopleAge }) {
  console.log(peopleName, peopleAge);
}

printValue(peopleObj); //kim 30
```

중첩 객체의 경우 다음과 같이 사용한다.

```js
let bodyInfo = {
  body: {
    height: 190,
    weight: 70,
  },
  size: ["상의 Large", "바지 30인치"],
};

let {
  //body 프로퍼티 키로 객체를 추출하고, 이 객체의 height, weight 프로퍼티 키로 값을 추츨한다.
  body: { height, weight },
  //객체 안 배열이라 하더라도 배열이면 배열에서의 디스트럭처링을 사용할 수 있다는 걸 기억하자.
  size: [상의, 하의],
} = bodyInfo;

console.log(height, weight, 상의, 하의); //190 70 '상의 Large' '바지 30인치'
```
