<template>
	<div class="SearchList">
		<div class="wrap">
			<Search>
				<router-link to="/Classify"><i class="iconfont menu">&#xe624;</i></router-link>
			</Search>
			<div class="content">
				<div class="screenBtn">
					<ul>
						<li class="on">推荐</li>
						<li>销量</li>
						<li>价格<i class="iconfont">&#xe60c;</i></li>
						<li @click="screenClick()">筛选<i class="iconfont">&#xe789;</i></li>
					</ul>
				</div>
				<div class="proList">
					<ul>
						<li v-for="(item,index) of searchProList" :key="index">
							<div class="img">
								<img :src="item.imgUrl" />
							</div>
							<div class="main">
								<h2>{{item.title}}</h2>
								<span class="lableIcon">{{item.lableIcon}}</span>
								<div class="mes">
									<span class="sale">{{ item.sale | saleVal }}</span>
									<span class="integral">{{ item.integral | integralVal }}</span>
								</div>
								<div class="priceList">
									<span class="price">{{item.price | rmb}}</span>
									<span class="iconfont">&#xe65c;</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="popup">
			<mt-popup position="right" v-model="popupVisible" pop-transition="popup-fade">
				<div class="popupHeader">
					<i class="iconfont" @click="clickReturn()">&#xe60b;</i>
					<h2>筛选</h2>
					<span></span>
				</div>
				<div class="popupMain">
					<div class="classify">
						<h2 class="comdisplay">
							<span>全部分类</span>
							<i class="iconfont">&#xe60c;</i>
						</h2>
					</div>
					<div class="purpose">
						<h2 class="comdisplay">
							<span>用途</span>
							<i class="iconfont">&#xe60c;</i>
						</h2>
					</div>
					<div class="range comdisplay">
						<h2>价格区间</h2>
						<form>
							<input type="text" value="" />~<input type="text" value="" />元
						</form>
					</div>
					<div class="purpose">
						<h2 class="comdisplay">
							<span>品牌</span>
							<i class="iconfont">&#xe60c;</i>
						</h2>
					</div>
					<div class="address">
						<h2 class="comdisplay">
							<span>所在地</span>
							<i class="iconfont">&#xe60c;</i>
						</h2>
						<div class="mainList">
							<ul>
								<li>北京</li>
								<li>上海</li>
								<li>广州</li>
								<li>杭州</li>
								<li>上海</li>
								<li>广州</li>
								<li>乌鲁木齐</li>
								<li>广州</li>
								<li>广州</li>
							</ul>
						</div>
					</div>
					<div class="other">
						<h2 class="comdisplay">其他条件</h2>
						<div class="mainList">
							<CheckBtn><span slot="text">促销</span></CheckBtn>
							<CheckBtn><span slot="text">货到付款</span></CheckBtn>
							<CheckBtn><span slot="text">有货</span></CheckBtn>
							<CheckBtn><span slot="text">预售</span></CheckBtn>
						</div>
					</div>
					<div class="btn">
						<button class="returnBtn">清空筛选条件</button><button class="okBtn">确定</button>
					</div>
				</div>
			</mt-popup>
		</div>
	</div>
	
</template>

<script>
	import CheckBtn from '@/components/CheckBtn.vue'
	export default {
		name:"SearchList",
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
				popupVisible:false,
				"searchProList": [
					{
						"id":1,
						"imgUrl":require('@/images/HomeProList/proList01.jpg'),
						"title":"新款专业吹风机静音美发负离子 GD-8896",
						"lableIcon":"第二件半价",
						"sale":198,
						"integral":20,
						"price":198
					},
					{
						"id":2,
						"imgUrl":require('@/images/HomeProList/proList01.jpg'),
						"title":"新款专业吹风机静音美发负离子 GD-8896",
						"lableIcon":"第二件半价",
						"sale":198,
						"integral":20,
						"price":198
					},
					{
						"id":3,
						"imgUrl":require('@/images/HomeProList/proList01.jpg'),
						"title":"新款专业吹风机静音美发负离子 GD-8896",
						"lableIcon":"第二件半价",
						"sale":198,
						"integral":20,
						"price":198
					},
					{
						"id":4,
						"imgUrl":require('@/images/HomeProList/proList01.jpg'),
						"title":"新款专业吹风机静音美发负离子 GD-8896",
						"lableIcon":"第二件半价",
						"sale":198,
						"integral":20,
						"price":198
					},
					{
						"id":5,
						"imgUrl":require('@/images/HomeProList/proList01.jpg'),
						"title":"新款专业吹风机静音美发负离子 GD-8896",
						"lableIcon":"第二件半价",
						"sale":198,
						"integral":20,
						"price":198
					},
					{
						"id":6,
						"imgUrl":require('@/images/HomeProList/proList01.jpg'),
						"title":"新款专业吹风机静音美发负离子 GD-8896",
						"lableIcon":"第二件半价",
						"sale":198,
						"integral":20,
						"price":198
					},
				]
			}
		},
		methods:{
			clickReturn(){
				this.popupVisible = false
			},
			screenClick(){
				this.popupVisible = !this.popupVisible
			}
		}
	}
</script>

<style lang="less" scoped>
.fontColor{
	color: #323333;
	font-size: 30px;
}
.SearchList{
	width: 100%;
	height:100%;
	.wrap{
		.menu{
			font-size: 45px;
			color: #44403f;
			padding: 0px 30px 0px 0px;
		}
		.content{
			background: #e9e9e9;
			height: 100%;
			.screenBtn{
				ul{
					width: 100%;
					height: 65px;
					display: flex;
					justify-content: space-around;
					align-items: center;
					li{
						width: 25%;
						height: 65px;
						line-height: 65px;
						text-align: center;
						.fontColor();
					}
					.on{
						color: #e35251;
					}
				}
			}
			.proList{
				width: 100%;
				ul{
					background: #e9e9e9;
					padding: 0px 20px 30px;
					box-sizing: border-box;
					li{
						display: flex;
						width: 100%;
						margin-top: 30px;
						padding: 26px 0px;
						box-sizing: border-box;
						background-color: #fff;
						.img {
							width: 40%;
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
	}
	.popup{
		.mint-popup{
			width: 80%;
			height: 100%;
		}
		.popupHeader{
			height: 99px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0px 26px;
			border-bottom: 2px solid #ccc;
			box-sizing: border-box;
			color: #000;
			.iconfont{
				height: 88px;
				padding: 0px 10px;
				font-size:29px;
				line-height: 88px;
				text-align: center;
				color: #333;
			}
			h2{
				.fontColor();
			}
		}
		.popupMain{
			padding: 0px 15px;
			.mainList{
				ul{
					display: flex;
					padding: 0px 30px;
					flex-wrap: wrap;
					li{
						height: 40px;
						border: 2px solid #d1d1d1;
						margin: 0px 27px 20px;
						padding: 0px 30px;
						line-height: 40px;
					}
				}
			}
			.comdisplay{
				height: 110px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.fontColor();
			}
			.range{
				form{
					input{
						width: 116px;
						height: 40px;
						border: 2px solid #d1d1d1;
						line-height: 40px;
						padding: 0 5px;
						margin: 0px 18px;
						box-sizing: border-box;
					}
				}
			}
			.other{
				.mainList{
					display: flex;
					justify-content: space-around;
				}
			}
			.btn{
				display: flex;
				justify-content: space-around;
				padding-top: 120px;
				button{
					width: 238px;
					height: 67px;
					font-size: 28px;
					color: #fff;
				}
				.returnBtn{
					background-color: #bab8b8;
				}
				.okBtn{
					background-color: #e35251;
				}
			}
		}
	}
}
</style>
