<template>
  <div id="wrapper">
    <div class="container">
      <div class="group">
        <router-view></router-view>
      </div>
      <Btmnavbar></Btmnavbar>
    </div>
  </div>
</template>

<script>
import Btmnavbar from './components/BtmNavBar'
export default {
  name: 'App',
  components: {
    Btmnavbar
  }
}
</script>

<style>
#wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-bar{
  text-align: center;
}
.group-nav{
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
