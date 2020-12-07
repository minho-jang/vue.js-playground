<template>
  <div>
    <app-header 
      v-bind:msg="headerMsg"
      v-on:renew="renewStr">
    </app-header>
    {{ str }}
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  // 변수를 function 형태로 리턴해야함.
  data: function() {
    return {
      str: 'hi',
      headerMsg: 'APP HEADER'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = 'Hello World !!'
    }
  }
}
</script>

<style>

</style>p