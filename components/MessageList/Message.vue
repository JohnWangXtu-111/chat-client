<template>
  <view class="message">
    <view class="left">
      <image
        :src="'http://127.0.0.1:3000/user/' + avatar"
        mode="aspectFit"
        class="avatar-img"
      ></image>
      <u-badge
        type="error"
        max="99"
        class="count"
        :value="count"
        :absolute="true"
      ></u-badge>
    </view>
    <view class="right">
      <view class="top">
        <text class="title">{{ username || '好友请求'  }}</text>
        <text class="time">{{ lastTime }}</text>
      </view>
      <view class="bottom">
        {{ msg }}
      </view>
    </view>
  </view>
</template>

<script>
import { tinyTime } from "@/utils/help";
export default {
  props: {
    avatar: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    msg: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
		username: {
			type: String,
		}
  },
  computed: {
    lastTime() {
      return tinyTime(new Date(this.time))
    },
  },
};
</script>

<style scoped>
.message {
  display: flex;
  gap: 32rpx;

  font-family: "PingFangSC-Regular";
}

.left {
  position: relative;

  width: 96rpx;
  height: 96rpx;
}

.avatar-img {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 24rpx;
}
.count {
  /* z-index: 999; */
  top: 0;
  right: 0;
  transform: translateX(27%) translateY(-30%);
}

.right {
  flex: 1;
}

.top {
  display: flex;
  justify-content: space-between;
}

.title {
  font-size: 36rpx;
	font-weight: 500;
	font-family: var(--regular-font);
}

.time {
  font-size: 24rpx;
  color: rgba(39, 40, 50, 0.4);
	font-family: var(--regular-font);
}

.bottom {
  width: 558rpx;
  height: 40rpx;
  color: rgba(39, 40, 50, 0.6);
	font-size: 28rpx;
	font-family: var(--regular-font);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
