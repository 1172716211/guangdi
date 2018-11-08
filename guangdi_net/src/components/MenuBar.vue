<template>
	<div class="MenuBar">
		<ul>
			<li>
				<router-link to="/">
					<i class="iconfont">&#xe605;</i>
					<span>首页</span>
				</router-link>
			</li>
			<li>
				<router-link to="/Find">
					<i class="iconfont">&#xe607;</i>
					<span>发现</span>
				</router-link>
			</li>
			<li>
				<router-link to="/ShopCar">
					<i class="iconfont">&#xe606;</i>
					<span>购物车</span>
				</router-link>
			</li>
			<li>
				<router-link to="/User">
					<i class="iconfont">&#xe601;</i>
					<span>个人中心</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name:"MenuBar",
		
	}
</script>

<style lang="less" scoped>
	.MenuBar{
		width: 100%;
		height: 98px;
		position: fixed;
		bottom: 0;
		background-color: #252525;
		ul{
			width: inherit;
			height: inherit;
			display: flex;
			li{
				width: 25%;
				height: inherit;
				a{
					width: 100%;
					height: inherit;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					color: #999;
					.iconfont{
						font-size: 42px;
					}
				}
				.router-link-exact-active{
					color: #df2e33;
				}
			}
		}
	}
</style>
