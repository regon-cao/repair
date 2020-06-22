<template>
    <view class="">
        <view class="user-info-wrap">
            <image
                class="img"
                src="https://jarvisfile-test.oss-cn-shanghai.aliyuncs.com/app-a8187ae7-5671-4888-4321-2cc8c4d476ba/ADAMALL_PIC0089443175550205952.png?x-oss-process=image/resize,m_lfit,w_200"
            />
            <view class="txt-wrap">
                <text class="txt">风青杨</text>
                <text class="sub-txt">创新中心</text>
            </view>
        </view>
        <mx-cell icon="label" title="我的报修" iconColor="#cccfd7" rightIcon="cell-arrow" @click="mx_cell24" />
        <mx-cell icon="label" title="维修订单" iconColor="#cccfd7" rightIcon="cell-arrow" @click="mx_cell25" />
    </view>
</template>
<script>
export default {
    data() {
        return {};
    },
    onShow() {
        this.$Monitor && this.$Monitor.pageShow();
    },
    onHide() {
        this.$Monitor && this.$Monitor.pageHide();
    },
    props: {},
    methods: {
        mx_cell24() {
            uni.navigateTo({
                url: '/pages/index/myFix'
            });
        },
        mx_cell25() {
            uni.navigateTo({
                url: '/pages/index/fixOrder'
            });
        }
    }
};
</script>
<style scoped lang="scss">
.user-info-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 50rpx;
    .img {
        width: 110rpx;
        height: 110rpx;
        border-radius: 50%;
        border: 6rpx solid #ffffff;
        box-shadow: 0 10rpx 10rpx rgba(0, 0, 0, 0.3);
        margin-right: 30rpx;
    }
    .txt {
        font-size: 38rpx;
        display: block;
    }
    .sub-txt {
        font-size: 22rpx;
        margin-top: 24rpx;
        display: block;
    }
}
</style>
