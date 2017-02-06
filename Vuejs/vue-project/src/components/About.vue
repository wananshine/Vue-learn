<template>
	<div>
		<h1>this a about page</h1>
		<p v-text="msg"></p>
	</div>
</template>


<script type="text/javascript">
	export default {
		name: 'About',
		data(){
			return{
				msg: 'welcome to about'
			}
		}
	}
</script>