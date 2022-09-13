# primitive data type, reference data type

## primitive data type

문자와 숫자 자료형 같이 값이 변수에 그대로 저장되는 데이터 타입

```js
const text = "ddd";
const number = 1234;
```

## reference data type

array, object는 변수에 그대로 저장되는 게 아닌 reference가 저장이 된다.
reference가 저장된다 : array, object 자료가 저기에 있어요!(화살표)가 저장이 됨.

```js
const array = [1, 2, 3, 4]; //저기에 [1, 2, 3, 4]이 있어요! 라는 화살표 저장
const object = { name: "michelle" }; //저기에 { name: "michelle" } 가 있어요! 라는 화살표가 저장
```

### 특징

reference data type을 사용할 때는 꼭 복사해서 쓰자.  
reference data type을 변수에 선언하면 메모리에 데이터가 저장되어 있다고 가리키는 화살표만 할당되어 있다. reference data type을 primitive data type 같이 등호로 복사하면 화살표 값을 공유해기 때문에 문제가 일어날 수 있다.

```js
//primitive data type
let name1 = "kim";
let name2 = name1;
console.log(name1); //kim
console.log(name2); //kim
name1 = "park";
console.log(name1); //park
console.log(name2); //kim
```

```js
//reference data type
let name1 = { name: "kim" };
let name2 = name1;
name1.name = "park";
console.log(name1); //{ name: "park" }
console.log(name2); //{ name: "park" } : name2를 데이터를 바꾸지 않았는데도 바뀌어 있다.
```

```js
//이럴 경우 각각 다른 화살표를 가지게 된다.
const name1 = { name: "kim" };
const name2 = { name: "park" };
```

```js
//object를 저장한 게 아니고 화살표만 저장한 것이므로 두 개는 같은 게 아니다.
const name1 = { name: "kim" };
const name2 = { name: "kim" };
console.log(name1 == name2); //false
```

```js
const name1 = { name: "kim" };
function changeObj(obj) {
  obj.name = "park";
}
changeObj(name1); //{ name: "park" }

//파라미터는 변수생성 할당과 똑같다. 그래서 재할당이 되지 않고, 원래 name1 오브젝트는 변화가 없다.
const name1 = { name: "kim" };
function changeObj(obj) {
  obj = { name: "park" };
}
changeObj(name1); //{ name: "kim" }
```
