<template>
	<div class="group group-nav">
        <div class="nav-bar">
            <router-link class="col-sm-3" to="/home">Home</router-link>
            <router-link class="col-sm-3" to="/about">About</router-link>
            <router-link class="col-sm-3" to="/our">Our</router-link>
            <router-link class="col-sm-3" to="/total">Total</router-link>
        </div>
      </div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex'

	const tabMap = {
		'Home' : '/home/'
	}
</script>