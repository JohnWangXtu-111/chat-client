<template>
  <view>
    <view class="content" v-if="loaded">
      <view class="header">
        <the-header>
          <template #header-left>
            <view class="avatar" @tap="goToUserProfile">
              <image
                src="../../static/images/avatar1.jpeg"
                mode="aspectFit"
                class="avatar-img"
              ></image>
            </view>
          </template>
          <template #header-center>
            <view class="logo">
              <image
                src="../../static/images/logo.png"
                mode="aspectFill"
                class="logo-img"
              ></image>
            </view>
          </template>
          <template #header-right>
            <view class="icons">
              <u-icon name="search" class="icon" @click="toSearchPage"></u-icon>
              <u-icon
                name="plus"
                class="icon"
                @click="gotoCreateGroup"
              ></u-icon>
            </view>
          </template>
        </the-header>
      </view>
      <MessageList />
    </view>
    <view class="loading" v-else>
      <u-loading-icon text="加载中" textSize="18"></u-loading-icon>
    </view>
  </view>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import MessageList from "@/components/MessageList/MessageList.vue";
import store from "@/store/index.js";
export default {
  data() {
    return {
      title: "Hello 111",
    };
  },
  onLoad() {
    console.log(this.loaded);
  },
  methods: {
    toSearchPage() {
      uni.navigateTo({
        url: "/pages/Search/Search",
        animationType: "pop-in",
        animationDuration: 400,
      });
    },
    goToUserProfile() {
      uni.navigateTo({
        url: "/pages/UserProfile/UserProfile",
        animationType: "slide-in-right",
        animationDuration: 400,
      });
    },
    gotoCreateGroup() {
      uni.navigateTo({
        url: "/pages/create-group/index",
        animationType: "slide-in-right",
        animationDuration: 400,
      });
    },
  },
  components: {
    TheHeader,
    MessageList,
  },
  onPullDownRefresh() {
    console.log("refresh");
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 1000);
  },
  computed: {
    loaded() {
      return store.state.userLoaded;
    },
  },
};
</script>

<style scoped>
.header {
  margin: 0 -24rpx;
}

.avatar-img {
  width: 34px;
  height: 34px;
  border-radius: 8px;
}

.logo-img {
  width: 44px;
  height: 21px;
}

.avatar,
.logo,
.icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar {
  justify-content: start;
}

.icons {
  justify-content: end;
}

.icon /deep/ .u-icon__icon {
  font-size: 52rpx !important;
  color: var(--main-color-black) !important;
}

.icon:nth-child(2) {
  margin-left: 20rpx;
}

.icon:nth-child(2) /deep/ .u-icon__icon {
  font-size: 42rpx !important;
}

.header {
  box-shadow: 0px 1rpx 0px 0px rgba(0, 0, 0, 0.1);
}
</style>
