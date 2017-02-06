import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import Home from './components/Home'
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four'
import Login from './components/main/Login'
import 'bootstrap/dist/css/bootstrap.css'


Vue.use(VueRouter)

const routes = [
  { path: '/one' , component: Home, children: [
    { path: '/', component: Hello }
  ] },
  { path: '/Two' , component: Two, children: [] },
  { path: '/Three' , component: Three, children: [] },
  { path: '/Four' , component: Four, children: [] },
  { path: "*", redirect: '/index' },
];

export default new VueRouter({
    mode: 'history',
    routes
});
