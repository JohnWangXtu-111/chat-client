<template>
	<view>
		<the-header class="header">
			<template #header-left>
				<view class="iconfont icon-xiangzuo" @tap="back"></view>
			</template>
			<template #header-center>
				<view class="center">详细</view>
			</template>
		</the-header>
		<view class="content">
			<view class="item">
				<view class="left">
					头像
				</view>
				<view class="center">
					<image src="../../static/images/avatar1.jpeg" mode="aspectFit"></image>
				</view>
				<view class="right iconfont icon-xiangyou" @tap="goUserModify">

				</view>
			</view>
			<view class="item">
				<view class="left">
					签名
				</view>
				<view class="center">
					看没看懂阿凡达，的局啊地卡斯蒂略
				</view>
				<view class="right iconfont icon-xiangyou">

				</view>
			</view>
			<view class="item">
				<view class="left">
					注册
				</view>
				<view class="center">
					2019-12-22 13:32:45
				</view>
				<view class="right iconfont icon-xiangyou">

				</view>
			</view>
			<view class="item">
				<view class="left">
					昵称
				</view>
				<view class="center">
					看阿凡达
				</view>
				<view class="right iconfont icon-xiangyou">

				</view>
			</view>
			<view class="item">
				<view class="left">
					性别
				</view>
				<view class="center">
					男
				</view>
				<view class="right iconfont icon-xiangyou">

				</view>
			</view>
			<view class="item">
				<view class="left">
					生日
				</view>
				<view class="center">
					1996-12-23
				</view>
				<view class="right iconfont icon-xiangyou">

				</view>
			</view>
			<view class="item">
				<view class="left">
					电话
				</view>
				<view class="center">
					12345678
				</view>
				<view class="right iconfont icon-xiangyou">

				</view>
			</view>
			<view class="item">
				<view class="left">
					邮箱
				</view>
				<view class="center">
					1234@ew.com
				</view>
				<view class="right iconfont icon-xiangyou">

				</view>
			</view>
		</view>
		<view class="out-app">
			退出应用
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
			goUserModify() {
				uni.navigateTo({
					url: '/pages/UserModify/UserModify',
					animationType: 'slide-in-right',
					animationDuration: 400
				})
			},
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
		margin: 0 -32rpx;
		box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.1);
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}

	.icon-xiangzuo {
		font-size: 48rpx;
	}

	.center {
		text-align: center;
	}

	.content {
		font-family: 'PingFangSC-Regular';

	}

	.item {
		display: flex;
		align-items: center;
		padding: 34rpx 32rpx;
		box-shadow: 0px 1rpx 0px 0px rgba(238, 238, 238, 1);
	}

	.left {
		font-size: 32rpx;
		font-weight: 700;
	}

	.center {
		text-align: left;
		box-sizing: border-box;
		padding: 0 32rpx;
		flex: 1;
		font-size: 32rpx;
	}

	.center,
	.right {
		color: rgba(39, 40, 50, 0.60)
	}

	.center image {
		width: 108rpx;
		height: 108rpx;
		border-radius: 20rpx;
	}

	.out-app {
		position: fixed;
		bottom: 94rpx;
		left: 50%;
		transform: translateX(-50%);
		color: #FF5D5B;
		font-family: 'PingFangSC-Regular';
	}
</style>
