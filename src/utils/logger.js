let logger = null
// #ifdef H5

// 在条件内引入log，避免把相关的包编译到微信小程序，导致找不到document对象问题
let BrowerLogger = require('alife-logger')
logger = ((pid) => {
    try {
        return BrowerLogger.singleton({
            pid: pid,
            appType: "web",
            imgUrl: "https://arms-retcode.aliyuncs.com/r.png?",
            sendResource: true,
            enableLinkTrace: true,
            behavior: true,
            enableSPA: true
        })
    } catch (error) {
        console.log('init logger fail', error);
    }

})
// #endif
export default logger