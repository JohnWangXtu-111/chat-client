<template>
  <view class="search-list-container" v-if="userList.length > 0">
    <view class="search-list-container__title">用户</view>
    <view class="search-list-container__body">
      <SearchItem
        v-for="user in userList"
        :key="user.userOrGroupId"
        :userOrGroupId="user.userOrGroupId"
        :userOrGroupName="user.userOrGroupName"
        :avatar="user.avatar"
        :state="user.state"
        class="search-list-container__item"
       
      />
    </view>
  </view>
</template>

<script>
import SearchItem from "./SearchItem.vue";
export default {
  props: {
    userList: {
      type: Array,
      required: true,
    },
  },
  components: {
    SearchItem,
  },
  methods: {
    
  },
};
</script>

<style scoped>
.search-list-container {
  padding: 0 32rpx;
}
.search-list-container__title {
  font: 600 44rpx/1.2 var(--regular-font);
  letter-spacing: -1.5rpx;
}
.search-list-container__item {
  margin-top: 30rpx;
}
.search-list-container__item:first-child {
  margin-top: 20rpx;
}
</style>
