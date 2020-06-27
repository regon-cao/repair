<template>
    <view class="">
        <mx-form has-top>
            <mx-field>
                <mx-label text="是否完成" />
                <mx-radio :options="checkBoxList1" @change="getChecked" :value="type" />
            </mx-field>
            <mx-field>
                <mx-label text="备注" />
                <mx-input type="text" placeholder="请输入您的备注" v-model="remark" />
            </mx-field>
        </mx-form>
        <mx-button type="primary" value="提 交" block ext-class="form-submit" class="apply" @click="submit" />
    </view>
</template>
<script>
import ajax from '../../utils/api';
export default {
    data() {
        return {
            checkBoxList1: [
                { label: '完成', value: 1 },
                { label: '暂缓处理', value: 2 }
            ],
            remark: '',
            type: ''
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
    },
    props: {},
    methods: {
        getChecked(e) {
            this.type = e.detail.value;
        },
        async submit() {
            let data = {
                'orderId': this.orderId,
                'remark': this.remark,
                'type': this.type,
                'openId': getApp().globalData.userInfo.openid
            };
            if (!data.type) {
                return uni.showToast({
                    title: '请选择完成状态',
                    duration: 2000,
                    icon: 'none',
                    success: function() {}
                });
            }

            let res = await ajax.repairComplete(data);
            if (res.return_code == 200) {
                uni.navigateBack({
                    delta: 1
                });
            } else {
                return uni.showToast({
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
