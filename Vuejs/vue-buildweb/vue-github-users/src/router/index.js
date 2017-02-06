import Vue from 'vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(Router)

import Hello from 'components/Hello'
import Home from 'components/Home'
import Users from 'components/Users'

const routes = [
	{
	  path: '/',
	  name: 'Hello',
	  component: Hello
	},
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/users',
		name: 'Users',
		component: Users
	}
]

export default new Router({
  mode: 'history',
  routes
})
