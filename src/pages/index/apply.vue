<template>
    <view class="">
        <mx-form has-top class="form">
            <mx-field title="报修类别">
                <mx-picker :range="sourceList" placeholder="请选择报修类别" range-key="text" @change="PickerChange" :value="type" />
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
        <mx-button type="primary" value="提 交" block ext-class="form-submit" class="apply" />
    </view>
</template>
<script>
export default {
    data() {
        return {
            sourceList: [
                { text: '照明', value: 1 },
                { text: '空调', value: 2 },
                { text: '电梯', value: 3 },
                { text: '清洁', value: 4 },
                { text: '电脑', value: 5 },
                { text: '电源', value: 6 },
                { text: '打印机', value: 7 },
                { text: '多媒体设备', value: 8 },
                { text: '公共清洁', value: 9 },
                { text: '管道', value: 10 },
                { text: '门禁', value: 11 },
                { text: '电梯', value: 12 },
                { text: '办公家具', value: 13 },
                { text: '景观设施', value: 14 },
                { text: '电脑网络', value: 15 }
            ],
            type: 0
        };
    },
    onShow(option) {
        this.$Monitor && this.$Monitor.pageShow();
    },
    onHide() {
        this.$Monitor && this.$Monitor.pageHide();
    },
    onLoad(option) {
        this.type = +option.type;
        console.log(this.type);
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
.apply {
    position: absolute;
    bottom: 10rpx;
    width: 100%;
}
</style>
