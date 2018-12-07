<template>
	<div class="Search">
		<i class="iconfont" @click="clickReturn()">&#xe60b;</i>
		<form>
			<slot name="conter"><input type="text" placeholder="请输入搜索内容" autofocus="autofocus" ref="textVal" /></slot>
		</form>
		<slot name="right">
			<input class="searchBtn" type="button" value="搜索" @click.prevent="search()">
		</slot>
	</div>
</template>

<script>
export default {
    name: 'Search',
	data() {
		return {
			textValList:[],			//搜索的内容存放的数组
			localStorageList:[],			//拿下来离线存储的数据并保存到该数组
			SearchList:[]			//最终搜索记录数组
		}
	},
	methods:{
		clickReturn(){
			this.$router.go(-1)
		},
		search(){
			//本地离线的历史记录不等于空时存到数组localStorageList
			if(localStorage.getItem("searchecord") != null){
				this.localStorageList = JSON.parse(localStorage.getItem("searchecord"))
			}
			// 搜索框输入文字时保存到textValList数组
			if(this.$refs.textVal.value.length > 0){
				this.textValList.push(this.$refs.textVal.value)
				this.SearchList = this.textValList.concat(this.localStorageList)
				this.SearchList.splice(15)				//最多显示10条
				localStorage.setItem("searchecord",JSON.stringify(this.SearchList))		//把SearchList数组存进离线存储
				this.$router.push("SearchList")
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
				padding: 0px 5px;
				line-height: 58px;
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