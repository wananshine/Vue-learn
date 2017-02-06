<template>
  <div class="wrapper">
    <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <ul class="nav navbar-nav">
          <li><router-link to='home'>Home</router-link></li>
          <li><router-link to='login'>Login</router-link></li>
          <li><router-link to='signup'>Signup</router-link></li>
          <li><router-link to='secretquote'>SecretQuote</router-link></li>
          <li><router-link to='login'>Logout</router-link></li>
        </ul>
      </div>
    </nav>
    <router-link to='about'>about</router-link>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
