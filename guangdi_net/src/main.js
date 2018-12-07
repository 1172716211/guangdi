import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ComHeader from '@/components/ComHeader.vue'
import Search from '@/components/Search.vue'
import MenuBar from '@/components/MenuBar.vue'
import MintUI from 'mint-ui'
import axios from 'axios'

Vue.config.productionTip = false
import 'lib-flexible/flexible.js'
import '@/styles/common.css'
import '@/styles/iconfont.css'
import '@/styles/border.css'
import 'mint-ui/lib/style.css'

Vue.component('ComHeader', ComHeader)
Vue.component('MenuBar', MenuBar)
Vue.component('Search', Search)
Vue.use(MintUI)
Vue.prototype.$http=axios

new Vue({
	components: {
		App
	},
	router,
	MenuBar,
	Search,
	render: h => h(App)
}).$mount('#app')
