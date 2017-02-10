<template>
	<div class="two">
		<div class="maincontainer">
			<router-view></router-view>
		</div>
		<bottom-nav></bottom-nav>
	</div>
</template>

<script type="text/javascript">
  // import BottomNav from 'components/BottomNav'
  // import { mapGetters } from 'vuex'
	import router from '../router'

	export default{
		// components: {
		// 	BottomNav
		// },
		data(){
			return{
			}
		},

		methods: {

		}
	}
</script>

<style lang="less">
	.two{
		height: 100%;
		display: flex;
		ms-flex-direction: column;
		flex-direction: column;
		.maincontainer{
			flex:1;
			overflow-x: hidden;
      overflow: auto;
		}
	}
</style>
