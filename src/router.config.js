import Content from './components/Content.vue'
import Follew from './components/Follew.vue'
import Column from './components/Column.vue'
import UserInfo from './components/UserInfo.vue'
import Artive from './components/Artive.vue'
export default [
	{
		path:'/',
		redirect:'/Content'
	},{
		path: '/Content',
		component: Content,
		name:'Content'
	},
	{
		path: '/Follew',
		component: Follew,
		name:'Follew'
	},
	{
		path: '/Column',
		component: Column,
		name:'Column'
	},
	{
		path: '/user-info',
		component: UserInfo,
		name:'UserInfo'
	},
	{
		path: '/Artive/:id',
		component: Artive,
		name:'Artive'
	},
]