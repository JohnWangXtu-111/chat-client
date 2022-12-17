<template>
  <view class="search-page-container">
    <header class="search-page-container__header">
      <view class="search-page-container__input-container">
        <input
          type="text"
          class="search-page-container__input-container__input"
          v-model="keyword"
          @blur="search"
        />
        <u-icon name="search" class="search-icon"></u-icon>
      </view>
      <view class="search-page-container__cancel-btn" @tap="goBack">
        取消
      </view>
    </header>
    <SearchList :userList="userList" class="search-page-container__body" />
  </view>
</template>

<script>
import SearchList from "@/components/SearchList/SearchList.vue";
import { searchUserAndGroup } from "../../request";
export default {
  data() {
    return {
      keyword: "",
      userList: [],
    };
  },
  components: {
    SearchList,
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    async search() {
      try {
        const searchRes = await searchUserAndGroup(this.keyword);
        console.log(searchRes);
        this.userList = searchRes.data.users.map((user) => ({
          avatar: "http://192.168.10.100:3000/user/" + user.avatar,
          userOrGroupName: user.username,
          userOrGroupId: user._id,
          state: 0,
        }));
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.search-page-container__header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14rpx 32rpx;

  font-family: var(--regular-font);
  box-shadow: 0px 1rpx 0px 0px rgba(0, 0, 0, 0.12);

  background-color: #fff;
}

.search-page-container__input-container {
  box-sizing: border-box;

  display: flex;
  align-items: center;

  font-size: 32rpx;
  padding: 0 12rpx;
  border-radius: 10rpx;

  width: 600rpx;
  height: 60rpx;

  background: #f3f4f6;
}

.search-page-container__input-container__input {
  flex: 1;
}

.search-page-container__input-container__img {
  height: 40rpx;
  width: 40rpx;
}

.search-page-container__cancel-btn {
  font-size: 28rpx var(--regular-font);
}

.search-page-container__body {
  position: fixed;
  left: 0;
  right: 0;
  overflow: scroll;
  top: 88rpx;
  bottom: 10rpx;

  padding-top: 40rpx;
}

.search-icon /deep/ .u-icon__icon {
  font-size: 46rpx !important;
  color: var(--main-color-black) !important;
}
</style>
