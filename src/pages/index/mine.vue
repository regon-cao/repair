<template>
    <view class="">
        <view class="user-info-wrap">
            <image class="img" resize :src="avatarUrl" />
            <view class="txt-wrap">
                <text class="txt">{{ name }}</text>
                <text class="sub-txt">{{ department }}</text>
            </view>
        </view>
        <mx-cell icon="label" title="我的报修" iconColor="#cccfd7" rightIcon="cell-arrow" @click="mx_cell24" />
        <mx-cell icon="label" title="派发订单" iconColor="#cccfd7" rightIcon="cell-arrow" @click="mx_cell25" v-if="type == 2" />
        <mx-cell icon="label" title="我的维修" iconColor="#cccfd7" rightIcon="cell-arrow" @click="mx_cell26" v-if="type == 3 || type == 4" />
    </view>
</template>
<script>
export default {
    data() {
        return {
            avatarUrl: require('../../static/repairman.jpg'),
            department: '',
            name: '',
            type: 0
        };
    },
    onShow() {
        this.$Monitor && this.$Monitor.pageShow();
        let userInfo = getApp().globalData.userInfo;
        this.avatarUrl = userInfo.avatar_url;
        this.department = userInfo.department;
        this.name = userInfo.name || userInfo.nickName;
        this.type = userInfo.type;
        this.hasAccess = this.isRegistered();
    },
    onHide() {
        this.$Monitor && this.$Monitor.pageHide();
    },
    props: {},
    methods: {
        //校验是否填了角色
        isRegistered() {
            if (getApp().globalData.userInfo.type == '0') return false;
            return true;
        },
        mx_cell24() {
            if (!this.hasAccess) {
                return uni.navigateTo({
                    url: '/pages/index/register'
                });
            }
            uni.navigateTo({
                url: '/pages/index/myFix'
            });
        },
        mx_cell25() {
            uni.navigateTo({
                url: '/pages/index/dispatchOrder'
            });
        },
        mx_cell26() {
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
        font-size: 24rpx;
        margin-top: 24rpx;
        display: block;
    }
}
</style>
