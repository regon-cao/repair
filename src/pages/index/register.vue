<template>
    <view class="">
        <mx-form has-top class="form">
            <mx-field title="角色">
                <mx-picker :range="sourceList" placeholder="请选择角色" range-key="text" @change="PickerChange" :value="role" />
            </mx-field>
            <mx-field>
                <mx-label text="手机号" />
                <mx-input type="number" v-model="phoneNumber" confirm-type="done" />
            </mx-field>
        </mx-form>
        <mx-button type="primary" value="提 交" block ext-class="form-submit" class="apply" open-type="getUserInfo" @getuserinfo="getUserInfo" />
    </view>
</template>
<script>
import ajax from '../../utils/api.js';
export default {
    data() {
        return {
            sourceList: [
                { text: '普通员工', value: 0 },
                { text: 'IT人员', value: 1 },
                { text: '行政人员', value: 2 },
                { text: '维修工', value: 3 }
            ],
            phoneNumber: '',
            role: 0
        };
    },
    onShow(option) {
        this.$Monitor && this.$Monitor.pageShow();
    },
    onHide() {
        this.$Monitor && this.$Monitor.pageHide();
    },
    onLoad(option) {},
    props: {},
    methods: {
        async getUserInfo(e) {
            console.log(e.detail.userInfo, 'e');
            if (!this.phoneNumber) {
                return uni.showToast({
                    title: '请输入手机号码',
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
                nickName: e.detail.nickName,
                avataUrl: e.detail.avataUrl,
                phoneNumber: this.phoneNumber,
                role: this.role,
                openid: getApp().globalData.userInfo.openid
            };
            res = await ajax.register(data);
        },
        PickerChange(e) {
            console.log(e);
            this.role = e;
        }
    }
};
</script>
<style scoped lang="scss">
.form {
    margin-bottom: 100rpx;
}
.apply {
    position: absolute;
    bottom: 10rpx;
    width: 100%;
}
</style>
