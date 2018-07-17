import { show, hide, showLoading,hideLoading} from './types'
//事件名称
export default {
	[show](state) {
		state.nav_show = true;
	},
	[hide](state) {
		state.nav_show = false;
	},
	[showLoading](state) {
		state.loading = true;
	},
	[hideLoading](state){
		state.loading = false;
	}
}