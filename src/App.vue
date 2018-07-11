<template>
	<div id="app">
		<nav-view></nav-view>
		<router-view></router-view>
		<footer-view></footer-view>
	</div>
</template>

<script>
	import Nav from './components/Nav.vue'
	import Footer from './components/Footer.vue'
	export default {
		name: 'app',
		components: {
			'nav-view':Nav,
			'footer-view':Footer
		},
	}
</script>

<style>
	@import url("assets/css/base.css");
	@import url("assets/css/index.css");
</style>