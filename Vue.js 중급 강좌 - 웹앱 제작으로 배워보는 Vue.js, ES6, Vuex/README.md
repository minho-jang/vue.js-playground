# Vue.js 중급 강좌 - 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex
강좌를 수강하면서 정리한 코드 및 내용

## TIPs

### viewport
페이지가 모든 기기에 맞춰 조정된다는 것을 브라우저에 알리려면 다음과 같이 문서의 헤드에 메타태그를 추가해야 한다.
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 아이콘, 폰트
```
public/index.html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"> 
```

### <style scoped>
"scoped"는 해당 컴포넌트에서만 유효한 스타일임을 명시

### <button> 대신 <span><i></i></span>
button 태그를 쓰기보다 span 태그를 사용하여 버튼 기능을 하도록 만든다.

### LocalStorage update
크롬의 LocalStorage API에서 수정은 제공하지 않는다. 해당 데이터를 삭제 후 수정된 데이터를 삽입한다.

### true/false 변환
특정 boolean 값이 어떤 이벤트 발생마다 바뀌길 바랄 때 직접 값을 할당하는 것이 아니라, 아래와 같이 쓰면 간단하게 구현할 수 있다.
```
isChanged = !isChanged
```

### slot
특정 컴포넌트의 일부 UI를 재사용할 수 있다.
```
Modal.vue
<div class="modal-header">
  <slot name="header">
    default header
  </slot>
</div>

TodoInput.vue
<Modal v-if="showModal" @close="showModal=false">
  <h3 slot="header">
    custom header
  </h3>
</Modal> 
```
위와 같을 때, Modal의 header를 TodoInput에서 header를 재정의할 수 있다.

### Babel
ES6를 지원하지 않는 브라우저를 위해 transpiling을 해준다.

### ES6
- const, let
- => (arrow function)
- 객체 속 메소드에 대해서 `function` 쓸 필요 없음.
- 속성명과 값 명이 동일할 때, 축약.

### export default
`default`는 한 개의 파일에서 하나만 export한다는 의미.

### Vuex
컴포넌트 관리를 위한 상태 관리 패턴이자 라이브러리

### mutations, actions
mutations에는 동기 로직, actions에는 비동기 로직

