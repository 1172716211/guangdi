<template>
	<div class="shopcarNo">
		<ComHeader>
			<span class="left" slot="left"></span>
			<h1 slot="title">购物车</h1>
			<span class="right" slot="right">管理</span>
		</ComHeader>
		<div class="mes">
			<span class="iconfont">&#xe611;</span>
			<p>购物车还是空的快去逛逛吧~</p>
		</div>
	</div>
</template>
<script>
	export default {
		name:"shopcarNo"
	}
</script>
<style scoped>
.shopcarNo{
	width: 100%;
	height: 1087px;
	position: relative;
	overflow: hidden;
}
.mes{
	width: 230px;
	text-align: center;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	height: 236px;
}
.mes .iconfont{
	font-size: 86px;
	color: #323333;
}
.mes p{
	font-size: 32px;
	color: #323333;
}
</style>
