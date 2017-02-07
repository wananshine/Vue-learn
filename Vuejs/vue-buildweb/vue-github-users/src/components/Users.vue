<template>
	<div>
		<h1>Users</h1>
		<button class="btn btn-primary" @click="fetchUsers()">Get Users</button>

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
</template>

<script>
export default {
  data() {
    return {
      // Url:"https://git.oschina.net/www.wananshine.com/learn/raw/master/users?dir=0&filepath=users&oid=1ba02daa09a30d6f7c2d919e96572aaf8a448fd7&sha=088502babbb7eadc1821d86ed8f58a3cbd1ae861",
      Url: "https://api.github.com/users",
      users: [ ]
    }
  },


  ready: function() {
		this.fetchUsers()
	},


  methods: {
    fetchUsers() {
      // this.$http.get(this.Url, (data) => {
      //   this.users = data
      // })
      // .catch((err)=>console.log(err));
      /*******************************************/
      this.$http.get(this.Url)
      .then((response) => {
      	console.log(JSON.stringify(response.data));
      	this.users = response.data
      	// console.log(JSON.stringify(response.data))
      })
      .catch(function(response){
      	console.log(response)
      })


    }

  }
}
</script>

<style>
.username {
  text-align: center;
}
</style>








