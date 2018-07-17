import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import RouterConfig from './router.config.js'
import store from './store'
import './assets/js/font.js'
import './assets/js/jquery-1.7.2.js'
import Loading from './components/loading'
import filters from './filters'
//循环遍历
Object.keys(filters).forEach((item) =>{
	Vue.filter(item,filters[item])
})
Vue.use(Loading)
Vue.use(VueRouter)
//axios配置
//发送请求
axios.interceptors.request.use((config) =>{
	store.dispatch('show_loading')
	return config
},(error) =>{
	return Promise.reject(error)
})
//请求回来,返回数据
axios.interceptors.response.use((config) =>{
	store.dispatch('hide_loading')
	return config
},(error) =>{
	return Promise.reject(error)
})
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.axios = axios;

const router = new VueRouter({
	mode: 'history',
	scrollBehavior: (to, from, savedPosition) => {
		return {
			x: 0,
			y: 0
		}
	},
	routes: RouterConfig
})
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})