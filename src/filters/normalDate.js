export const normalDate = (time) => {
	if(time) {
		let dates = new Date()
		dates.setTime(time)
		let y = dates.getFullYear();
		let M = dates.getMonth() + 1;
		let d = dates.getDate();
		let h = dates.getHours();
		let m = dates.getMinutes();
		let s = dates.getSeconds();
		return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
	}
}