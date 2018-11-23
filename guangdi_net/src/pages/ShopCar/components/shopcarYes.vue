<template>
	<div class="shopcarYes">
		<div class="header">
			<ComHeader>
				<span class="left" slot="left"></span>
				<h1 slot="title">购物车</h1>
				<span class="right" slot="right">管理</span>
			</ComHeader>
		</div>
		<div class="carYeswrap">
			<div class="proList">
				<ul>
					<li v-for="(item,index) of ShopCarList" :key="index">
						<CheckBtn></CheckBtn>
						<div class="img">
							<img :src="item.imgUrl" />
						</div>
						<div class="main">
							<h2>{{ item.title }}</h2>
							<div class="priceList">
								<span class="price">{{ item.price | rmb }}</span>
								<div class="numberBtn">
									<button @click=" numberVal <= 1 ? numberVal = 1 : numberVal-- ">-</button>
									<input type="text" :value=" numberVal " />
									<button @click=" numberVal++ ">+</button>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="similar">
				<h2 class="title">为你推荐</h2>
				<ul>
					<li v-for="(item,index) of similarList" :key="index">
						<div class="img">
							<img :src="item.imgUrl" />
						</div>
						<div class="main">
							<h2>{{item.title}}</h2>
							<div class="priceList">
								<span class="price">{{item.price | rmb}}</span>
								<span class="iconfont">&#xe65c;</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="computed">
			<CheckBtn><span slot="text">全选</span></CheckBtn>
			<div class="total">
				<p>
					合计:<span>{{allTotal}}</span>
				</p>
			</div>
			<div class="accounts">
				去结算<span>{{ 2 | accounts }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import CheckBtn from '@/components/CheckBtn.vue'
	export default {
		name:"shopcarYes",
		components:{
			CheckBtn,
		},
		props:['ShopCarList','similarList'],
		data() {
			return {
				"numberVal":1,
			}
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
			},
			accounts(val){
				return "(" + val + ")"
			}
		},
		methods:{
		},
	}
</script>

<style lang="less" scoped>
	.fontColor{
		color: #323333;
		font-size: 30px;
	}
	.shopcarYes{
		.header{
			width: 100%;
			z-index: 999;
			position: fixed;
		}
		.carYeswrap{
			padding-top: 88px;
			.proList{
				width: 100%;
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
			.similar{
				width: 100%;
				padding: 0px 20px;
				box-sizing: border-box;
				.title{
					width: 100%;
					height: 54px;
					background:url(../../.././images/car_title_bg.png) no-repeat center #ccc;
					background-size: auto 60%;
					font-size: 24px;
					color: #c13433;
					text-align: center;
					line-height: 54px;
				}
				ul{
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					padding-bottom: 30px;
					box-sizing: border-box;
					li{
						display: flex;
						justify-content: space-between;
						align-items: center;
						flex-direction: column;
						width: 330px;
						margin-top: 30px;
						padding: 14px 9px;
						border: 2px solid #999;
						box-sizing: border-box;
						background-color: #fff;
						.img {
							width: 100%;
							height: 186px;
							position: relative;
							overflow: hidden;
							img {
								height: 60%;
								position: absolute;
								left: 0;
								right: 0;
								top: 0;
								bottom: 0;
								margin: auto;
							}
						}
						.main{
							width: 100%;
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
								font-size: 24px;
								color: #df2c38;
								.price{
									
								}
								.iconfont{
									font-size: 24px;
									color: #e2524a;
								}
							}
						}
					}
				}
			}
		}
		.computed{
			width: 100%;
			height: 100px;
			display: flex;
			position: fixed;
			bottom: 98px;
			justify-content: space-between;
			align-items: center;
			padding: 0 20px;
			box-sizing: border-box;
			background: #fff;
			z-index: 999;
			.accounts{
				width: 190px;
				height: 60px;
				background-color: #c13433;
				line-height: 60px;
				text-align: center;
				color: #fff;
				font-size: 26px;
			}
		}
	}
</style>
