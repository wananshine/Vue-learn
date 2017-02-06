import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import About from './components/About'
import Our from './components/Our'
import Total from './components/Total'
import News from './components/News'
import Message from './components/Message'

import 'bootstrap/dist/css/bootstrap.css'


Vue.use(VueRouter)


const routes = [
	{ path: '/', component: Home ,children : [{
    path : 'news',
    component : News,
  }]},
	{ path: '/home', component: Home ,children : [
    { path : 'news',
      component : News,
      // component: resolve => require(['./components/News.vue'], resolve)
    },
    { path : 'message',
      component : Message,
      // component: resolve => require(['./components/Message.vue'], resolve)
    }
  ]},
	{ path: '/about', name: 'about', component: About },
	{ path: '/our', name: 'our', component: Our },
	{ path: '/total', name: 'total', component: Total }
];



export default new VueRouter({
    mode: 'history',
    routes
});
