<template>
	<div class="Classify">
		<div class="header">
			<Search></Search>
		</div>
		<div class="content">
			<div class="title" ref="title">
				<ul>
					<li 
					v-for="(item,index) of proLists" 
					:class="{current: index === active}"
					@click="selectItemClick(index,$event)"
					:key="index"
					>{{item.title}}</li>
				</ul>
			</div>
			<div class="main" ref="main">
				<ul>
					<li class="proList" v-for="(item,index) of proLists" :key="index" ref="mainLi">
						<h2>{{item.title}}</h2>
						<div class="proItem">
							<ol>
								<li v-for="(proItem,index) of item.proListItem" :key="index">
									<div class="imgBox"> 
										<img :src="proItem.url">
									</div>
									<h3>{{proItem.proinfo}}</h3>
								</li>
							</ol>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import BetterScroll from 'better-scroll'
	export default {
		name: "Classify",
		data(){
			return{
				scrollY:0,
				clickEvent:false,
				listHeight:[],
				"proLists":[
					{
						"title":"为您推荐",
						"proListItem":[
							{
								"id":1,
								"url":require('../.././images/classifyProList/proList01.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":2,
								"url":require('../.././images/classifyProList/proList02.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":3,
								"url":require('../.././images/classifyProList/proList03.jpg'),
								"proinfo":"GD-8898"
							},
						]
					},
					{
						"title":"电吹风系列",
						"proListItem":[
							{
								"id":4,
								"url":require('../.././images/classifyProList/proList04.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":5,
								"url":require('../.././images/classifyProList/proList05.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":6,
								"url":require('../.././images/classifyProList/proList06.jpg'),
								"proinfo":"GD-8897"
							}
						]
					},
					{
						"title":"干衣机系列",
						"proListItem":[
							{
								"id":1,
								"url":require('../.././images/classifyProList/proList07.jpg'),
								"proinfo":"GD-8898"
							},
						]
					},
					{
						"title":"产品包装",
						"proListItem":[
							{
								"id":1,
								"url":require('../.././images/classifyProList/proList07.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":2,
								"url":require('../.././images/classifyProList/proList07.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":3,
								"url":require('../.././images/classifyProList/proList07.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":4,
								"url":require('../.././images/classifyProList/proList07.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":5,
								"url":require('../.././images/classifyProList/proList07.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":6,
								"url":require('../.././images/classifyProList/proList07.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":7,
								"url":require('../.././images/classifyProList/proList07.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":8,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							}
						]
					},
					{
						"title":"包装盒图",
						"proListItem":[
							{
								"id":1,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":2,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":3,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":4,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":5,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":6,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":7,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							}
						]
					},
					{
						"title":"酒店系列",
						"proListItem":[
							{
								"id":1,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":2,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":3,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":4,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":5,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":6,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":7,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":8,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":9,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":10,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":11,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":2,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":13,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							}
						]
					},
					{
						"title":"负离子系列",
						"proListItem":[
							{
								"id":1,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":2,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":3,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":4,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":5,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":6,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":7,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":8,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":9,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":10,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":11,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":12,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							}
						]
					},
					{
						"title":"红外系列",
						"proListItem":[
							{
								"id":1,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":2,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":3,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":4,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":5,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":6,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":7,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":8,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":9,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":10,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							}
						]
					},
					{
						"title":"无噪音系列",
						"proListItem":[
							{
								"id":1,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8898"
							},
							{
								"id":2,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":3,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":4,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":5,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":6,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":7,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":8,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":9,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":10,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":11,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":12,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":13,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":14,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":15,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							},
							{
								"id":16,
								"url":require('../.././images/HomeProList/homelist01.jpg'),
								"proinfo":"GD-8897"
							}
						]
					}
				],
			}
		},
		methods:{
			initScroll(){
				var that = this
				this.lefts = new BetterScroll(this.$refs.title,{
					click:true
				})
				this.rights = new BetterScroll(this.$refs.main,{
					probeType:3,
					click: true
				})
				this.rights.on("scroll",function(props){
					that.scrollY = Math.abs(Math.round(props.y))
				})
			},
			getHeight(){
				var itemHeight = this.$refs.mainLi
				var height = 0 
				this.listHeight.push(height)
				var that = this
				// console.log(itemHeight)
				for(var i=0;i<=itemHeight.length-1;i++){
					height += itemHeight[i].clientHeight
					that.listHeight.push(height)
				}
			},
			selectItemClick(index,event){
				var that = this
				// console.log(this);
				this.clickEvent = true
				if(!event._constructed){
					return
				}else{
					var right =  this.$refs.mainLi
					var el = right[index]
					that.rights.scrollToElement(el,300)
				}
			}
		},
		mounted(){
			var that = this
			this.$nextTick(function(){
				that.initScroll()
				that.getHeight()
			})
		},
		computed:{
			active(){
				for(var i = 0; i<this.listHeight.length-1; i++){
					var h1 = this.listHeight[i]
					var h2 = this.listHeight[i+1]
					
					if(this.scrollY >= h1 && this.scrollY < h2){
						return i
					}
					if(this.scrollY >= this.listHeight[this.listHeight.length-1]){
						return 0
					}
				}
				return 0
			},
		}
	}
</script>
<style lang="less" scoped>
	.fontStyle{
		color: #666;
		font-size: 32px;
	}
	.header{
		width: 100%;
		position: fixed;
		z-index: 999;
		top: 0;
	}
	.content{
		width: 100%;
		display: flex;
		padding: 88px 20px 0px;
		box-sizing: border-box;
		.title{
			width: 30%;
			// flex: 0 0 30%;
			li{
				height: 110px;
				line-height: 110px;
				font-weight: bold;
				.fontStyle()
			}
			.current{
				color: #f15353;
			}
		}
		.main{
			width: 70%;
			height: 1617px;
			// overflow: hidden;
			ul{
				padding-bottom: 130%;
				.proList{
					h2{
						height: 126px;
						line-height: 126px;
						text-indent: 20px;
						.fontStyle()
					}
					.proItem{
						ol{
							display: flex;
							flex-wrap: wrap;
							li{
								width: 29%;
								text-align: center;
								margin-right: 20px;
							}
							.imgBox{
								width: 100%;
								position: relative;
								margin: 0 auto;
								padding-bottom: 100%;
								overflow: hidden;
								img{
									width: 90%;
									position: absolute;
									top: 0;bottom: 0;left: 0;right: 0;
									margin: auto;
								}
							}
							h3{
								height: 60px;
								line-height: 60px;
								.fontStyle()
							}
						}
					}
				}
			}
		}
	}
</style>
