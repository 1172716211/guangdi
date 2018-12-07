<template>
	<div class="ShopCar">
		<div class="content">
			<shopcarYes v-if="bool" :ShopCarList="ShopCarList" :similarList="similarList"></shopcarYes>
			<shopcarNo v-else></shopcarNo>
		</div>
		<MenuBar></MenuBar>
	</div>
</template>

<script>
	import shopcarYes from './components/shopcarYes.vue'
	import shopcarNo from './components/shopcarNo.vue'
	export default {
		name:"ShopCar",
		components:{
			shopcarYes,
			shopcarNo
		},
		data() {
			return {
				bool:true,
				"ShopCarList": [
					{
						"id":1,
						"imgUrl":require('@/images/HomeProList/proList01.jpg'),
						"title":"新款专业吹风机静音美发负离子 GD-8896",
						"lableIcon":"第二件半价",
						"sale":198,
						"integral":20,
						"price":198,
						"number":1,
					},
					{
						"id":2,
						"imgUrl":require('@/images/HomeProList/proList01.jpg'),
						"title":"新款专业吹风机静音美发负离子 GD-8896",
						"lableIcon":"第二件半价",
						"sale":198,
						"integral":20,
						"price":198,
						"number":1,
					},
					{
						"id":3,
						"imgUrl":require('@/images/HomeProList/proList01.jpg'),
						"title":"新款专业吹风机静音美发负离子 GD-8896",
						"lableIcon":"第二件半价",
						"sale":198,
						"integral":20,
						"price":198,
						"number":1,
					},
				],
				"similarList": [
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
						"id":2,
						"imgUrl":require('@/images/HomeProList/proList01.jpg'),
						"title":"新款专业吹风机静音美发负离子 GD-8896",
						"lableIcon":"第二件半价",
						"sale":198,
						"integral":20,
						"price":198,
					},
					{
						"id":3,
						"imgUrl":require('@/images/HomeProList/proList01.jpg'),
						"title":"新款专业吹风机静音美发负离子 GD-8896",
						"lableIcon":"第二件半价",
						"sale":198,
						"integral":20,
						"price":198,
					},
					{
						"id":3,
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
			
		}
	}
</script>

<style lang="less" scoped>
	.fontColor{
		color: #323333;
		font-size: 30px;
	}
	.ShopCar{
		height: 100%;
		background: #e2e1e1;
		.content{
			width: 100%;
			padding: 0px 0px 188px;
			background: #e2e1e1;
		}
		
	}
</style>
