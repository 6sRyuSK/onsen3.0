<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ProgramList />
    <b-button>Click me!</b-button>
    <b-icon icon="account" size="is-large"></b-icon>
  </div>
</template>

<script>
import ProgramList from './components/ProgramList.vue'

export default {
  name: 'App',
  components: {
    ProgramList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
