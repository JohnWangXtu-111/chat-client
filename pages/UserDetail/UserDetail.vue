<template>
  <view>
    <view
      class="user-detail-page"
      :style="{ backgroundImage: `url(${user.avatar})` }"
    >
      <view class="mask"></view>
      <view class="page">
        <the-header class="header">
          <template #header-left>
            <u-icon name="arrow-left" class="icon" @click="goBack"></u-icon>
          </template>
          <template #header-right>
            <u-icon name="more-dot-fill" class="icon right-icon"></u-icon>
          </template>
        </the-header>
        <view class="main">
          <view class="avatar">
            <image
              :src="user.avatar"
              mode="aspectFit"
              class="avatar-img"
            ></image>
          </view>
          <view class="username">{{ user.username }}</view>
          <view class="markname"> 邮箱： {{ user.email }} </view>
          <view class="desc">
            {{ user.ps }}
          </view>
        </view>
        <view class="add-btn" @click="goToRequestFriend"> 加为好友 </view>
      </view>
    </view>
  </view>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import { getUser } from "@/request";
export default {
  data() {
    return {
      id: null,
      user: {
        avatar: "",
        username: "",
        email: "",
        ps: "", //个性签名
      },
    };
  },
  methods: {
    goBack() {
      // uni
      uni.navigateBack();
    },
    goToRequestFriend() {
      uni.navigateTo({
        url: `/pages/RequestFriend/RequestFriend?id=${this.id}&username=${this.user.username}&avatar=${this.user.avatar}`,
      });
    },
  },
  components: {
    TheHeader,
  },
  async onLoad(opt) {
    console.log(opt);
    this.id = opt.id;
    try {
      const res = await getUser(this.id);
      console.log(res);
      this.user = {
        ...res.data.user,
        avatar: `http://192.168.10.100:3000/user/${res.data.user.avatar}`,
      };
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style scoped>
	.header{
		margin: 0 -32rpx;
	}
.user-detail-page {
  height: 100vh;
  /* background-image: url("../../static/images/avatar1.jpeg"); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 5%;
}

.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  filter: blur(10);
  content: " ";
  display: block;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
}

.page {
  position: relative;
}

.avatar {
  width: 400rpx;
  height: 400rpx;
  border: 6rpx solid #ffffff;
  border-radius: 48rpx;
}

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 24px;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 60rpx;
  padding: 0 100rpx;

  font-family: "PingFangSC-Regular";
  color: #272832;
  font-weight: 400;
}

.username {
  text-align: center;
  font-size: 52rpx;
  margin-top: 48rpx;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.markname {
  margin-top: 30rpx;
}

.markname,
.desc {
  font-size: 28rpx;
}

.desc {
  font-family: "PingFangSC-Light";
  line-height: 48rpx;
  font-weight: 200;
  margin-top: 20rpx;
}

.add-btn {
  position: fixed;
  left: 34rpx;
  right: 34rpx;
  bottom: 76rpx;
  height: 80rpx;
  background: #ffe431;
  border-radius: 5px;
  line-height: 80rpx;
  text-align: center;

  font-family: "PingFangSC-Regular";
  font-size: 32rpx;
  color: #272832;
  font-weight: 400;
}

.icon /deep/ .u-icon__icon {
  font-size: 52rpx !important;
  color: var(--main-color-black) !important;
}
.right-icon {
  justify-content: flex-end;
}
</style>
