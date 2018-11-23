<!-- 全局组件 ComHeader -->

<!-- 使用方法：
	<ComHeader>
		left:默认自带的返回键，不需要时添加空具名插槽标签
		title:中间标题
		right:右边按钮
	</ComHeader> -->
<template>
	<div class="ComHeader">
		<slot name="left">
			<i class="iconfont" @click="clickReturn()">&#xe60b;</i>
		</slot>
		<slot name="title">
			<h1></h1>
		</slot>
		<slot name="right">
			<span class="right"></span>
		</slot>
	</div>
</template>

<script>
export default {
    name: 'ComHeader',
	methods:{
		clickReturn(){
			this.$router.go(-1)
		},
	} 
	
};
</script>

<style lang="less" scoped>
	@HeaderStyle: #323333;
	.ComHeader {
		width: 100%;
		height: 88px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		border-bottom: 1px solid #ccc;
		padding: 0px 20px;
		box-sizing: border-box;
		.iconfont{
			height: 88px;
			padding: 0px 10px;
			font-size:29px;
			line-height: 88px;
			color: @HeaderStyle;
		}
		h1{
			font-size: 30px;
			color: @HeaderStyle;
		}
		.right{
			font-size: 30px;
			color: @HeaderStyle;
			text-align: center;
		}
	}
</style>