<template>
	<div>
		<div>123</div>
	    <button class="btn btn-warning" @click='back()'>back</button>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return{}
		},

		methods: {
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>