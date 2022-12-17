<template>
  <view class="card">
    <view class="opt-btns">
      <view class="reject-btn btn">拒绝</view
      ><view class="agree-btn btn" @click="handleAccept">同意</view>
    </view>
    <view class="user">
      <view class="username-wrap">
        <view class="username">{{ fusername }}</view>
      </view>
      <view class="time">{{ lastTime }}</view>
    </view>
    <view class="req-msg">留言：{{ msg }}</view>
    <image :src="favatar" class="avatar"> </image>
  </view>
</template>

<script>
import moment from "moment";
import { latestReqMsg } from "@/request";
export default {
  data() {
    return {
      msg: "加载中...",
    };
  },
  props: {
    fid: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    favatar: {
      type: String,
      required: true,
    },
    fusername: {
      type: String,
      required: true,
    },
  },
  computed: {
    lastTime() {
      moment.locale("zh-cn");
      let now = new Date().getTime();

      const day = 1000 * 60 * 60 * 24;
      const tenDays = day * 10;

      if (now - this.time < day) {
        return moment(new Date(this.time)).format("h:mm");
      } else if (now - this.time < tenDays) {
        return moment(new Date(this.time)).format("MMM Do");
      } else {
        const diff = now - this.time;
        return Math.floor(diff / day) + "天前";
      }
    },
  },
  async created() {
    try {
      const res = await latestReqMsg(this.fid);
      console.log(res);
      this.msg = res.data.latest[0].content;
    } catch (error) {
      console.log(error.message);
    }
  },
  methods: {
    handleAccept() {
      this.$emit("accept", this.fid);
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 680rpx;
  margin: 0 auto;
  padding: 34rpx;
  border-radius: 16rpx;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.avatar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(calc(-50%));
  top: 0;
  border-radius: 50%;
  width: 142rpx;
  height: 142rpx;
}
.opt-btns {
  display: flex;
  justify-content: space-between;
}
.btn {
  width: 164rpx;
  height: 60rpx;
  border-radius: 50rpx;
  text-align: center;
  line-height: 60rpx;
  font-size: 30rpx;
  font-family: var(--medium-font);
}
.reject-btn {
  background-color: #feeeee;
  color: #fa615e;
}
.agree-btn {
  background-color: var(--main-color-yellow);
}

.username-wrap {
  width: 60%;
  margin: 0 auto;
}

.user {
  margin-top: 34rpx;
}

.username {
  font-family: var(--regular-font);
  font-size: 36rpx;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
.time {
  text-align: center;
  margin-top: 8rpx;
  color: #b3b2b6;
}
.req-msg {
  font-family: var(--regular-font);
  font-size: 30rpx;
  box-sizing: border-box;
  width: 100%;
  padding: 24rpx 34rpx;

  background-color: #f3f4f6;
  border-radius: 14rpx;
  margin-top: 44rpx;
}
</style>
