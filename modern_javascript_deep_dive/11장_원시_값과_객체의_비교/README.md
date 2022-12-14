# 원시 값과 객체의 비교

데이터 타입은 크게 두 가지로 구분할 수 있다.

| 원시 타입(primitive type)                                                                                 | 객체 타입(object/reference type)                                                                                 |
| --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 숫자, 문자열, 불리언, null, undefined, 심벌, 객체 타입의 7가지 데이터 타입                                | 원시 타입을 제외한 나머지 데이터 타입                                                                            |
| 원시타입의 값(원시 값)은 변경 불가능한 값(immutable value)                                                | 객체는 변경 가능한 값(mutable value)                                                                             |
| 원시 값을 변수에 할당하면 변수(확보된 메모리 공간)에는 실제 값이 저장                                     | 객체를 변수에 할당하면 변수(확보된 메모리 공간)에는 참조 값이 저장                                               |
| 값에 의한 전달(pass by value) : 원시 값을 갖는 변수를 다른 변수에 할당하면 원본의 원시 값이 복사되어 전달 | 참조에 의한 전달(pass by reference) : 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달 |
