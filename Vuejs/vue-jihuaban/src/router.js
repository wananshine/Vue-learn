import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import TimeEntries from './components/TimeEntries.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)


const routes = [
	{ path: '/' , component: Home },
	{ path:'/home', component: Home },
	{ path : '/time-entries', component : TimeEntries, children: [
		{ path: 'log-time', component: resolve => require(['./components/LogTime.vue'],resolve) }
	] }
]


export default new VueRouter({
    mode: 'history',
    routes
});