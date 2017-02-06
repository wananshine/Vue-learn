<template>
  <div class="group">
    <router-view></router-view>
    <btmnavbar></btmnavbar>
  </div>
</template>

<!-- <template>
  <div id="app">
    <div>
      <list :page='page'></list>
      <a class="button" @click="next" >GO NEXT <span>{{ page }}</span></a>
    </div>
    <div>
      <div id="loader" v-show="!finish" :transition="up? 'up-start':'down-start'">
        <span>Loading</span>
      </div>
    </div>
  </div>
</template> -->

<script>

import btmnavbar from './components/Btmnavbar'

export default {
  name: 'App',
  components: {
    btmnavbar
    
  },
  data(){
    return{
      page: 1,
      next(){
        List
      },
      methods: {
        next(){
          this.page++
        }
      }
    }
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
  /*margin-top: 60px;*/
}

.button {
  display: block;
  width: 100%;
  background-color: #212121;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.3rem;
}

.button span{
  margin-left: 2em;
  font-size: 0.5rem;
  color: #d6d6d6;
}


.down-start-transition {
  bottom: 0;
  height: 100%;
}
.down-start-enter{
  animation: expand .5s 1 cubiczier(0, 1, 0, 1) both;
}
.down-start-leave{
  animation: expand .5s 1 cubiczier(0, 1, 0, 1) both;
  top: 0;
  bottom: 0;
}
.up-start-transition{
  
}
</style>
