<template>
      <div>
        <div>
          <input type="text" holderplace="用户名" v-model="name" />
          <input type="password" holderplace="密码" v-model="password" />
          <button class="btn-primary">登录</button>
        </div>
      </div>
</template>
<script>
    export default{
      name: 'Login',
      data() {
           return {
             name: '', //用户名
             password: '', //密码
           }
      }
    }
</script>
