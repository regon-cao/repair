import qs from 'qs';
// 默认的请求接口域名如：https://project-test.com/api
let BASEURI = '';
let openid = '';
export const setOpenid = id => {
    openid = id;
};
export default {
    // VUE_APP_API_HOST可在.env.development或.env.production中配置，可用于判断项目运行环境
    BASEURIDEV: process.env.VUE_APP_API_HOST || BASEURI, //开发环境
    BASEURIRES: process.env.VUE_APP_API_HOST || BASEURI, //生产环境
    es: {
        searchList: 'search'
    },
    /**
     * 封装请求（async await 封装uni.request）
     * method post/get
     * api    接口
     * params 参数
     * contentType
     * restful 是否restful规范
     */
    async apiCall(method, api, params, { contentType = '', restful = false } = {}) {
        try {
            if (method === 'post') {
                contentType = 'application/json';
            }

            if (!contentType) {
                contentType = 'application/json';
            }
            // 请求参数对象
            const requestObj = {
                method,
                header: {
                    'content-type': contentType,
                    'openid': openid
                }
            };
            // 根据不同的环境请求不同的接口域名
            const url = process.env.NODE_ENV === 'development' ? this.BASEURIDEV : this.BASEURIRES;
            // 是否为restful接口
            if (restful) {
                const { target, ...othParams } = params;
                requestObj.url = `${url}${api}/${target}${qs.stringify(othParams, { addQueryPrefix: true })}`;
            } else {
                requestObj.url = url + api;
                requestObj.data = params;
            }
            // 拿到接口请求返回的结果
            let [error, res] = await uni.request(requestObj);
            console.log('====>: apiCall -> res', res);
            console.log('====>: apiCall -> error', error);
            if (error && error.errMsg) {
                uni.showToast({
                    title: error.errMsg || '接口调用异常',
                    icon: 'none'
                });
                return;
            }
            const { statusCode, errMsg } = res;
            // 成功处理
            if (statusCode == '200') {
                return res.data;
            } else if (statusCode == 'xxx') {
                // 其他错误处理
                uni.showToast({
                    title: errMsg || '接口调用异常',
                    icon: 'none'
                });
                return;
            }
        } catch (error) {
            uni.showToast({
                title: errMsg || '接口调用异常',
                icon: 'none'
            });
            return;
        }
    },
    //获取openid
    async check(params) {
        return await this.apiCall('get', '/app/user/check', params);
    },
    //login
    async login(params) {
        return await this.apiCall('post', '/app/user/login', params);
    },
    //注册
    async register(params) {
        return await this.apiCall('post', '/app/user/register', params);
    },
    //报修申请
    async submitOrder(params) {
        return await this.apiCall('post', '/app/order/submit', params);
    },
    //订单列表查询
    async getOrderList(params) {
        return await this.apiCall('get', '/app/order/list', params);
    },
    //待维修列表查询
    async getPendList(params) {
        return await this.apiCall('get', '/app/order/pending/list', params);
    },
    //派发订单
    async delivery(params) {
        return await this.apiCall('post', '/app/order/delivery', params);
    },
    //获取维修人员列表
    async getRepair(params) {
        return await this.apiCall('get', '/app/user/repairUserList', params);
    },
    //维修人员确认
    async repairConfirm(params) {
        return await this.apiCall('post', '/app/order/confirm', params);
    },
    //维修人员点击完成
    async repairComplete(params) {
        return await this.apiCall('post', '/app/order/complete', params);
    }
};
