
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
            imgList: []
        }
    },
	created(){
		var that = this
		this.$http.get('https://easy-mock.com/mock/5c04f8ca0f900b1961c8c88b/guangdi/banner')
		.then(function(res){
			
			that.imgList = res.data.imgList
			
		})
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
