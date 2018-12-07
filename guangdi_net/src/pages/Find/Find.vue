<template>
	<div class="Find">
		<div class="mes">
			<span class="iconfont">&#xe609;</span>
			<p>抱歉,该功能正在加紧升级维护中,带来不便望谅解~</p>
		</div>
		<MenuBar></MenuBar>
	</div>
</template>

<script>
export default {
	name: 'Find',
};
</script>

<style lang="less" scoped>
	.Find{
		width: 100%;
		height: 1087px;
		position: relative;
		overflow: hidden;
		.mes{
			width: 290px;
			text-align: center;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			margin: auto;
			height: 236px;
			.iconfont{
				font-size: 86px;
				color: #323333;
			}
			p{
				font-size: 32px;
				color: #323333;
			}
		}
	}
</style>
