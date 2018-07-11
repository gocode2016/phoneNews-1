import Content from './components/Content.vue'
import Follew from './components/Follew.vue'
import Column from './components/Column.vue'
import UserInfo from './components/UserInfo.vue'
export default [
	{
		path:'/',
		redirect:'/Content'
	},{
		path: '/Content',
		component: Content
	},
	{
		path: '/Follew',
		component: Follew
	},
	{
		path: '/Column',
		component: Column
	},
	{
		path: '/user-info',
		component: UserInfo
	}
]