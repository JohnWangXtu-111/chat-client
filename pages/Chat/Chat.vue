<template>
	<view class="page">
		<the-header class="header">
			<template #header-left>
				<view class="iconfont icon-xiangzuo" @tap="back"></view>
			</template>
			<template #header-center>
				<view class="center">{{ username }}</view>
			</template>
			<template #header-right>
				<view class="right">
					<image :src="`http://127.0.0.1:3000/user/${avatar}`" mode="aspectFit" class="chat-to-avatar"></image>
				</view>
			</template>
		</the-header>
		<ChatMessageList class="list" :chatList="chatList"/>
		<view class="message-input">
			<u-input v-model="msg" @keydown.enter.native="sendMsg" />
		</view>
	</view>
</template>

<script>
	import TheHeader from '@/components/layout/TheHeader.vue'
	import ChatMessageList from '@/components/ChatMessage/ChatMessageList.vue';
	import store from '@/store'
	export default {
		data() {
			return {
				fid: '',
				msg: '',
				chatList: [],
				username: '',
				avatar: ''
			}
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			sendMsg() {
				// console.log(store.state.auth.user)
				this.socket.emit('chatToPerson', {
					uid: store.state.auth.user._id,
					fid: this.fid,
					type: 0, //0文字 1图片
					content: this.msg
				})
				this.chatList.push({
					other: false,
					username: store.state.auth.user.username,
					avatar: store.state.auth.user.avatar,
					content: this.msg
				})
				console.log(this.chatList)
				this.msg = "";
			}
		},
		components: {
			TheHeader,
			ChatMessageList
		},
		onLoad(friend) {
			console.log(friend)
			this.fid = friend.fid;
			this.username = friend.username;
			this.avatar = friend.avatar;
			this.socket.emit('online', {
				uid: store.state.auth.user._id
			})
			this.socket.on('getPersonMsg', (message) => {
				message.other = true, // 判断是否是自己发送的
				message.username = this.username;
				message.avatar = this.avatar;
				this.chatList.push(message)
				console.log(this.chatList)
			})
		}
	}
</script>

<style scoped>
	.page {
		height: 100vh;
	}
	.chat-to-avatar {
		width: 68rpx;
		height: 68rpx;
		border-radius: 16rpx;
	}

	.center {
		text-align: center;
	}

	.right {
		text-align: right;
	}

	.icon-xiangzuo {
		font-size: 48rpx;
	}

	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: #F4F4F4;
		box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.1);
		margin: 0 -22rpx;
	}

	.list {
		box-sizing: border-box;

		position: fixed;
		top: 88rpx;
		left: 0;
		right: 0;
		bottom: 164rpx;

		padding: 0 32rpx;
		overflow: scroll;


		background-color: #F4F4F4;
	}

	.message-input {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;

		height: 164rpx;
	}
</style>
