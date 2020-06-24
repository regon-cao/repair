<script>
import ajax, { setOpenid } from './utils/api';
export default {
    onLaunch: function() {
        console.log('App Launch');
    },
    onShow: function() {
        console.log('App Show');
        //获取用户信息
        wx.login({
            provider: 'weixin',
            success: async function(loginRes) {
                console.log(loginRes.code);
                let data = {};
                let res = await ajax.login(data);
                await setOpenid(res.openid);
                //获取用户信息
                let userInfo = await ajax.getUserInfo({ userId: res.openid });
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
