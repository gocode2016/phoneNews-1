<template>
	<div class="content" id="content">
		<slider-view></slider-view>
		<div class="newsList">
			<ul>
				<li v-for="(val,ind) in arrList" :key="ind">
					<router-link :to="'./Artive/'+ val.id" tag="a">
						<h2>{{val.id}}.{{val.title}}</h2>
						<p>{{val.detail}}</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Slider from './Slider.vue'
	export default {
		//name:'content'
		mounted() {
			this.fetchData()
		},
		data() {
			return {
				arrList: []
			}
		},
		methods: {
			fetchData() {
				this.axios.get('src/data/index.data').then((response) => {
					this.arrList = response.data;
				}).catch((error) => {
					console.log(error)
				})
			}
		},
		components: {
			'slider-view': Slider
		}
	}
</script>

<style>

</style>