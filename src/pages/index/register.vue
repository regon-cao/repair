<template>
    <view class="page">
        <mx-form has-top class="form">
            <mx-field>
                <mx-label text="姓名" />
                <mx-input type="text" v-model="name" confirm-type="done" />
            </mx-field>
            <mx-field>
                <mx-label text="部门" />
                <mx-input type="text" v-model="department" confirm-type="done" />
            </mx-field>
            <mx-field>
                <mx-label text="手机号" />
                <mx-input type="number" v-model="phoneNumber" confirm-type="done" />
            </mx-field>
            <mx-field title="角色">
                <mx-picker :range="sourceList" placeholder="请选择角色" range-key="text" @change="PickerChange" :value="type" />
            </mx-field>
        </mx-form>
        <mx-button
            type="primary"
            value="提 交"
            block
            ext-class="form-submit"
            class="apply"
            open-type="getUserInfo"
            @getuserinfo="getUserInfo"
            @click="getR"
        />
    </view>
</template>
<script>
import ajax from '../../utils/api.js';
export default {
    data() {
        return {
            sourceList: [
                { text: '普通员工', value: 0 },
                { text: '行政人员', value: 1 },
                { text: '维修工', value: 2 },
                { text: 'IT人员', value: 3 }
            ],
            phoneNumber: '',
            type: 0,
            userInfo: {},
            name: '',
            department: ''
        };
    },
    onShow(option) {
        this.$Monitor && this.$Monitor.pageShow();
    },
    onHide() {
        this.$Monitor && this.$Monitor.pageHide();
    },
    onLoad(option) {
        this.userInfo = getApp().globalData.userInfo;
    },
    props: {},
    methods: {
        getR() {
            //获取模版消息权限
            wx.requestSubscribeMessage({
                tmplIds: [
                    'mBu9XCLfylXbDFsEamhFAmkdD4D4ySjHgLvrpRLrdOY',
                    'HdhfPcUb02LfvLhWIGkw-AI1GYEFyCD2UZfmlutZHmw',
                    'QPx3tkJl2neqpWap34JzXuYnztStSc3Kupli60petFc'
                ],
                success(res) {
                    console.log(res);
                    var str = '';
                    for (var k in res) {
                        str += k + ':' + res[k] + ';';
                    }
                    uni.showToast({
                        title: str,
                        duration: 10000,
                        icon: 'none'
                    });
                },
                fail(err) {
                    console.log(err);
                    var str = '';
                    for (var k in err) {
                        str += k + ':' + err[k] + ';';
                    }
                    uni.showToast({
                        title: str,
                        duration: 10000,
                        icon: 'none'
                    });
                }
            });
        },
        async getUserInfo(e) {
            if (!this.name) {
                return uni.showToast({
                    title: '请输入您的姓名',
                    duration: 1000,
                    icon: 'none'
                });
            }
            if (!this.department) {
                return uni.showToast({
                    title: '请输入您所属的部门',
                    duration: 1000,
                    icon: 'none'
                });
            }
            if (/^1[0-9]{11}$/.test(this.phoneNumber)) {
                return uni.showToast({
                    title: '手机号码格式不正确',
                    duration: 1000,
                    icon: 'none'
                });
            }
            let data = {
                'avatarUrl': e.detail.userInfo.avatarUrl,
                'department': this.department,
                'gender': e.detail.userInfo.gender,
                'mobile': this.phoneNumber,
                'name': this.name,
                'nickname': e.detail.userInfo.nickName,
                'openId': this.userInfo.openid,
                'type': this.type + 1
            };
            let res = await ajax.register(data);
            this.userInfo = { ...this.userInfo, ...res.data };
            let App = getApp();
            //获取用户信息
            App.globalData.userInfo = { ...App.globalData.userInfo, ...this.userInfo };
            uni.switchTab({
                url: '/pages/index/index'
            });
        },
        PickerChange(e) {
            this.type = +e;
        }
    }
};
</script>
<style scoped lang="scss">
.page {
    width: 100%;
    height: 100%;
    position: relative;
}
.form {
    margin-bottom: 100rpx;
}
.apply {
    position: absolute;
    bottom: 10rpx;
    width: 100%;
}
</style>
