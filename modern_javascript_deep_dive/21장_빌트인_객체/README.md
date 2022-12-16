# 21.1 자바스크립트 객체의 분류

- 표준 빌트인 객체(standard built-in objects/native objects/global objects)
  - ECMAScript 사양에 정의된 객체를 말하며, 애플리케이션 전역 공통 기능을 제공한다.
  - ECMAScript 사양에 정의된 객체이므로 자바스크립트 실행 환경(브라우저 또는 Node.js)과 관계없이 언제나 사용할 수 있다.
  - 전역 객체의 프로퍼티로 제공되어 별도의 선언 없이 전역 변수처럼 언제나 참조할 수 있다.

<br />

- 호스트 객체 (host objects)
  - ECMAScript에 정의되어 있지 않지만 자바스크립트 실행환경에서 추가로 제공하는 객체
  - 브라우저 환경 : DOM, BOM, Canvas, XMLHttpRequest, fetch, requestAnimationFrame, SVG, Web Storage, Web Component, Web Worker와 같은 클라이언트 사이드 Web API
  - Node.js : 고유 API

<br />

- 사용자 정의 객체 (user-defined objects)  
  표준 빌트인 객체, 호스트 객체처럼 기본 제공되는 개체가 아닌 사용자가 직접 정의한 객체
