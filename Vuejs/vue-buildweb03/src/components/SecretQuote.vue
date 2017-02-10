<template>
	<div>
		<div class="container">
	    	<div class="row">
	    		<div class="col-sm-6 col-sm-offset-3">
	    			<h1>Get a secret Chuck Norris Quote!</h1>
	    			<button class="btn btn-warning" v-on:click="getQuote()">Get a Quote</button>
	    			<div class="quote-area" v-if="quote">
	    				<h2><blockquote>{{ quote }}</blockquote></h2>
	    			</div>
	    		</div>
	    	</div>
			<h1>Users</h1>
			<button class="btn btn-primary" @click="fetchUsers()">Get Users</button> 
			<input type="text" v-model="search"  name="">
			<div class="row">
				<div class="col-xs-6 col-md-3" v-for="user in users">
					<div class="thumbnail">
						<img :src="user.avatar_url" :alt="user.login" />
						<div class="caption">
							<a :href="user.html_url">
								<h3 class="username">{{ user.login }}</h3>
							</a>
						</div>        
					</div>    
				</div>    
			</div>
		</div>
	</div>
</template>
<script>
	import auth from '../auth'
	export default{
		data(){
			return{
				quote: '',
				Url: 'https://api.github.com/users',
				users: [],
				search: ''
			}
		},

		ready: function(){
			this.fetchUsers()
		},

		methods: {
			getQuote() {
				this.$http.get("http://localhost:3001/api/protected/random-quote")
				.then((response) => {
					this.quote = response.data
				})
			},

			fetchUsers(){
				this.$http.get(this.Url)
				.then((response) => {
					this.users = response.data
				})
				.catch((response) =>{
					console.log(response)
				})
			}
		},

		route: {
			canActivate(){
				return auth.user.authenticated
			}
		}
	}
</script>