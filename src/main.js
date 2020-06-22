import Vue from 'vue';
import App from './App';
import '@chinapnr/matrix-uni/lib/styles/index.scss';

import logger from './utils/logger';
//import ajax from './utils/api';
Vue.config.productionTip = false;
let pid = process.env.VUE_APP_PID;
console.log('====>: pid', pid);
// #ifdef MP-WEIXIN
const WXLogger = require('./utils/wxLogger');
const Monitor = WXLogger.init({
    pid: pid,
    region: 'cn'
});
Vue.prototype.$Monitor = Monitor;
//Vue.prototype.apiCall = ajax.apiCall;
// #endif
App.mpType = 'app';
// 只在h5平台开启监控
if (pid && logger) {
    logger(pid);
}
const app = new Vue({
    ...App
});
app.$mount();
