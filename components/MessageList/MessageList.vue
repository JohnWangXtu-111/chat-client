<template>
  <view class="message-list">
    <Message
      v-if="request.msg"
      :avatar="request.msg.uid.avatar"
      :msg="request.msg.content"
      :time="new Date(request.msg.updateAt).getTime()"
      :count="request.count"
      class="message-item"
    />
    <Message
      v-for="friend in friend.list"
      :avatar="friend.fid.avatar"
      :msg="friend.msg.content"
      :time="new Date(friend.msg.updateAt).getTime()"
      :count="0"
			:username="friend.fid.username"
      class="message-item"
			@click.native="goChat(friend.fid)"
    />
  </view>
</template>

<script>
import Message from "./Message.vue";
import { fetchHomeMessage } from "@/request";
export default {
  data() {
    return {
      request: {
        msg: null,
        count: 0,
      },
      friend: {
        list: [],
        count: 0,
      },
    };
  },
  components: {
    Message,
  },
  methods: {
    goChat(user) {
      uni.navigateTo({
        url: `/pages/Chat/Chat?fid=${user._id}&username=${user.username}&avatar=${user.avatar}`,
      });
    },
    async allMsg() {
      const res = await fetchHomeMessage();
      this.request.msg = res.data.request.latestMsg;
      this.request.count = res.data.request.count;

      this.friend.count = res.data.friend.count;
      this.friend.list = res.data.friend.friends;
      console.log('res', res);
    },
  },
  mounted() {
    this.allMsg();
  },
};
</script>

<style scoped>
.message-list {
  padding: 0 32rpx;
}
.message-item {
  margin-top: 42rpx;
}
.message-item:first-child {
  margin-top: 36rpx;
}
</style>
