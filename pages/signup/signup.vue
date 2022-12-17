<template>
  <view>
    <the-header class="header-container">
      <template #header-left>
        <text
          class="iconfont icon-xiangzuo header-container__left-icon"
          @tap="gotoLogin"
        ></text>
      </template>
    </the-header>
    <view class="logo">
      <image
        src="../../static/images/logo.png"
        mode="widthFix"
        class="logo__img"
      ></image>
    </view>
    <view class="main-container">
      <view class="main-container__title"> 注册 </view>
      <u-form class="main-container__form" :model="user" ref="uForm">
        <u-form-item prop="nickname">
          <u-input
            class="main-container__form__input"
            placeholder="请取个名字"
            placeholderStyle="font-family: 'PingFangSC-Medium';font-size: 28rpx;color: rgba(39, 40, 50, 0.4);letter-spacing: 0;font-weight: 500;"
            v-model="user.nickname"
          >
          </u-input>
        </u-form-item>
        <u-form-item prop="email">
          <u-input
            class="main-container__form__input"
            placeholder="请输入邮箱"
            placeholderStyle="font-family: 'PingFangSC-Medium';font-size: 28rpx;color: rgba(39, 40, 50, 0.4);letter-spacing: 0;font-weight: 500;"
            v-model="user.email"
          >
          </u-input>
        </u-form-item>
        <u-form-item prop="password">
          <u-input
            class="main-container__form__input"
            placeholder="请输入密码"
            placeholderStyle="font-family: 'PingFangSC-Medium';font-size: 28rpx;color: rgba(39, 40, 50, 0.4);letter-spacing: 0;font-weight: 500;"
            v-model="user.password"
            type="password"
          >
          </u-input>
        </u-form-item>
      </u-form>
      <u-button
        class="main-container__signup-btn"
        :class="btnClass"
        :hair-line="false"
        hover-class="none"
        shape="circle"
        :disabled="!canSignup"
        @tap="handleSignup"
        >注册</u-button
      >
    </view>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import { signup } from "@/request/index.js";
import store from "@/store/index.js";

export default {
  data() {
    return {
      user: {
        nickname: "",
        email: "",
        password: "",
      },
      rules: {
        email: [
          {
            pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            message: "请输入正确的邮箱",
            trigger: ["blur"],
          },
        ],
        password: [
          {
            min: 6,
            message: "密码最短为6位",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    canSignup() {
      //验证输入正确的邮箱 并且密码长度合格
      return (
        /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
          this.user.email
        ) && this.user.password.length >= 6
      );
    },
    btnClass() {
      return this.canSignup ? "active" : "";
    },
  },
  methods: {
    async handleSignup() {
      if (!this.canSignup) return;

      try {
        const res = await signup(
          this.user.email,
          this.user.password,
          this.user.nickname
        );
        store.commit("setAuth", res.data.token, res.data.user);
        uni.setStorageSync("token", res.data.token);
        this.$refs.uToast.show({
          message: "注册成功",
          type: "success",
          icon: false,
          duration: 500,
          complete() {
            uni.reLaunch({
              url: "/pages/index/index",
            });
          },
        });
      } catch (err) {
        console.log(err);
        if (err.statusCode === 400) {
          this.$refs.uToast.show({
            message: "邮箱重复",
            type: "error",
            icon: false,
          });
        }
      }
    },
    gotoLogin() {
      uni.reLaunch({
        url: "/pages/login/login",
      });
    },
  },
  components: {
    TheHeader,
  },
  onReady() {
    this.$refs.uForm.setRules(this.rules);
  },
};
</script>

<style scoped>
/* header */
.header-container {
  margin: 0 -32rpx;
}
.header-container__left-icon {
  font-size: 48rpx;
  font-weight: 600;
}

/* logo */
.logo {
  display: flex;
  justify-content: center;

  margin-top: 80rpx;
}

.logo__img {
  width: 192rpx;
}

/* main */
.main-container {
  width: 100%;
  box-sizing: border-box;
  padding: 0 60rpx;
  margin-top: 58rpx;
}

.main-container__title {
  font-family: "PingFangSC-Medium";
  font-size: 28px;
  color: #272832;
  letter-spacing: 0;
  font-weight: 500;
}

.main-container__form {
  margin-top: 68rpx;
}

.u-form-item:nth-child(n + 2) {
  margin-top: 78rpx;
}

.main-container__form__input {
  padding-bottom: 18rpx;
  border-bottom: 2rpx solid rgba(39, 40, 50, 0.2);
  border-radius: 0;
  padding: 0 !important;

  background-color: #fff;

  font-size: 36rpx;
  color: #272832;
}

/* btn */
.main-container__signup-btn {
  text-align: center;
  line-height: 96rpx;
  margin: 0 auto;
  margin-top: 118rpx;
  width: 520rpx;
  height: 96rpx;
  background: rgba(39, 40, 50, 0.2);
  border-radius: 48rpx;

  font-family: "PingFangSC-Medium";
  font-size: 32rpx;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: 500;
}
.main-container__signup-btn.active {
  background: #ffe431;
  color: #272832;
}

.main-container__form /deep/ .u-form-item .u-form-item__body {
  padding: 0;
}

.main-container__form /deep/ .u-form-item .u-form-item__body__right__message {
  margin-left: 0 !important;
  margin-top: 4rpx;
}
</style>
