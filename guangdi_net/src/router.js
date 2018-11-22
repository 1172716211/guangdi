import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home/Home.vue'
import Find from './pages/Find/Find.vue'
import ShopCar from './pages/ShopCar/ShopCar.vue'
import User from './pages/User/User.vue'
import Classify from './pages/Classify/Classify.vue'
import SearchPage from './pages/SearchPage.vue'
import SearchList from './pages/SearchList/SearchList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
		{
			path: '/Find',
			name: 'find',
			component: Find
		},
		{
			path: '/ShopCar',
			name: 'shopCar',
			component: ShopCar
		},
		{
			path: '/User',
			name: 'user',
			component: User
		},
		{
			path: '/Classify',
			name: 'classify',
			component: Classify
		},
		{
			path: '/SearchPage',
			name: 'searchpage',
			component: SearchPage
		},
		{
			path: '/SearchList',
			name: 'searchlist',
			component: SearchList
		},
  ]
})