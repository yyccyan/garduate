import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/ProductList'
import All from '@/components/ProductList2'
import Cart from '@/components/Cart'
import Detail from '@/components/ShopDetail'
import Carousel from '@/components/Carousel'
import Login from '@/components/Login'
import Search from '@/components/Search'
import footerNav from '@/components/footerNav'
import Order from '@/components/Order'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { path: '/cart',
      name:'cart',
      component: Cart
    },
    {
      path: '/all',
      name: 'All',
      component: All
    },
    {
      path: '/shop/:id',
      name:'detail',
      component: Detail
    },{ path: '/carousel',
      name:'carousel',
      component: Carousel
    },
    { path: '/login',
      name:'login',
      component: Login
    },
    { path: '/search',
      name:'search',
      component: Search
    },
    { path: '/footerNav',
      name:'footerNav',
      component: footerNav
    },
    { path: '/order',
      name:'order',
      component: Order
    }

  ]
})
