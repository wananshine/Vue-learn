<template>
  <div id="appa">
    <router-view></router-view>
    <btmnav></btmnav>
  </div>
</template>

<script>

import Btmnav from './components/Btmnav'

export default {
  name: 'app',
  components: {
    Btmnav
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
