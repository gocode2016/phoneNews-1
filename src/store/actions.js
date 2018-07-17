import * as types from './types'
const actions = {
	show_header: ({
		commit
	}) => {
		commit(types.show)
	},
	hide_header: ({
		commit
	}) => {
		commit(types.hide)
	},
	show_loading: ({
		commit
	}) => {
		commit(types.showLoading)
	},
	hide_loading: ({
		commit
	}) => {
		commit(types.hideLoading)
	},
}
//事件监听
export default actions