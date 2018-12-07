<template>
	<div class="SearchPage">
		<div class="header">
			<Search></Search>
		</div>
		<div class="content">
			<div class="record">
				<h2 class="title">历史记录</h2>
				<p class="nothing" ref="noRecord" v-if="Searchshow">暂无历史记录</p>
				<div class="main" ref="mainBox" v-else>
					<ul>
						<li v-for="(item,index) of SearchItemList" :key="index">{{item}}</li>
					</ul>
					<button @click.prevent="empty()">清空历史纪录</button>
					
				</div>
			</div>
			
			<div class="hotSearch">
				<h2 class="title">热搜词</h2>
				<ul>
					<li>电吹风系列</li>
					<li>干衣机系列</li>
					<li>包装盒展开图</li>
					<li>理疗医用电吹风</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"SearchPage",
		data(){
			return{
				Searchshow:true,
				SearchItemList:[]
			}  
		},
		methods: {
			SearchList(){
				if(localStorage.getItem("searchecord") != null){
					this.SearchItemList = JSON.parse(localStorage.getItem("searchecord"))
				}
				if(this.SearchItemList.length === 0){
					this.Searchshow = true
				}else{
					this.Searchshow = false
				}
			},
			empty(){
					localStorage.removeItem("searchecord")
					// localStorage.clear()
					this.SearchItemList = []
					this.SearchList()
			}
		},
		mounted() {  
			this.SearchList()
		}
	}
</script>

<style scoped>
	.SearchPage{
		
	}
	.content{
		padding: 0 20px;
		box-sizing: border-box;
	}
	.content .title{
		width: 100%;
		display: flex;
		align-items: center;
		padding: 55px 0px 40px 28px;
		box-sizing: border-box;
		color: #666;
		font-size: 32px;
	}
	.content .title:before {
		content: "";
		background: #666;
		display: block;
		width: 6px;
		height: 70px;
		border-radius: 3px;
		margin-right: 30px;
	}
	
	.content .record .nothing{
		display: block;
		text-align: center;
		font-size: 32px;
		color: #999;
		padding-bottom: 90px;
	}
	.content .record .main{
		margin-bottom: 20px;
	}
	.content .record .main ul{
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 90px;
	}
	.content .record .main ul li{
		height: 40px;
		margin: 10px 6px;
		padding: 5px 30px;
		border-radius: 12px;
		background: #eee;
		font-size: 28px;
		color: #888;
	}
	.content .record .main button{
		display: block;
		width: 50%;
		height: 50px;
		background-color: #eee;
		border-radius: 12px;
		margin: 0px auto;
		color: #666;
		font-size: 28px;
	}
	.content .record:after{
		content: "";
		background: #ccc;
		display: block;
		width: 92%;
		height: 2px;
		margin: 0 auto;
	}
	.content .hotSearch{
		
	}
	.content .hotSearch ul{
		
	}
	.content .hotSearch ul li{
		height: 70px;
		line-height: 70px;
		color: #999;
		padding-left: 120px;
		font-size: 32px;
	}
</style>
