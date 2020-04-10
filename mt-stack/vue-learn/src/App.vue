<template>
<div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg='<span style="color:#fff;">HelloWorld</span>' />
  <pagea/>
  <pageb/>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import pagea from './components/a.vue'
import pageb from './components/b.vue'
import './components/n'
export default {
  name: 'app',
  components: {
    HelloWorld,
    pagea,
    pageb
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
