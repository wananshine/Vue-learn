import Vue from 'vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(Router)

import Hello from 'components/Hello'
import Home from 'components/Home'
import SecretQuote from 'components/SecretQuote'
import Signup from 'components/Signup'
import Login from 'components/Login'
import About from 'components/About'

const routes = [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
      	  {
	      	path: '/',
	      	name: 'Home',
	      	component: Home
	      },
	      {
	      	path: 'home',
	      	name: 'Home',
	      	component: Home
	      },
	      {
	      	path: 'secretquote',
	      	name: 'secretquote',
	      	component: SecretQuote
	      },
	      {
	      	path: 'signup',
	      	name: 'signup',
	      	component: Signup
	      },
	      {
	      	path: 'login',
	      	name: 'login',
	      	component: Login
	      }
      ]
    },
    {
    	path: '/about',
    	name: About,
    	component: About
    }
  ]

export default new Router({
   mode: 'history',
   routes
})
