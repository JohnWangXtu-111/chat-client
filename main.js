import App from './App';

import '@/static/style/theme.css';

import Vue from 'vue';
import uView from 'uview-ui';
import store from '@/store';

import io from '@hyoga/uni-socket.io';
const socket = io('http://localhost:3000', {
  transports: ['websocket', 'polling'],
  timeout: 5000,
});

Vue.prototype.socket = socket;
socket.on('connect', () => {
  console.log('connet,', socket);
});

Vue.use(uView);
Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue({
  ...App,
});
app.$mount();
