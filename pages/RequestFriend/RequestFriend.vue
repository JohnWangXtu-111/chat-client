<template>
  <view class="request-friend-page">
    <the-header>
      <template #header-left>
        <u-icon name="arrow-left" class="icon" @click="goBack"></u-icon>
      </template>
      <template #header-right>
        <u-icon name="more-dot-fill" class="icon right-icon"></u-icon>
      </template>
    </the-header>

    <view class="main">
      <view class="avatar">
        <image :src="avatar" mode="aspectFit" class="avatar-img"></image>
      </view>
      <view class="username"> {{ username }} </view>
      <view class="input-area">
        <textarea
          cols="30"
          rows="20"
          class="request-input"
          v-model="reqMsg"
        ></textarea>
      </view>
      <view class="btns">
        <view class="cancel-btn">取消</view>
        <view class="send-btn" @click="request">发送</view>
      </view>
    </view>
  </view>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import { requestFriend } from "@/request";
export default {
  data() {
    return {
      id: "",
      username: "",
      reqMsg: "",
    };
  },
  methods: {
    goBack() {
      // uni
      uni.navigateBack();
    },
    goIndex() {
      uni.navigateBack({
        delta: 3,
      });
    },
    async request() {
      try {
				console.log(111);
        const res = await requestFriend(this.id, this.reqMsg);
        console.log(res);
        this.goIndex();
      } catch (err) {
        console.log(err);
      }
    },
  },
  components: {
    TheHeader,
  },
  onLoad(opt) {
    this.id = opt.id;
    this.username = opt.username;
    this.avatar = opt.avatar;
  },
};
</script>

<style scoped>
/* page */
.request-friend-page {
  z-index: -1;
  height: 100vh;

  background-color: #ffe431;
  /* filter: blur(10px); */
}

/* header */
.icon-xiangzuo,
.ellipsis {
  font-size: 48rpx;
  font-weight: 600;
}

/* main */
.main {
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 17.4%;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 0 56rpx;

  background: #ffffff;
  border-radius: 20px 20px 0 0;
}

/* avatar */
.avatar {
  position: absolute;

  width: 240rpx;
  height: 240rpx;
  border: 6rpx solid #ffffff;
  box-shadow: 0 36rpx 40rpx 0 rgba(39, 40, 50, 0.1);
  border-radius: 50%;

  transform: translateY(-50%);

  overflow: hidden;
}

.avatar .avatar-img {
  width: 100%;
  height: 100%;
}

/* username */
.username {
  margin-top: 168rpx;

  font-family: "PingFangSC-Regular";
  font-size: 26px;

  letter-spacing: -0.89px;
  font-weight: 400;
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.input-area {
  flex: 1;

  padding: 18rpx 22rpx;
  margin-top: 40rpx;
  background: #f3f4f6;
  border-radius: 10px;

  font-family: "PingFangSC-Regular";
  font-size: 16px;
  color: #272832;
}

.request-input {
  font-family: "PingFangSC-Regular";
  font-size: 32rpx;
  letter-spacing: 2rpx;
  font-weight: 400;
}

/* btn */
.btns {
  display: flex;
  margin-top: 94rpx;
  height: 80rpx;
  padding-bottom: 76rpx;
}

.cancel-btn,
.send-btn {
  text-align: center;
  line-height: 80rpx;
  height: 80rpx;
  border-radius: 10rpx;
}

.cancel-btn {
  width: 172rpx;
  background: rgba(39, 40, 50, 0.1);
  margin-right: 32rpx;
}

.send-btn {
  width: 480rpx;
  background: #ffe431;
}

.icon /deep/ .u-icon__icon {
  font-size: 52rpx !important;
  color: var(--main-color-black) !important;
}
.right-icon {
  justify-content: flex-end;
}
</style>
