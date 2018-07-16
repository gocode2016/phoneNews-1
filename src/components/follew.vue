<template>
	<div id="follew" style="margin-top: 30px;">
		<div class="newsList">
			<ul>
				<li v-for="(val,ind) in arrList" :key="ind">
					<a href="javascript:void(0)">
						<h2>{{val.id}}.{{val.title}}</h2>
						<p>{{val.detail}}</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
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
				this.axios.get('src/data/follow.data').then((response) => {
					this.arrList = response.data;
				}).catch((error) => {
					console.log(error)
				})
			}
		}
	}
</script>

<style>

</style>