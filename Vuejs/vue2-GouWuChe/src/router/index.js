import Vue from 'vue'
import Router from 'vue-router'
import demo from '../components/demo'
import address from '../components/address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      directive: demo,
      component: demo,
      children: [
      		
      ]
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/address',
      name: 'address',
      component: address
    }
  ]
})
