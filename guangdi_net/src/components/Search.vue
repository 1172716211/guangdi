<template>
	<div class="Search">
		<i class="iconfont" @click="clickReturn()">&#xe60b;</i>
		<form>
			<input type="text" placeholder="请输入搜索条件" ref="textVal" v-model="textVal"/>
		</form>
		<input class="searchBtn border" type="button" value="搜索" @click="search()">
	</div>
</template>

<script>
export default {
    name: 'Search',
	data() {
		return {
			textValItem:null,
			textVal:[]
		}
	},
	methods:{
		clickReturn(){
			this.$router.go(-1)
		},
		search(){
			if(this.$refs.textVal.value != ""){
				// console.log(this.$refs.textVal.value)
				// console.log(this.textValItem)
			}
		}
	}
};
</script>

<style lang="less" scoped>
	@SearchStyle: #ccc;
	.Search {
		width: 100%;
		height: 88px;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid @SearchStyle;
		padding: 0px 20px;
		box-sizing: border-box;
		.iconfont{
			height: 88px;
			padding: 0px 10px;
			font-size:29px;
			line-height: 88px;
			text-align: center;
			color: #333;
		}
		form{
			width: 100%;
			height: inherit;
			display: flex;
			align-items: center;
			justify-content: center;
			input{
				width: 90%;
				height: 58px;
				border: 2px solid @SearchStyle;
				border-radius: 10px;
				padding: 5px;
				box-sizing: border-box;
			}
			input::placeholder{
				color: @SearchStyle;
			}
		}
		.searchBtn{
			height: 88px;
			padding: 0px 10px;
			font-size: 40px;
			color: #333;
		}
	}
</style>