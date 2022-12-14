# 데이터 타입

데이터 타입(data type)은 값의 종류를 말한다. 자바스크립트는 ES6 기준 7개의 데이터 타입을 제공한다.(BigInt가 추가된 ES11 기준으로는 8개)  
7개의 데이터 타입은 원시 타입(primitive type), 객체 타입(object/reference type)으로 분류한다.

| 구분     | 데이터 타입          | 설명                                                |
| -------- | -------------------- | --------------------------------------------------- |
| 원시타입 | 숫자(number) 타입    | 숫자, 정수와 실수 구분 없이 하나의 숫자 타입만 존재 |
|          | 문자열(string) 타입  | 문자열                                              |
|          | 불리언(boolean) 타입 | 논리적 참(true)과 거짓(false)                       |
|          | undefined 타입       | var 키워드로 선언된 변수에 암묵적으로 할당되는 값   |
|          | null 타입            | 값이 없다는 것을 의도적으로 명시할 때 사용하는 값   |
|          | 심벌(symbol) 타입    | ES6에서 추가된 7번째 타입                           |
| 객체타입 |                      | 객체, 함수, 배열 등                                 |

자바스크립트는 객체 기반의 언어이며, 자바스크립트를 이루고 있는 거의 모든 것이 객체이다. 6가지 데이터 타입 이외의 모두 객체 타입이다.  
6장에서는 원시 타입에 대한 정리만 하고, 객체 타입에 대한 건 11장에서 자세히 살펴본다.
