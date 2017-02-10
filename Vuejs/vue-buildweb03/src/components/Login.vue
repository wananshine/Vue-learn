<template>
    <div>
    	123
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
				error: '',
				show: false
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


				if (this.credentials.username == '') {
					alert("请输入用户名");
				}else if(this.credentials.password == ''){
					alert("请输入密码");
				}else{
					//// 字符串
					this.$router.push('about');
					// 对象
					// this.$router.push({ path: 'about' })
				}

			},

			logintwo(){
				this.$router.replace('about')
			}
		}
	}
</script>
<style lang="less">
	.fade-enter-active,.fade-leave-active{
		transition: opacity .5s;
	}
	 .fade-enter,.fade-leave-active{
		opacity: 0;
	}
</style>
