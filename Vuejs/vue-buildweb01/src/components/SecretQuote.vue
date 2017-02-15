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
			<mt-loadmore class="row" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
				<div class="content-list"><div class="col-xs-6 col-md-3" v-for="user in users">
          <div class="thumbnail">
            <img :src="user.avatar_url" :alt="user.login" />
            <div class="caption">
              <a :href="user.html_url">
                <h3 class="username">{{ user.login }}</h3>
              </a>
            </div>
          </div>
        </div></div>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">Loading...</span>
        </div>
			</mt-loadmore>
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

		created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchUsers()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchUsers'
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

      loadTop() {
        // 加载更多数据
        this.$refs.loadmore.onTopLoaded();
      },

      loadBottom() {
        // 加载更多数据
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      },
			loadMore() {
			  this.loading = true;
			  setTimeout(() => {
			    let last = this.users[this.users.length - 1];
			    for (let i = 1; i <= 5; i++) {
			      this.users.push(last + i);
			    }
			    this.loading = false;
			  }, 1500);
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
