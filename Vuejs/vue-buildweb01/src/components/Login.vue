<template>
    <div>
    	<div class="col-sm-4 col-sm-offset-4">
    		<h2>Log In</h2>
    		<p>Log in to your account to get some great quotes.</p>
    		<div class="alert alert-danger" v-if='error'>
    			<p>{{ error }}</p>
    		</div>
    		<div class="form-group">
    			<input type="text" class="form-control" placeholder="Enter your username" v-model='credentials.username' name="">
    		</div>
    		<div class="form-group">
    			<input type="password" class="form-control" placeholder="Enter your password" v-model='credentials.password' name="">
    		</div>
    		<button class="btn btn-primary" @click='submit()'>Access</button>
    		<button class="btn btn-warning" @click='login()'>Login</button>
    		<button class="btn btn-danger" @click='loginone()'>Login</button>
    		<button class="btn btn-success" @click='logintwo()'>Login</button>
    	</div>
    </div>
</template>

<script>
	import auth from '../auth'
	export default{
		data(){
			return{
				credentials: {
					username: '',
					password: ''
				},
				error: ''
			}
		},

		methods: {
			submit(){
				var credentials = {
					username: this.credentials.username,
					password: this.credentials.password
				}
				auth.login(this, credentials, 'secretquote')
			},
			login(){
				setTimeout(function(){
					window.location.href = 'about';
				},1000)
			},
			loginone(){

				//// 字符串
				this.$router.push('about');

				// 对象
				// this.$router.push({ path: 'about' })
			},

			logintwo(){
				this.$router.replace('about')
			}
		}
	}
</script>