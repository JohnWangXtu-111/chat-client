<template>
  <view class="search-item-container" @click="goToUserDetail">
    <view>
      <image
        :src="avatar"
        mode="aspectFit"
        class="search-container__img"
      ></image>
    </view>
    <view class="search-item-container__username">{{ userOrGroupName }}</view>
    <view class="search-item-container__btn" :class="operationBtnClass">
      发消息
    </view>
  </view>
</template>

<script>
import { friendState } from "@/utils/constant";
export default {
  props: {
    avatar: {
      type: String,
      require: true,
    },
    userOrGroupName: {
      type: String,
      required: true,
    },
    userOrGroupId: {
      type: String,
      required: true,
    },
    state: {
      type: Number, //0 不是好友 1是好友 2是本人 3在群内 4不在群内
      required: true,
    },
  },
  computed: {
    operationBtnClass() {
      const stateMapToClass = [
        "search-item-container__btn--not-friend",
        "search-item-container__btn--friend",
        "search-item-container__btn--not-self",
      ];

      return stateMapToClass[this.state];
    },
  },
  methods: {
    goToUserDetail() {
      console.log(1);
      uni.navigateTo({
        url: `/pages/UserDetail/UserDetail?id=${this.userOrGroupId}`,
      });
    },
  },
};
</script>

<style scoped>
.search-item-container {
  display: flex;
  align-items: center;

  font-family: var(--regular-font);
}

.search-container__img {
  width: 80rpx;
  height: 80rpx;
  border-radius: 20rpx;
}

.search-item-container__username {
  flex: 1;

  padding: 0 32rpx;

  font: 500 36rpx var(--regular-font);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.search-item-container__btn {
  width: 120rpx;
  height: 48rpx;
  border-radius: 24rpx;

  text-align: center;

  font: 24rpx/48rpx var(--regular-font);

  background: var(--main-color-yellow);
}

.search-item-container__btn--not-friend {
  color: #4aaaff;

  background-color: rgba(74, 170, 255, 0.1);
}
</style>
