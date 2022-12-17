<template>
	<view class="the-header">
		<view>
			<slot name="header-left"></slot>
		</view>
		<view>
			<slot name="header-center"></slot>
		</view>
		<view>
			<slot name="header-right"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
	
			}
		},
		methods: {
	
		}
	}
</script>

<style scoped>
	.the-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		height: 88rpx;
		padding: 0 56rpx;
		
		
		font-size: 36rpx;
		font-weight: 500;
	}
	.the-header view {
		width: 33.333%;
	}
</style>
