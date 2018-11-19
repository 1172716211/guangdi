<template>
	<div class="HomeHeader">
		<router-link to="/Classify" class="Classifybtn"></router-link>
		<router-link to="/SearchPage" class="search border">
			<i class="iconfont">&#xe60f;</i>
		</router-link>
		<i class="scan iconfont">&#xe62c;</i>
	</div>
</template>
<script>
	export default {
		name:"HomeHeader"
	}
</script>
<style lang="less" scoped>
	@searchcolor:#cdcbcb;
	.HomeHeader{
		width: 100%;
		height: 88px;
		position: fixed;
		z-index: 999;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		box-sizing: border-box;
		padding: 0px 60px;
		.Classifybtn{
			display: block;
			width: 40px;
			height: 41px;
			background: url(../../../images/findbtn.jpg) center no-repeat;
			background-size: 100%;
		}
		.search{
			overflow: hidden;
			width:70%;
			height: 58px;
			border: 2px solid @searchcolor;
			padding-left: 18px;
			display: flex;
			align-items: center;
			border-radius: 60px;
			box-sizing: border-box;
			.iconfont{
				font-size: 36px;
				color: @searchcolor;
			}
		}
		.scan{
			font-size: 35px;
		}
	}
</style>
