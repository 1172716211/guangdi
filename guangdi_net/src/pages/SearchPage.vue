<template>
	<div class="SearchPage">
		<div class="header">
			<Search></Search>
		</div>
		<div class="content">
			<div class="record">
				<div class="title">历史记录</div>
				<p class="nothing">暂无历史记录</p>
				<ul style="display: none;">
					<li>嗷嗷啊2</li>
				</ul>
			</div>
			
			<div class="hotSearch">
				<div class="title">热搜词</div>
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
		name:"SearchPage"
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
		height: 70px;
		display: flex;
		align-items: center;
		padding: 55px 0px 40px 28px;
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
	.content .record{
		
	}
	.content .record .nothing{
		text-align: center;
		font-size: 32px;
		color: #999;
		padding-bottom: 90px;
	}
	.content .record ul{
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 90px;
	}
	.content .record ul li{
		height: 40px;
		margin: 10px 6px;
		padding: 5px 30px;
		border-radius: 12px;
		background: #eee;
		font-size: 28px;
		color: #888;
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
