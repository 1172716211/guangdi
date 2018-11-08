<template>
	<div class="Home">
		<HomeHeader></HomeHeader>
		<banner></banner>
		
		<MenuBar></MenuBar>
	</div>
</template>
<script>
	import HomeHeader from './components/HomeHeader.vue'
	import Banner from './components/Banner.vue'
	export default {
		name: "Home",
		components:{
			HomeHeader,
			Banner
		}
	}
</script>
<style lang="less" scoped>
	
	
</style>
