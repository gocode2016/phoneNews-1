<template>
	<div id="nav">
		<div class="nav">
			<ul>
				<router-link to="./Content" active-class="active" tag="li">
					<a href="javascript:;">首页</a>
				</router-link>
				<router-link to="./Follew" active-class="active" tag="li">
					<a href="javascript:;">关注</a>
				</router-link>
				<router-link to="./Column" active-class="active" tag="li">
					<a href="javascript:;">栏目</a>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		//name: 'nav',
	}
</script>

<style>

</style>