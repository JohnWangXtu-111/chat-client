<template>
	<view>
		<the-header class="header">
			<template #header-left>
				<view @tap="back">取消</view>
			</template>
			<template #header-center>
				<view class="center">创建群聊</view>
			</template>
			<template #header-right>
				<view class="right">确定</view>
			</template>
		</the-header>
		<view class="modify-input">
			<textarea cols="30" rows="10" placeholder="群名称群名称" placeholder-class="placeholder"></textarea>
		</view>
	</view>
</template>

<script>
	import TheHeader from '@/components/layout/TheHeader.vue'
	export default {
		data() {
			return {

			}
		},
		methods: {
			back() {
				uni.navigateBack();
			}
		},
		components: {
			TheHeader
		}
	}
</script>

<style scoped>
	.header {
		font-size: 32rpx;
		font-family: 'PingFangSC-Regular';
		box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.1);
		padding: 16rpx 32rpx;
	}

	.center {
		font-size: 40rpx;
		text-align: center;
	}

	.right {
		color: #4AAAFF;
		text-align: right;
	}

	.modify-input {
		box-sizing: border-box;
		width: 686rpx;
		height: 386rpx;
		padding: 16rpx 22rpx;
		margin: 0 auto;
		margin-top: 34rpx;

		background: #F3F4F6;
		border-radius: 20rpx;
		font-family: 'PingFangSC-Regular';
	}

	.placeholder {
		color: #000;
		font-size: 32rpx;
	}
</style>
