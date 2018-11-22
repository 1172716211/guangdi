<template>
	<div class="ShopCar">
		<div class="header">
			<ComHeader>
				<span class="left" slot="left"></span>
				<h1 slot="title">购物车</h1>
				<span class="right" slot="right">管理</span>
			</ComHeader>
		</div>
		<div class="content">
			<div class="proList">
				<ul>
					<li v-for="(item,index) of searchProList" :key="index">
						<CheckBtn></CheckBtn>
						<div class="img">
							<img :src="item.imgUrl" />
						</div>
						<div class="main">
							<h2>{{item.title}}</h2>
							<div class="priceList">
								<span class="price">{{ item.price | rmb }}</span>
								<div class="numberBtn">
									<button>-</button><input type="text" :value="numberVal"/><button>+</button>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<MenuBar></MenuBar>
	</div>
</template>

<script>
	import CheckBtn from '@/components/CheckBtn.vue'
	export default {
		name:"ShopCar",
		components:{
			CheckBtn,
		},
		filters: {
			floatNums(Val) {
				return Val.toFixed(2);
			},
			rmb(val) {
				return '￥' + val;
			},
			saleVal(val) {
				return "月销量 " + val;
			},
			integralVal(val) {
				return "积分 " + val;
			}
		},
		data() {
			return {
				"numberVal":1,
				"searchProList": [
					{
						"id":1,
						"imgUrl":require('@/images/HomeProList/proList01.jpg'),
						"title":"新款专业吹风机静音美发负离子 GD-8896",
						"lableIcon":"第二件半价",
						"sale":198,
						"integral":20,
						"price":198,
					},
					{
						"id":1,
						"imgUrl":require('@/images/HomeProList/proList01.jpg'),
						"title":"新款专业吹风机静音美发负离子 GD-8896",
						"lableIcon":"第二件半价",
						"sale":198,
						"integral":20,
						"price":198,
					},
				]
			}
		},
		methods:{
			number
		}
	}
</script>

<style lang="less" scoped>
	.fontColor{
		color: #323333;
		font-size: 30px;
	}
	.header{
		width: 100%;
		z-index: 999;
		position: fixed;
	}
	.ShopCar{
		height: 100%;
		background: #ccc;
		.content{
			width: 100%;
			.proList{
				width: 100%;height: 100%;
				padding: 88px 0px;
					background: #ccc;
				ul{
					padding: 26px 20px 0px;
					box-sizing: border-box;
					li{
						/deep/ .CheckBtn{
							.iconfont{
								font-size: 30px;
							}
						}
						display: flex;
						justify-content: space-around;
						align-items: center;
						width: 100%;
						margin-bottom: 30px;
						padding: 26px 0px;
						box-sizing: border-box;
						background-color: #fff;
						.img {
							width: 190px;
							height: 180px;
							border: 2px solid #ccc;
							position: relative;
							overflow: hidden;
							img {
								height: 80%;
								position: absolute;
								left: 0;
								right: 0;
								top: 0;
								bottom: 0;
								margin: auto;
							}
						}
						.main{
							width: 60%;
							h2{
								margin-bottom: 20px;
								.fontColor();
								font-size: 28px;
							}
							.lableIcon{
								margin-top: 22px;
								padding: 0px 20px;
								background-color: #e35251;
								border-radius: 6px;
								line-height: 34px;
								font-size: 24px;
								color: #e2e0e0;
							}
							.mes{
								margin: 20px 0px;
								display: flex;
								font-size: 24px;
								color: #666;
								.sale{width: 50%;}
								.integral{width: 50%;}
							}
							.priceList{
								display: flex;
								justify-content: space-between;
								padding-right: 56px;
								font-size: 24px;
								color: #df2c38;
								.price{
									font-size: 24px;
								}
								.numberBtn{
									display: flex;
									justify-content: center;
									border: 2px solid #d1cece;
									button{
										width: 43px;
										height: 36px;
										line-height: 36px;
										font-size: 36px;
										color: #999899;
									}
									input{
										width: 78px;
										height: 36px;
										border-left:2px solid #d1cece;
										border-right:2px solid #d1cece;
										line-height: 36px;
										font-size: 24px;
										color: #666666;
										text-align: center;
									}
								}
							}
						}
					}
				}
			}
		}
		
	}
</style>
