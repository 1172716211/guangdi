<template>
	<div class="User">
		<ComHeader>
			<span slot="left"></span>
			<h1 slot="title">个人中心</h1>
		</ComHeader>
		<div class="userInfo">
			<div class="top">
				<div class="mes">
					<div class="img">
						<img src="../../images/HomeProList/proList04.png" />
					</div>
					<div class="main">
						<p>管理员root</p>
						<p>137****7124</p>
					</div>
				</div>
				<p class="setting">
					账户管理、收货地址>
				</p>
			</div>
			<ul class="buttom">
				<li class="coupon">
					<p>￥160</p>
					<p>红包优惠券</p>
				</li>
				<li class="holder">
					<p>5</p>
					<p>卡包</p>
				</li>
				<li class="follow">
					<i class="iconfont">&#xe60e;</i>
					<p>收藏</p>
				</li>
			</ul>
		</div>
		<div class="content">
			<div class="order">
				<span>我的订单</span>
				<span>查看全部订单 <i class="iconfont">&#xe636;</i></span>
			</div>
			<div class="service">
				<ul>
					<li v-for="(item,index) of serviceList" :key="index">
						<div class="icon">
							<i class="iconfont" v-html="item.icon"></i>
							<span class="dot">1</span>
						</div>
						<div class="text">{{item.text}}</div>
					</li>
				</ul>
			</div>
			<div class="wallet">
				<span>我的钱包</span>
				<i class="iconfont">&#xe636;</i>
			</div>
		</div>
		<MenuBar></MenuBar>
	</div>
</template>

<script>
	export default {
		name:"User",
		data() {
			return {
				"serviceList": [
					{"icon":"&#xe63f;","text":"待付款"},
					{"icon":"&#xe640;","text":"待收货"},
					{"icon":"&#xe612;","text":"待评价"},
					{"icon":"&#xe625;","text":"返修/退换"},
				]
			}
		},
	}
</script>

<style lang="less" scoped>
	.paddingStyle{
		padding: 0px 20px;
		box-sizing: border-box;
		
	}
	.User{
		.userInfo{
			width: 100%;
			height: 370px;
			background-color: #2794d3;
			.top{
				height: 245px;
				padding-top: 30px;
				box-sizing: border-box;
				p{
					color: #fff;
					font-size: 30px;
				}
				.mes{
					display: flex;
					align-items: center;
					margin-bottom: 20px;
					.img {
						width: 145px;
						height: 145px;
						background: #888;
						border-radius: 50%;
						margin: 0px 20px;
						position: relative;
						overflow: hidden;
						img {
							width: 80%;
							position: absolute;
							left: 0;
							right: 0;
							top: 0;
							bottom: 0;
							margin: auto;
						}
					}
					.main{
						padding-left: 20px;
					}
				}
				.setting{
					text-align: right;
					padding-right: 20px;
				}
			}
			.buttom{
				height: 125px;
				background: rgba(0,0,0,0.2);
				display: flex;
				justify-content: space-around;
				li{
					width: 33%;
					text-align: center;
					font-size: 24px;
					color: #d3d2d2;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-content: center;
				}
			}
		}
		.content{
			padding-top: 34px;
			.order{
				width: 100%;
				height: 110px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid #ccc;
				.paddingStyle();
				span{
					font-size: 30px;
					color: #323333;
				}
			}
			.service{
				width: 100%;
				height: 180px;
				border-bottom: 1px solid #ccc;
				.paddingStyle();
				ul{
					width: 100%;
					height: inherit;
					display: flex;
					justify-content: space-between;
					align-items: center;
					li{
						width: 25%;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						.icon{
							position: relative;
							width: 60px;
							height: 60px;
							
							.iconfont{
								position: absolute;
								font-size: 60px;
							}
							.dot{
								position: absolute;
								top: -8px;
								right: -8px;
								display:block;
								width: 30px;
								height: 30px;
								background-color: #e35251;
								border-radius: 50%;
								text-align: center;
								line-height: 30px;
								color: #fff;
							}
						}
						.text{
							color: #666;
							font-size: 32px;
						}
					}
				}
			}
			.wallet{
				width: 100%;
				height: 106px;
				border-bottom: 1px solid #ccc;
				font-size: 32px;
				color: #323333;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.paddingStyle();
			}
		}
	}
</style>
