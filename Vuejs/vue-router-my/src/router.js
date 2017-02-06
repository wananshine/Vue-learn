import Vue from 'vue'
import VueRouter from 'vue-router'
import member01 from './components/member/member01'
// import maker from './components/member/maker'
import mem from './components/member/mem'
import 'bootstrap/dist/css/bootstrap.css'


Vue.use(VueRouter)


const routes = [
	{ 
		path: '/member', component: mem, children:[
		  	// { 
		  	// 	path:'',
		  	// 	component :  member01
		  	// 	// component: resolve => require(['./components/member/member01'], resolve) 
		  	// },
		  	{ 
		  		path:'member01', 
		  		component :  member01
		  		// component: resolve => require(['./components/member/member01'], resolve) 
		  	},
	        { 
	        	path:'maker',
	            component :  member01
	            // component: resolve => require(['./components/member/maker'], resolve)    
	        }
		]
	 },
];






export default new VueRouter({
    mode: 'history',
    routes
});
