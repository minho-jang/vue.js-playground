<template>
  <header>
    <h1>{{msg}}</h1>
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
  props: {
    msg: String
  },
  methods: {
    sendEvent: function() {
      this.$emit('renew');
    }
  }
}
</script>

<style>

</style>