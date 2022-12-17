<template>
  <view>
    <the-header class="header-container">
      <template #header-right>
        <view class="header-container__signup-text" @tap="goSignup">注册</view>
      </template>
    </the-header>
    <view class="logo-container">
      <image
        src="../../static/images/logo.png"
        mode="widthFix"
        class="logo-container__img"
      ></image>
    </view>
    <view class="main-container">
      <view>
        <view class="main-container__title">登录</view>
        <view class="main-container__tip">您好，欢迎来到JohnChat</view>
      </view>
      <u-form :model="user" class="main-container__form" ref="uForm">
        <u-form-item prop="email">
          <u-input
            class="main-container__form__input main-container__form__email"
            v-model="user.email"
            placeholder="邮箱"
            placeholderStyle="font-family: 'PingFangSC-Medium';font-size: 28rpx;color: rgba(39, 40, 50, 0.4);letter-spacing: 0;font-weight: 500;"
          ></u-input>
        </u-form-item>
        <u-form-item prop="password">
          <u-input
            class="main-container__form__input main-container__form__password"
            v-model="user.password"
            type="password"
            placeholder="密码"
            placeholderStyle="font-family: 'PingFangSC-Medium';font-size: 28rpx;color: rgba(39, 40, 50, 0.4);letter-spacing: 0;font-weight: 500;"
          ></u-input>
        </u-form-item>
      </u-form>
      <u-button
        class="main-container__login-btn"
        :class="btnClass"
        :disabled="!canLogin"
        :hair-line="false"
        hover-class="none"
        shape="circle"
        @click="handleLogin"
        >登录</u-button
      >
    </view>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";

import store from "@/store/index.js";
import { login } from "@/request";

export default {
  data() {
    return {
      user: {
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
  methods: {
    goSignup() {
      uni.reLaunch({
        url: "/pages/signup/signup",
      });
    },
    async handleLogin() {
      if (!this.canLogin) return;
      try {
        const res = await login(this.user.email, this.user.password);
        store.commit("setAuth", res.data.token, res.data.user);
        uni.setStorageSync("token", res.data.token);
        this.$refs.uToast.show({
          message: "登录成功",
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
        console.log("err", err);
        if (err.statusCode === 400) {
          this.$refs.uToast.show({
            message: err.data.message,
            type: "error",
            icon: false,
          });
        }
      }
    },
  },
  computed: {
    canLogin() {
      return (
        /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
          this.user.email
        ) && this.user.password.length >= 6
      );
    },
    btnClass() {
      return this.canLogin ? "active" : "";
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
/* 头部 */
.header-container__signup-text {
  text-align: right;
}

/* logo */
.logo-container {
  display: flex;
  justify-content: center;

  margin-top: 80rpx;
}

.logo-container__img {
  width: 192rpx;
}

/* 主体内容 */
.main-container {
  padding: 0 58rpx;
  margin-top: 58rpx;
}

.main-container__title {
  font: 500 56rpx var(--medium-font);
  color: #272832;
}

.main-container__tip {
  margin-top: 14rpx;

  font: 40rpx var(--regular-font);

  color: rgba(39, 40, 50, 0.5);
}

.main-container__form {
  margin-top: 68rpx;

  font-family: var(--next-font);
}

.main-container__form__input {
  box-sizing: border-box;
  border-bottom: 2rpx solid rgba(39, 40, 50, 0.2);
  border-radius: 0;
  padding: 0 !important;

  background-color: #fff;

  font-size: 36rpx;
  color: #272832;
}

.main-container__form__password {
  margin-top: 78rpx;
}

.main-container__login-btn {
  width: 520rpx;
  height: 96rpx;
  margin: 0 auto;
  margin-top: 118rpx;
  border: none;

  text-align: center;
  line-height: 96rpx;
  font-size: 32rpx;
  letter-spacing: 0;
  font-weight: 500;

  background: rgba(39, 40, 50, 0.2);

  color: #fff;
  border-radius: 48rpx;
  font-family: "PingFangSC-Medium";
}

.active {
  color: #272832;

  background: var(--main-color-yellow);

  box-shadow: 0px 50rpx 32rpx -18px rgba(255, 228, 49, 0.4);
}

/* 清除padding */
.main-container__form /deep/ .u-form-item .u-form-item__body {
  padding: 0;
}

/* 修改字段提示 */
.main-container__form /deep/ .u-form-item .u-form-item__body__right__message {
  margin-left: 0 !important;
  margin-top: 4rpx;
}
</style>
