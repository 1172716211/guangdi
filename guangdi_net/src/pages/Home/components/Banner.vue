
<template>
	<div class="Banner">
		<mt-swipe :auto="1500">
			<mt-swipe-item v-for="(item,index) of imgList" :key="index">
				<img :src="item.url" :key="item.id">
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
export default {
    name: 'Banner',
    data() {
        return {
            imgList: [
                { id: 1, url: require('@/images/Homebanner/banner01.jpg') },
                { id: 2, url: require('@/images/Homebanner/banner02.jpg') },
                { id: 3, url: require('@/images/Homebanner/banner03.jpg') }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.Banner {
    width: 750px;
    height: 320px;
    background: #ddd;
    margin: 0 auto;
	
    .mint-swipe-items-wrap {
        img {
            width: 750px;
            height: 320px;
        }
    }
    /deep/ .mint-swipe-indicators {
        .mint-swipe-indicator {
            width: 20px;
            height: 20px;
			opacity: 1;
            background-color: #ffffff;
        }
		.is-active{
			background-color: #841bd1;
		}
    }
}
</style>
