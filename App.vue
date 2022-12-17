<script>

import store from "@/store/index.js";
export default {
  onLaunch: function () {
		if(!store.state.auth.login) {
			store.dispatch("checkToken");
		}
  },
	onLoad() {
		console.log('load')
	},
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide!");
  },
	
};
</script>

<style lang="scss">
@import "uview-ui/index.scss";
button::after {
  border: none;
}
</style>
