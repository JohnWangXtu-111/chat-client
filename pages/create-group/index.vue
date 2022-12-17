<template>
  <view class="page">
    <TheHeader class="header top">
      <template #header-left>
        <text class="cancel"> 取消 </text>
      </template>
      <template #header-center>
        <view class="title"> 创建群聊 </view>
      </template>
    </TheHeader>
    <view class="center">
      <view class="group-avatar">
        <image
          src="../../static/images/group-default.png"
          mode="scaleToFill"
        ></image>
        <text class="edit-icon">
          <u-icon name="edit-pen"></u-icon>
        </text>
      </view>
      <view class="groupname-input-wrap">
        <input type="text" placeholder="请输入群名称" class="groupname-input" />
      </view>
      <view class="friend-list-wrap">
        <view class="friend-list-title">用户</view>
        <u-list class="friend-list">
          <u-list-item class="friend">
            <view class="radio checked">
              <u-icon name="checkmark" class="check-icon"></u-icon>
            </view>
            <view class="avatar">
              <image
                src="../../static/images/avatar1.jpeg"
                mode="scaleToFill"
              ></image>
            </view>
            <view class="username"> 这是第一个用户 </view>
          </u-list-item>
          <u-list-item class="friend">
            <view class="radio checked"></view>
            <view class="avatar">
              <image
                src="../../static/images/avatar1.jpeg"
                mode="scaleToFill"
              ></image>
            </view>
            <view class="username"> 这是第二个用户 </view>
          </u-list-item>
        </u-list>
      </view>
    </view>
    <view class="footer bottom">
      <u-button type="primary" text="创建（3）" class="create-btn"></u-button>
    </view>
  </view>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    TheHeader,
  },
};
</script>

<style scope>
.page {
  font-size: 32rpx;
  font-family: var(--regular-font);
}

.header {
  margin: 0 -32rpx;
  box-shadow: 0px 1rpx 0px 0px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 40rpx;
  text-align: center;
}
.group-avatar {
  position: relative;
  width: 160rpx;
  height: 160rpx;
  padding: 18rpx;
  margin: 0 auto;
  margin-top: 60rpx;
  border-radius: 40rpx;

  background-color: var(--main-color-yellow);
  box-shadow: 0px 36rpx 40rpx 0px rgba(39, 40, 50, 0.1);
}
.group-avatar image {
  height: 100%;
  width: 100%;
}
.edit-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.edit-icon >>> .uicon-edit-pen {
  font-size: 70rpx !important;
  color: #fff !important;
}

.groupname-input {
  width: 686rpx;
  height: 92rpx;
  background: #f3f4f6;
  border-radius: 46rpx;

  text-align: center;
  font-size: 32rpx;
  margin: 0 auto;
  margin-top: 62rpx;
}

.friend-list-wrap {
  box-sizing: border-box;
  padding: 32rpx;
}

.friend-list-title {
  font-size: 40rpx;
  font-weight: 600;
  margin-top: 40rpx;
}

.friend {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32rpx;
}

.friend + .friend {
  margin-top: 40rpx;
}

.friend .radio {
  width: 48rpx;
  height: 48rpx;
  background-color: rgba(255, 228, 49, 0.5);
}

.friend .radio.checked {
  border-radius: 50%;
  background-color: var(--main-color-yellow);
}

.radio {
  display: flex;
  justify-content: center;
  align-items: center;
}

.check-icon >>> .uicon-checkmark {
  font-size: 36rpx !important;
  font-weight: 600 !important;
  color: #000 !important;
}
.friend image {
  height: 80rpx;
  width: 80rpx;
  border-radius: 20rpx;
}

.friend .username {
  font-size: 36rpx;

  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.footer {
  box-sizing: border-box;
  padding-top: 12rpx;
  height: 168rpx;
  background: #fafafa;
  box-shadow: inset 0px 1rpx 0px 0px rgba(0, 0, 0, 0.1);
}

.create-btn {
  width: 686rpx;
  height: 80rpx;
  margin: 0 auto;
  background: var(--main-color-yellow);
  border: none;
  color: #000;
  border-radius: 10rpx;
  font-size: 32rpx;
}

.top,
.bottom {
  position: fixed;
  right: 0;
  left: 0;
}

.top {
  top: 0;
}
.bottom {
  bottom: 0;
}
.center {
  position: fixed;
  top: 88rpx;
  bottom: 168rpx;
  right: 0;
  left: 0;
	overflow: scroll;
}

.friend-list-wrap >>> .u-list {
	height: auto!important;
}
</style>
