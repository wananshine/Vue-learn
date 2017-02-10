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


import Tongji from 'components/tongji/Tongji'
import TongjiOverview from 'components/tongji/TongjiOverview'
import TongjiProfitIndex from 'components/tongji/TongjiProfitIndex'
import TongjiProfitTixian from 'components/tongji/TongjiProfitTixian'
import TongjiProfitYuejie from 'components/tongji/TongjiProfitYuejie'


import Order from 'components/order/Order'
import OrderListNo from 'components/order/OrderListNo'
import OrderListYes from 'components/order/OrderListYes'

import My from 'components/my/My'
import MyIndex from 'components/my/MyIndex'

import Cy from 'components/cy/Cy'
import MemberList from 'components/cy/MemberList'



const routes = [
    {
      path: '/',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/',
          redirect: '/home/tongji',
        },
        {
          path: 'tongji',
          component: Tongji,
          children: [
            {
              path: '/',
              component: TongjiOverview
            },
            {
              path: 'myprofit',
              component: TongjiProfitIndex,
              children: [
                  {
                      path: '',
                      component: TongjiProfitTixian
                  },
                  {
                      path: 'yuejie',
                      component: TongjiProfitYuejie
                  }
              ]
             },
          ]
        },
        {
          path: 'order',
          component: Order,
          children: [
            {
              path: '',
              component: OrderListYes
            },
            {
              path: 'nofenrun',
              component: OrderListNo
            }
          ]
        },
        {
          path: 'cy',
          component: Cy,
          children: [
            {
              path: '',
              component: MemberList
            }
          ]
        },
        {
          path: 'my',
          component: My,
          children: [
            {
              path: '',
              component: MyIndex
            }
          ]
        }
      ]
    },
    {
    	path: '/about',
    	// name: About,
    	component: About
    }
  ]

export default new Router({
   mode: 'history',
   routes
})
