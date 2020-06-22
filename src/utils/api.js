import qs from 'qs';
// 默认的请求接口域名如：https://project-test.com/api
let BASEURI = '';
export default {
    // VUE_APP_API_HOST可在.env.development或.env.production中配置，可用于判断项目运行环境
    BASEURIDEV: process.env.VUE_APP_API_HOST || BASEURI, //开发环境
    BASEURIRES: process.env.VUE_APP_API_HOST || BASEURI, //生产环境
    es: {
        searchList: 'search'
    },
    /**
     * 具体的接口名称
     * 业务逻辑相关接口分类
     */
    // 订单
    order: {
        // 获取会员信息
        getOrderDetail: 'orderDetail'
    },
    // 商品列表类
    goodsList: {
        // 获取会员信息
        getGoodsList: 'queryGoodsList'
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
                contentType = 'application/x-www-form-urlencoded';
            }

            if (!contentType) {
                contentType = 'application/json';
            }
            // 请求参数对象
            const requestObj = {
                method,
                header: {
                    'content-type': contentType
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
    //登录
    async login(params){
        return await this.apiCall('post','/login',params);
    }
};
