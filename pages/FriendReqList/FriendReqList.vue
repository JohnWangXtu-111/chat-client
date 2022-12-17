<template>
  <view>
    <TheHeader class="header">
      <template #header-left>
        <u-icon name="arrow-left" class="left-icon" @click="goBack"></u-icon>
      </template>
      <template #header-center> <view class="center"> 好友请求 </view> </template>
    </TheHeader>
		<view class="main">
			<view class="content">
				<ReqList></ReqList>
			</view>
		</view>
  </view>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import ReqList from './ReqList/ReqList.vue'
export default {
  data() {
    return {};
  },
  methods: {
		goBack() {
			uni.navigateBack()
		}
	},
  components: {
    TheHeader,
		ReqList
  },
};
</script>

<style scoped>
.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
  margin: 0 -32rpx;
	border-bottom: 4rpx solid #ececec;
	/* background-color: red; */
}
.center {
	text-align: center;
	font-family: var(--medium-font);
	font-size: 40rpx;
}
.left-icon /deep/ .u-icon__icon{
	color: var(--main-color-black)!important;
	font-size: 48rpx!important;
}
.main {
	position: fixed;
	left: 0;
	right: 0;
	top: 100rpx;
	padding-top: 10rpx;
	bottom: 0;
	overflow: scroll;
}
.content {
	padding-top: 80rpx;
	padding-bottom: 40rpx;
}
</style>
