import Vue from "vue";
import Vuex from "vuex";

import {
	token
} from "@/request";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		auth: {
			token: "",
			user: {},
			login: false
		},
		userLoaded: false
	},
	actions: {
		async checkToken(ctx) {
			try {
				const checkRes = await token();
				console.log(checkRes)
				const tokenCode = uni.getStorageSync("token");
				ctx.commit("setAuth", {
					token: tokenCode,
					user: checkRes.data.user,
					login: true
				});
			} catch (err) {
				//401
				ctx.commit("setAuth", {
					token: "",
					user: {},
					login: false
				});
				uni.reLaunch({
					url: "pages/login/login",
				});
			}
		},
	},
	mutations: {
		setAuth(state, {
			token,
			user,
			login
		}) {
			state.auth.token = token;
			state.auth.user = user;
			state.auth.login = login
			state.userLoaded = true
		},
	},
});

export default store;
