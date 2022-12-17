<template>
	<view class="list">
		<TextMessage v-for="(message, index) in chatList" :key="index" :other="message.other"
			:username="message.username" :avatar="message.avatar" :content="message.content" />
	</view>
</template>

<script>
	import TextMessage from './TextMessage.vue'
	export default {
		components: {
			TextMessage
		},
		props: {
			chatList: {
				type: Array,
				required: true
			}
		}
	}
</script>

<style scoped>
	.list {
		display: flex;
		flex-direction: column;
		
		gap: 10rpx;
	}
</style>
