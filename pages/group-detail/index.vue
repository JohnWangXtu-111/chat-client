<template>
  <view class="page">
    <TheHeader class="header">
      <template #header-left>
        <u-icon name="arrow-left" class="icon-left"></u-icon>
      </template>
      <template #header-center>
        <view class="title">群聊详情</view>
      </template>
    </TheHeader>
    <view class="group-avatar">
      <image
        src="../../static/images/avatar1.jpeg"
        mode="scaleToFill"
        class="avatar"
      ></image>
    </view>
    <view class="main">
      <view class="grouname-createtime">
        <view class="groupname">开心就好了</view>
        <view class="createtime">2019/12/23</view>
      </view>
      <view class="desc">
        特别的爱给特别的你，就阿什顿库，大哭高科技啊老哭高科技啊老Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Quasi vel placeat
        distinctio unde, deserunt perferendis voluptate quam, error voluptas
        dolores, quibusdam commodi cupiditate doloremque ab vero. Quidem
        obcaecati explicabo aliquid.
      </view>
      <view class="groupmember-wrap">
        <view class="groupmember-title">
          <view class="main-title">群成员</view>
          <view class="sub-title">
            成员管理<u-icon name="arrow-right"></u-icon>
          </view>
        </view>
        <view class="member-list">
          <view class="member-item" v-for="n in 8">
            <view class="avatar">
              <image
                src="../../static/images/avatar1.jpeg"
                mode="scaleToFill"
              ></image>
            </view>
            <view class="username"> 用户 </view>
          </view>
          <view class="member-item">
            <view class="avatar">
              <image src="../../static/images/invite.png" mode="scaleToFill" id="invite-img"></image>
            </view>
            <view class="username"> 邀请 </view>
          </view>
        </view>
      </view>
    </view>
    <view class="settings">
      <view class="setting">
        <view class="setting-name">群名称</view>
        <view class="setting-value">开心就好了</view>
        <view class="setting-arrow">
          <u-icon name="arrow-right"></u-icon>
        </view>
      </view>
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

<style scoped>
.page {
  font-size: 32rpx;
  font-family: var(--regular-font);
}

.header {
  box-shadow: 0px 1rpx 0px 0px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 40rpx;
}

.icon-left >>> .uicon-arrow-left {
  color: #000 !important;
  font-size: 36rpx !important;
}

.group-avatar {
  text-align: center;
  margin-top: 40rpx;
}

.avatar {
  height: 180rpx;
  width: 180rpx;
  border-radius: 50%;
}

.main {
  padding: 32rpx;
  box-sizing: border-box;
}

.grouname-createtime {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.groupname {
  font-size: 48rpx;
  font-weight: 600;
}

.createtime {
  width: 142rpx;
  height: 40rpx;
  font-size: 28rpx;
  color: rgba(39, 40, 50, 0.5);
}

.desc {
  font-size: 30rpx;
  margin-top: 20rpx;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.groupmember-wrap {
  margin-top: 50rpx;
}

.groupmember-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-title {
  font-size: 36rpx;
  font-weight: 600;
}

.sub-title {
  display: flex;
  font-size: 32Frpx;
  color: rgba(39, 40, 50, 0.6);
}

.member-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 44rpx;
  row-gap: 32rpx;

  margin-top: 20rpx;
}
.member-item .avatar image,
.member-item .avatar {
  height: 104rpx;
  width: 104rpx;
  border-radius: 20rpx;
}
.member-item .username {
  text-align: center;
  font-size: 28rpx;
}
.member-item:last-child .avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color-yellow);
}
#invite-img {
	width: 40rpx;
	height: 40rpx;
}
</style>
