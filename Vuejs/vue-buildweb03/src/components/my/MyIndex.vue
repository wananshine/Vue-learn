<template>
  <div class="main">
  	<div class="topbanner">
  		<mt-swipe :auto="4000">
  			<mt-swipe-item v-for="img in imgs"><img :src="img.url"></mt-swipe-item>
  		</mt-swipe>
  	</div>
  </div>
</template>
<script>


// Vue.component(CellSwipe.name, Cell);
  export default{
    data(){
      return{
      	imgs: [
      		{ url: 'http://pic.qiantucdn.com/images/slideshow/58a3acf5d41da.png' },
      		{ url: 'http://pic.qiantucdn.com/images/slideshow/58a10bac32d2d.jpg' },
      		{ url: 'http://pic.qiantucdn.com/images/slideshow/58a3ac76f1d43.jpg' },
      		{ url: 'http://pic.qiantucdn.com/images/slideshow/589d91db68a04.jpg' },
      		{ url: 'http://pic.qiantucdn.com/images/slideshow/58a25f88de21b.png' }
      	]
      }
    }
  }
</script>

<style lang="less">
	.topbanner{
		height: 3rem;
		img{
			width: 100%;
		}
	}
</style>
