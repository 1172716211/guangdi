<template>
	<div class="Search">
		<i class="iconfont" @click="clickReturn()">&#xe60b;</i>
		<form>
			<input type="text" placeholder="请输入搜索内容" ref="textVal" />
		</form>
		<slot>
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
			SearchItem:[]			//本地离线存储textValList有内容时获取下来存放到该数组
		}
	},
	methods:{
		clickReturn(){
			this.$router.go(-1)
		},
		search(){
// 			if(this.$refs.textVal.value.length > 0){
// 				if(localStorage.getItem("textValList") == null){
// 					this.textValList.push(this.$refs.textVal.value)
// 					// this.textValList.reverse()
// 					console.log(this.textValList);
// 					console.log("fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck")
// 					// localStorage.setItem("textValList",JSON.stringify(that.textValList))
// 				}
// 				else{
// 					console.log("mmp");
// 					var locVal = JSON.parse(localStorage.getItem("textValList"))
// 					this.SearchItem = locVal
// 					this.textValList.push.apply(this.SearchItem,this.textValList)
// 					// console.log(this.SearchItem)
// 				}
// 			}
			this.$router.push("SearchList")
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