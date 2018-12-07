<template>
	<div class="HomeList">
		<ul class="classList">
			<li v-for="(item,index) of classList" :key="index">
				<h2>{{item.title}}</h2>
				<img :src="item.imgUrl" :key="item.id">
			</li>
		</ul>
		<div class="hotList">
			<div class="limit">
				<h2>限量秒杀</h2>
				<div class="time">
					<i ref="h">{{hourNum | twoNum}}</i><span>:</span>
					<i ref="m">{{minuteNum | twoNum}}</i><span>:</span>
					<i ref="s">{{secondNum | twoNum}}</i>
				</div>
				<div class="img">
					<img src="https://1172716211.github.io/guangdi_img/HomeProList/proList01.jpg" alt="">
				</div>
			</div>
			<ul>
				<li class="new">
					<div class="title">
						<h2>新品特惠</h2>
						<h3>99元起</h3>
					</div>
					<div class="img">
						<img src="https://1172716211.github.io/guangdi_img/HomeProList/proList02.jpg" alt="">
					</div>
				</li>
				<li class="sec">
					<div class="title">
						<h2>热门推荐</h2>
						<h3>88元起</h3>
					</div>
					<div class="img">
						<img src="https://1172716211.github.io/guangdi_img/HomeProList/proList03.jpg" alt="">
					</div>
				</li>
				<li class="special">
					<div class="title">
						<h2>特价清仓</h2>
						<h3>0.8折抢</h3>
					</div>
					<div class="img">
						<img src="https://1172716211.github.io/guangdi_img/HomeProList/proList04.png" alt="">
					</div>
				</li>
			</ul>
		</div>
		<div class="lowPrice">
			<h2>贱卖产品</h2>
			<ul>
				<li v-for="item of lowPrice" :key="item.id">
					<div class="img">
						<img :src="item.imgUrl">
					</div>
					<div class="price">
						<span class="new_price">{{item.newPrice | rmb}}</span>
						<span class="old_price">{{item.oldPrice | rmb}}</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="loveList">
			<h2>客户最爱</h2>
			<div class="main">
				<div class="posterImg">
					<img src="@/images/HomeProList/loveList01.jpg">
				</div>
				<ul>
					<li v-for="item of loveList" :key="item.id">
						<div class="img">
							<img :src="item.imgUrl">
						</div>
						<span class="price">{{item.Price | rmb}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    name: 'HomeList',
    data() {
        return {
			nowTime:0,
			d:0,
            hourNum: 0,
            minuteNum: 0,
            secondNum: 0,
            "classList": [],
            "hotList": [],
            "lowPrice": [],
            "loveList": []
        };
    },
    filters: {
        floatNums(Val) {
            return Val.toFixed(2);
        },
        rmb(val) {
            return '￥' + val;
        },
        twoNum(val) {
            if (val < 10) {
                return '0' + val;
            } else {
                return val;
            }
        }
    },
	created(){
		this.getApiData()
		this.countTime()
	},
	methods:{
		getApiData() {
			var that = this
			this.$http.get('https://easy-mock.com/mock/5c04f8ca0f900b1961c8c88b/guangdi/HomeList')
			.then(function(res){
				that.nowTime = res.data.nowTime
				that.classList = res.data.classList
				that.hotList = res.data.hotList
				that.lowPrice = res.data.lowPrice
				that.loveList = res.data.loveList
			})
		},
		countTime() {
			var that = this
			//获取当前时间
			var date = new Date();
			var now = date.getTime();
			//设置截止时间
			var endDate = new Date("2018-12-8 23:23:23")//此处应为接口传进来的时间
			var end = endDate.getTime();
			//时间差
			var leftTime = end - now;
			//定义变量 d,h,m,s保存倒计时的时间
			if (leftTime >= 0) {
				this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
				this.hourNum = Math.floor(leftTime / 1000 / 60 / 60 % 24);
				this.minuteNum = Math.floor(leftTime / 1000 / 60 % 60);
				this.secondNum = Math.floor(leftTime / 1000 % 60);
			}
			// console.log(this.secondNum);
			//递归每秒调用countTime方法，显示动态时间效果
			setTimeout(this.countTime, 1000);
        },
	},
};
</script>
<style lang="less" scoped>
.h2Style {
    font-size: 26px;
    color: #f15353;
    font-weight: bold;
    padding-left: 8px;
    box-sizing: border-box;
}
.HomeList {
    width: 750px;
    height: 100%;
    margin: 0 auto;
    padding: 0px 35px;
    box-sizing: border-box;
    .classList {
        width: 100%;
        padding-top: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
            h2 {
                font-size: 24px;
                font-weight: bold;
            }
            width: 33%;
            text-align: center;
        }
    }
    .hotList {
        h2 {
            .h2Style();
        }
        h2::first-letter {
            font-size: 36px;
        }
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        border: 1px solid #ccc;
        .limit {
            width: 250px;
            height: 340px;
            border-right: 1px solid #ccc;

            box-sizing: border-box;
            .time {
                padding-left: 8px;
                padding-top: 42px;
                i {
                    padding: 7px 5px;
                    background: #666;
                    border-radius: 4px;
                    color: #fff;
                    font-size: 22px;
                }
                span {
                    display: inline-block;
                    width: 25px;
                    color: #666;
                    text-align: center;
                    font-size: 30px;
                }
            }
            .img {
                width: 100%;
                height: 206px;
                position: relative;
                img {
                    width: 165px;
                    height: 188px;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                }
            }
        }
        ul {
            display: flex;
            width: 427px;
            height: inherit;
            flex-wrap: wrap;
            h2::first-letter {
                font-size: 36px;
            }
            h3 {
                font-size: 24px;
                color: #999;
                padding-left: 8px;
                box-sizing: border-box;
            }
            .new {
                width: 212px;
                height: 191px;
                border-right: 1px solid #ccc;
                .img {
                    width: 100%;
                    height: 105px;
                    position: relative;
                    img {
                        width: 90px;
                        height: 105px;
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                    }
                }
            }
            .sec {
                width: 212px;
                height: 191px;
                .img {
                    width: 100%;
                    height: 105px;
                    position: relative;
                    img {
                        width: 90px;
                        height: 105px;
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                    }
                }
            }
            .special {
                display: flex;
                width: 427px;
                height: 148px;
                border-top: 1px solid #87bcd9;
                background: url(../../../images/HomeProList/specialBg.jpg) repeat-x;
                background-size: 100% 100%;
                .title {
                    width: 240px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                }
                .img {
                    width: 200px;
                    height: inherit;
                    position: relative;
                    img {
                        width: 115px;
                        height: 135px;
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                    }
                }
            }
        }
    }
    .lowPrice {
        width: 100%;
        height: 290px;
        h2 {
            height: 60px;
            line-height: 60px;
            .h2Style();
        }
        h2::first-letter {
            font-size: 36px;
        }
        ul {
            width: 100%;
            height: 230px;
            display: flex;
            box-sizing: border-box;
            li {
                width: 25%;
                height: inherit;
                .img {
                    width: 100%;
                    height: 130px;
                    position: relative;
                    overflow: hidden;
                    img {
                        height: 100%;
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                    }
                }
                .price {
                    display: flex;
                    flex-direction: column;
                    font-size: 24px;
                    .new_price {
                        text-align: left;
                        color: #df2e33;
                    }
                    .old_price {
                        text-align: right;
                        color: #999999;
                        text-decoration: line-through;
                    }
                }
            }
        }
    }
    .loveList {
        h2 {
            height: 60px;
            line-height: 60px;
            .h2Style();
        }
        h2::first-letter {
            font-size: 36px;
        }
        .main {
            width: 100%;
            height: 206px;
            display: flex;
            .posterImg {
                width: 305px;
                height: inherit;
                position: relative;
                overflow: hidden;
                img {
                    height: 100%;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                }
            }
            ul {
                display: flex;
                width: 373px;
                height: inherit;
                li {
                    width: 50%;
                    height: inherit;
                    .img {
                        width: 100%;
                        height: 150px;
                        position: relative;
                        overflow: hidden;
                        img {
                            height: inherit;
                            position: absolute;
                            left: 0;
                            right: 0;
                            top: 0;
                            bottom: 0;
                            margin: auto;
                        }
                    }
                    .price {
                        height: 56px;
                        display: block;
                        font-size: 26px;
                        text-align: center;
                        color: #df2e33;
                        line-height: 56px;
                    }
                }
            }
        }
    }
}
</style>
