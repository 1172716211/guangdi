<template>
	<!-- 自定义图标单选按钮，非全局组件按需引入 -->
	<!-- import CheckBtn from '@/components/CheckBtn.vue' -->
	<div class="CheckBtn">
		<label>
			<span @click="selectBool = !selectBool">
				<i class="iconfont" :class="selectBool === true ? 'active' : null ">
					<slot name="icon">&#xe608;</slot><!-- 图标样式 -->
				</i>
				<slot name="text"></slot><!-- 选填文字 -->
			</span>
			<input type="checkbox" :checked="selectBool">
		</label>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				selectBool: false,
				name:"CheckBtn"
			}
		}
	}
</script>

<style>
	.CheckBtn .iconfont{
		font-size: 20px;
		color: #9e9e9e;
	}
	.CheckBtn .active{
		color: #e45c57;
	}
	.CheckBtn label input{
		display: none;
	}
</style>
