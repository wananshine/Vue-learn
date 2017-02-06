<template>
	<router-view></router-view>
</template>

<script type="text/javascript">
	export default{
		name: 'mem',
		data(){
			return{
				transitionName: 'slide-left'
			}
		},
		watch: {
			'$route' (to, from) {
			    const toDepth = to.path.split('/').length
			    const fromDepth = from.path.split('/').length
			    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
			  }
		}
	} 
</script>
<style type="text/css">

    @import '//cdn.bootcss.com/animate.css/3.5.2/animate.min.css'
    .fade-enter-active, .fade-leave-active {
    	transition: opacity .5s ease;
    }
    .fade-enter, .fade-leave-active {
    	opacity: 0
    }
    .child-view {
    	position: absolute;
    	transition: all .5s cubic-bezier(.55,0,.1,1);
    }
    .slide-left-enter, .slide-right-leave-active {
    	opacity: 0;
    	-webkit-transform: translate(30px, 0);
    	transform: translate(30px, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
    	opacity: 0;
    	-webkit-transform: translate(-30px, 0);
    	transform: translate(-30px, 0);
    }
</style>