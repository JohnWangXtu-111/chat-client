<template>
  <view>
    <Req
      v-for="req in friendReqList"
      :key="req.fid"
      :fid="req.fid"
      :favatar="req.favatar"
      :time="req.time"
      :fusername="req.fusername"
      class="req-item"
      @accept="accept"
    />
  </view>
</template>

<script>
import { fetchFriendReqList, acceptRequest } from "@/request";
import Req from "./Req.vue";
export default {
  components: {
    Req,
  },
  data() {
    return {
      friendReqList: [],
    };
  },
  async created() {
    try {
      const res = await fetchFriendReqList();
      console.log(res);
      this.friendReqList = res.data.friendReqList.map((req) => ({
        fid: req.fid._id,
        time: new Date(req.updateAt).getTime(),
        favatar: `http://127.0.0.1:3000/user/${req.fid.avatar}`,
        fusername: req.fid.username,
      }));
      console.log(" ", this.friendReqList);
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async accept(fid) {
      try {
        const res = await acceptRequest(fid);
        // console.log(res);
        this.friendReqList = this.friendReqList.filter(
          (req) => req.fid !== fid
        );
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.req-item:nth-child(n + 2) {
  margin-top: 108rpx;
}
</style>
