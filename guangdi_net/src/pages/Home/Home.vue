<template>
	<div class="Home">
		<HomeHeader></HomeHeader>
		<div class="content">
			<banner></banner>
			<HomeList></HomeList>
		</div>
		<MenuBar></MenuBar>
	</div>
</template>
<script>
	import HomeHeader from './components/HomeHeader.vue'
	import Banner from './components/Banner.vue'
	import HomeList from './components/HomeList.vue'
	export default {
		name: "Home",
		components:{
			HomeHeader,
			Banner,
			HomeList
		}
	}
</script>
<style lang="less" scoped>
	.content{
		padding: 88px 0px 98px;
	}
</style>
