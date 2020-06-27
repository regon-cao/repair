<template>
    <view class="">
        <mx-form has-top class="form">
            <view style="display:flex;padding:20rpx 30rpx;">
                <view style="width:240rpx;font-size:30rpx;line-height:50rpx;">选择维修人员</view>
                <picker :range="sourceList" placeholder="请选择维修人员" @change="PickerChange" :value="index" style="width:100%;">
                    <view style="display:flex;justify-content:space-between;align-items:center;">
                        <view style="font-size:30rpx;line-height:50rpx;">{{ sourceList[index] }}</view>
                        <view class="right-arrow"></view>
                    </view>
                </picker>
            </view>
        </mx-form>
        <mx-button type="primary" value="确认派单" block ext-class="form-submit" class="apply" @click="submit" />
    </view>
</template>
<script>
import api from '../../utils/api';
export default {
    data() {
        return {
            sourceList: [],
            index: 0,
            repairUserId: '',
            desc: ''
        };
    },
    onShow(option) {
        this.$Monitor && this.$Monitor.pageShow();
    },
    onHide() {
        this.$Monitor && this.$Monitor.pageHide();
    },
    onLoad(option) {
        this.orderId = option.orderId;
        this.getRepairList();
    },
    props: {},
    methods: {
        async getRepairList() {
            let data = { openId: getApp().globalData.userInfo.openid };
            let r = await api.getRepair(data);
            let a = r.data || [];
            this.repairList = a;
            let t = a.map(item => {
                return item.name;
            });
            this.sourceList = t;
        },
        PickerChange(e) {
            this.repairUserId = e;
        },

        async submit() {
            if (!this.sourceList[this.index]) {
                return uni.showToast({
                    title: '请选择维修人员',
                    duration: 2000,
                    icon: 'none',
                    success: function() {}
                });
            }
            let data = {
                'openId': getApp().globalData.userInfo.openid,
                'orderId': this.orderId,
                'repairUserId': this.repairList[this.index].user_id
            };

            let res = await api.delivery(data);
            if (res.return_code == 200) {
                uni.showToast({
                    title: '指派成功',
                    duration: 2000,
                    icon: 'none',
                    success: function() {}
                });
                setTimeout(() => {
                    uni.navigateBack({
                        delta: 1
                    });
                }, 2000);
            } else {
                uni.showToast({
                    title: res.message,
                    duration: 2000,
                    icon: 'none',
                    success: function() {}
                });
            }
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
.right-arrow {
    width: 18rpx;
    height: 18rpx;
    margin-top: 2px;
    border-top: 1px solid #333;
    border-right: 1px solid #333;
    transform: rotate(45deg);
}
</style>
