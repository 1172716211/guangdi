
<template>
	<div class="ProDetails">
		<div class="main">
			<div class="header">
				<ComHeader>
					<h1 slot="title">商品详情</h1>
					<i class="iconfont" slot="right">&#xe6ff;</i>
				</ComHeader>
			</div>
			<div class="banner">
				<mt-swipe :show-indicators="false">
					<mt-swipe-item>1</mt-swipe-item>
					<mt-swipe-item>2</mt-swipe-item>
					<mt-swipe-item>3</mt-swipe-item>
				</mt-swipe>
			</div>
			
			
			<div class="info">
				<div class="title">
					<h3>Aptamil 德国爱他美  婴儿奶粉  2段800/克 3罐装  6-10月</h3>
					<div class="details">
						<span class="start iconfont">&#xe6cc;</span>
						<span class="collect">收藏</span>
					</div>
				</div>
				<div class="mes">
					<div class="price">
						<span class="new_price">445</span>
						<span class="old_price">998</span>
					</div>
					<div class="list">
						<ul class="list_top">
							<li>6.5折</li>
							<li>包邮</li>
						</ul>
						<ul class="list_bottom">
							<li>正品货源</li>
							<li>一件代发</li>
							<li>全球直邮</li>
							<li>售后无忧</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="tab">
				<ul class="tab-title">
					<li 
						v-for="(item,index) of tabTitle" 
						@click="handleClick(index)"
						:class="active === index ? 'on' :null "
						:key="item.id"
					>
						<router-link 
							:to="item.url"
						>{{item.name}}</router-link>
					</li>
				</ul>
				<div class="tab-com">
					<router-view></router-view>
				</div>
			</div>
		</div>
		<div class="mask" v-show="bool">
			<div class="bg" @click="closeMask()"></div>
			<order class="order" :value="title" @close="closeMask()"></order>
		</div>
		
		<div class="alert" v-show="boolB">成功添加到购物车</div>
		
		<div class="buyMenu">
			<button class="shopcar" @click="showMask()">加入购物车</button>
			<button class="buy" @click="showMask()">立即购买</button>
		</div>
	</div>
</template>

<script>
	import detailsPage from './components/detailsPage'
	import publicPraise from './components/publicPraise'
	import order from './components/order'
	export default {
		name:"ProDetails",
		components:{
			detailsPage,
			publicPraise,
			order
		},
		data() {
			return {
				tabTitle:[{
					id:1,
					name:"商品详情",
					url:"/ProDetails/detailsPage"
				},{
					id:2,
					name:"买家口碑",
					url:"/ProDetails/publicPraise"
				}],
				active:0,
				bool:false,
				boolB:false,
				title:"Aptamil 德国爱他美  婴儿奶粉  2段800/克 3罐装  6-10月"
			};
		},
		methods:{
			handleClick(i){
				this.active = i
			},
			showMask(){
				this.bool = true
				this.$refs.ProDetails.className = 'ProDetailsShow'
			},
			closeMask(){
				this.bool = false
				this.$refs.ProDetails.className = ''
				this.boolB = true
				var that = this
				setTimeout(function(){
					that.boolB = false
				},1000)
			}
		}
	}
</script>

<style lang="less" scoped>
	.ProDetails{
		.header{}
		position: relative;
		.banner{
			height: 350px;
			background-color: #ccc;
		}
	}
	
	.buyMenu{
		height: 97px;
		width: 100%;
		border-top:1px solid #dddddd;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: flex-end;
		background: #fff;
		z-index: 999;
	}
	.buyMenu button{
		width: 198px;
		height: 97px;
		color: #fff;
	}
	.buyMenu .shopcar{
		background: #ff9900;
	}
	.buyMenu .buy{
		background: #eb2222;
	}
	
	
	.ProDetails{
		position: relative;
	}
	.ProDetailsShow{
		height: 1195px;
		overflow: hidden;
		position: relative;
	}
	
	
	/* 主页 */
	.main{
		position: absolute;
		z-index: 1;
		padding-bottom: 100px;
	}
	.main .info{
		width: 100%;
		border-top: 2px solid #dddddd;
		border-bottom: 32px solid #dddddd;
	}
	.main .info .title{
		display: flex;
		justify-content: space-between;
		padding: 0 24px;
		box-sizing: border-box;
	}
	.main .info .title h3{
		font-size: 30px;
		width: 580px;
		letter-spacing: 1px;
	}
	.main .info .title .details{
		width: 48px;
		height: 78px;
		text-align: center;
	}
	.main .info .title .details .start{
		display: block;
		font-size: 36px;
		color: #e71f19;
	}
	.main .info .title .details .collect{
		color: #e71f19;
	}
	.main .info .mes{
		display: flex;
		padding: 0 26px;
		width: 100%;
		box-sizing: border-box;
	}
	.main .info .mes .price{
		width: 170px;
		height: 76px;
	}
	.main .info .mes .price span{
		display: block;
	}
	.main .info .mes .price .new_price{
		color: #E71F19;
		font-size: 34px;
	}
	.main .info .mes .price .old_price{
		color: #DDDDDD;
		font-size: 24px;
		text-decoration: line-through;
	}
	.main .info .mes .list ul{
		display: flex;
		flex-wrap: wrap;
	}
	.main .info .mes .list ul li{
		margin: 5px 0;
	}
	.main .info .mes .list .list_top li{
		height: 30px;
		padding: 0 10px;
		color: #fff;
		background:#FB9B00;
		margin-right: 20px;
		text-align: center;
		line-height: 30px;
	}
	.main .info .mes .list .list_bottom li{
		height: 24px;
		border: 3px solid #FB9B00;
		padding: 0 12px;
		margin-right: 20px;
		color: #FB9B00;
		text-align: center;
		line-height: 24px;
	}
	
	.main .tab{
		width: 750px;
		margin: 0 auto;
	}
	.main .tab .tab-title{
		width: 100%;
		height: 86px;
		display: flex;
		justify-content: space-around;
	}
	.main .tab .tab-title li{
		width: 150px;
		height: 100%;
		line-height: 86px;
	}
	.main .tab .tab-title .on a{
		color: #ff9900;
	}
	
	/* 遮罩层 */
	.mask{
		// height: 1196px;
		width: 100%;
		height: 1300px;
		position: relative;
		z-index: 2;
	}
	.mask .bg{
		width: inherit;
		height: 100%;
		background: #000;
		opacity: 0.5;
	}
	.mask .order{
		width: inherit;
		background: #fff;
		position: absolute;
		bottom: 99px;
	}
	
	.alert{
		width: 240px;
		height: 80px;
		border-radius: 10px;
		background: #000;
		color: #fff;
		opacity: 0.8;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		z-index: 10;
		text-align: center;
		line-height: 80px;
		font-size: 26px;
	}
</style>
