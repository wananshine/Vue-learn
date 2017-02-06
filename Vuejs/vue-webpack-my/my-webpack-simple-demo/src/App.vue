<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li v-for="n in lis"><a v-bind:href="n.url" v-text="n.text"></a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li v-for="k in ks"><a v-bind:href="k.url" v-text="k.text"></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lis: [
        { url: 'https://vuejs.org', text: 'Core Docs' },
        { url: 'https://forum.vuejs.org', text: 'Forum' },
        { url: 'https://gitter.im/vuejs/vue', text: 'Gitter Chat' },
        { url: 'https://twitter.com/vuejs', text: 'Twitter' }
      ],
      ks: [
        { url: 'http://router.vuejs.org', text: 'vue-router' },
        { url: 'http://vuex.vuejs.org', text: 'vuex' },
        { url: 'http://vue-loader.vuejs.org', text: 'vue-loader' },
        { url: 'https://github.com/vuejs/awesome-vue', text: 'awesome-vue' }
      ]
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
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
