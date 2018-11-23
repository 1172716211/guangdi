
<template>
	<div class="ProDetails">
		<div class="header">
			<ComHeader>
				<h1 slot="title">商品详情</h1>
				<i class="iconfont" slot="right">&#xe6ff;</i>
			</ComHeader>
		</div>
		<div class="banner">
			<mt-swipe :show-indicators="false">
				<mt-swipe-item>1</mt-swipe-item>
				<mt-swipe-item>2</mt-swipe-item>
				<mt-swipe-item>3</mt-swipe-item>
			</mt-swipe>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name:"ProDetails",
			};
		}
	}
</script>

<style lang="less" scoped>
	.ProDetails{
		.header{}
		.banner{
			height: 350px;
			background-color: #ccc;
		}
	}
</style>
