import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import RouterConfig from './router.config.js'
import './assets/js/font.js'
import './assets/js/jquery-1.7.2.js'

Vue.use(VueRouter)

const router = new VueRouter({
	mode:'history',
	routes: RouterConfig
})
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})