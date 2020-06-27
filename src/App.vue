<script>
import ajax from './utils/api';
export default {
    onLaunch: function() {
        console.log('App Launch');
    },
    onShow: function() {
        console.log('App Show');
        //获取code
        wx.login({
            provider: 'weixin',
            success: async function(loginRes) {
                let data = { code: loginRes.code };
                let res = await ajax.check(data);
                //  await ajax.setOpenid(res.data.open_id);
                let App = getApp();
                App.globalData.userInfo.openid = res.data.open_id;
                App.globalData.userInfo.type = res.data.type;
                //获取用户信息
                if (App.globalData.userInfo.type != '0') {
                    let d = await ajax.login({ openId: res.data.open_id });
                    App.globalData.userInfo = { ...App.globalData.userInfo, ...d.data };
                }
            }
        });
    },
    globalData: {
        userInfo: {}
    },
    onHide: function() {
        console.log('App Hide');
    }
};
</script>

<style>
/*每个页面公共css */
</style>
