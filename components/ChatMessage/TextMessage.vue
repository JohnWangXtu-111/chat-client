<template>
	<view class="container" :class="!other ? 'other' : ''">
		<view class="msg" >
			<view class="avatar">
				<image :src="`http://127.0.0.1:3000/user/${avatar}`" class="avatar-img"></image>
			</view>
			<view class="msg-content">
				{{ content }}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			other: {
				type: Boolean,
				required: true
			},
			username: {
				type: String,
				required: true
			},
			avatar: {
				type: String,
				required: true
			},
			content: {
				type: String,
				required: true
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
	}
	.container.other {
		justify-content: end;
	}
	/* 切换顺序 */
	.other .avatar {
		order: 2;
	}
	
	.msg {
		display: flex;

		gap: 20rpx;
	}


	.avatar-img, .avatar {
		width: 80rpx;
		height: 80rpx;
		border-radius: 20rpx;
	}

	.msg-content {
		border-radius: 0 20rpx 20rpx;
		word-wrap: break-word;
		max-width: 480rpx;
		background: #FFFFFF;
		padding: 16rpx 24rpx;

		font-family: 'PingFangSC-Regular';
		font-size: 36rpx;
		line-height: 1.2;
	}
	
	.other .msg-content {
		background-color: #FFE431;
		border-radius: 20rpx 0 10px 20rpx;
	}
</style>
