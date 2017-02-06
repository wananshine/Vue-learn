<template>
	<div>
		<h1>Home</h1>
		<p v-text="msg"></p>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<router-link class="" to="/home/news">News</router-link>
				</li>
				<li>
					<router-link class="" to="/home/message">Message</router-link>
				</li>
			</ul>
			<div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'Home',
		data(){
			return {
				msg: 'Hello vue router'
			}
		}
	}
</script>