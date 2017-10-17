<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-link class="btn btn-m btn-red" to="/demo">购物车</router-link>
    <router-link class="btn btn-m btn-red" to="/address">地址</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.btn {
    width: 44.84%;
    min-width: 50px;
    margin: 0 2.5%;
}
</style>
