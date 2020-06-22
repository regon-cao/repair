<template>
    <view class="">
        <mx-form has-top class="form">
            <mx-field title="报修类别">
                <mx-picker :range="sourceList" placeholder="请选择报修类别" range-key="text" @change="PickerChange" :value="0" />
            </mx-field>
            <mx-field>
                <mx-label text="报修位置" />
                <mx-input type="text" placeholder="请输入报修的具体位置" />
            </mx-field>
            <mx-field>
                <mx-label text="报修内容" />
                <mx-textarea placeholder="请填写具体报修内容" />
            </mx-field>
            <mx-field>
                <mx-label text="报修人" />
                <mx-input type="text" />
            </mx-field>
            <mx-field>
                <mx-label text="联系电话" />
                <mx-input type="text" />
            </mx-field>
        </mx-form>
        <mx-button type="primary" value="提 交" block ext-class="form-submit" style="margin-top:100rpx" />
    </view>
</template>
<script>
export default {
    data() {
        return {
            sourceList: [
                { text: '照明', value: 1 },
                { text: '空调', value: 1 },
                { text: '电梯', value: 1 },
                { text: '清洁', value: 1 },
                { text: '电脑', value: 1 },
                { text: '电源', value: 1 },
                { text: '打印机', value: 1 },
                { text: '更多', value: 1 }
            ]
        };
    },
    onShow() {
        this.$Monitor && this.$Monitor.pageShow();
    },
    onHide() {
        this.$Monitor && this.$Monitor.pageHide();
    },
    props: {},
    methods: {
        mx_cell24() {},
        mx_cell25() {}
    }
};
</script>
<style scoped lang="scss">
.form {
    margin-bottom: 100rpx;
}
</style>
