# Vue.js 시작하기 - Age of Vue.js
강좌를 수강하면서 정리한 코드 및 내용

## TIPs

### 주소창에 '#'을 없애려면.
```
var router = new VueRouter({
  // 주소에 '#' 없애려면
  mode: 'history',
  // 페이지의 라우팅 정보
  routes: [
    { path: '/login', component: LoginComponent },
    { path: '/main', component: MainComponent }
  ]
});
```

### data 선언은 function으로 한다.
```
export default {
  data: function() {
    return {
      username: '',
      password: ''
    }
  }
}
```

### `vue [tab]`을 입력하면 vue 템플릿을 생성한다.
```
<template>
  
</template>

<script>
export default {

}
</script>

<style>

</style>
```

### label과 input은 for 속성을 통해 연동하여 사용할 수 있다.
```
<div>
  <label for="password">pw: </label>
  <input id="password" type="password" v-model="password">
</div>
```

### form 태그의 submit 이벤트를 막는 방법
```
<form v-on:submit.prevent="submitForm">
...
</form>
```

### `! [tab]`을 입력하면 html 템플릿을 생성한다.
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

### 컴포넌트 태그 이름은 `<app-header>`와 같이 '-'를 이용하며 vue 컴포넌트 파일의 이름은 `AppHeader.vue`와 같이 단어와 단어 사이의 문자를 대문자(Pascal case)로 한다.

### data에 접근할 때, `this`를 이용하여 접근하지만 아래처럼 `this`가 다른 것을 가리킬 경우 아래와 같이 이용한다.
```
methods: {
  getData: function() { 
    var vm = this;
    axios.get('https://jsonplaceholder.typicode.com/users/')
      .then(function(response) {
        console.log(response.data);
        vm.users = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
}
```

### `log [tab]`을 입력하면 `console.log()`가 된다.