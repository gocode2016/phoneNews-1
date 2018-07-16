<template>
	<div id="app">
		<loading v-show="loading"></loading>
		<nav-view v-show="nav_show"></nav-view>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<footer-view></footer-view>
	</div>
</template>

<script>
	import Nav from './components/Nav.vue'
	import Footer from './components/Footer.vue'
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'app',
		components: {
			'nav-view': Nav,
			'footer-view': Footer
		},
		watch: {
			$route(from, to) {
				let fr_name = from.name;
				if(fr_name === 'UserInfo' || fr_name === 'Artive' ) {
					this.$store.dispatch('hide_header')
				} else {
					this.$store.dispatch('show_header')
				}
			}
		},
		computed: {
			...mapGetters([
				'nav_show',
				'loading'
			])
		}
	}
</script>

<style>
	@import url("assets/css/base.css");
	@import url("assets/css/index.css");
</style>