<template>
    <view class="">
        <mx-form has-top class="form">
            <view style="display:flex;padding:20rpx 30rpx;">
                <view style="width:180rpx;font-size:30rpx;line-height:50rpx;">报修类别</view>
                <picker :range="sourceList" placeholder="请选择报修类别" @change="PickerChange" :value="category" style="width:100%;">
                    <view style="display:flex;justify-content:space-between;align-items:center;">
                        <view style="font-size:30rpx;line-height:50rpx;">{{ sourceList[category] }}</view>
                        <view class="right-arrow"></view>
                    </view>
                </picker>
            </view>
            <mx-field>
                <mx-label text="报修位置" />
                <mx-input type="text" placeholder="请输入报修的具体位置" v-model="location" />
            </mx-field>
            <mx-field>
                <mx-label text="报修内容" />
                <mx-textarea placeholder="请填写具体报修内容" v-model="desc" />
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
            sourceList: [
                '照明',
                '空调',
                '电源',
                '直饮机',
                '打印机',
                '多媒体设备',
                '公共清洁',
                '管道',
                '门禁',
                '电梯',
                '办公家具',
                '景观设施',
                '电脑',
                '电话',
                '网络',
                '其他'
            ],
            category: 0,
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
        this.category = +option.type;
    },
    props: {},
    methods: {
        PickerChange(e) {
            console.log(e);
            this.category = +e.detail.value;
        },
        async submit() {
            let data = {
                'category': this.category + 1,
                'desc': this.desc,
                'location': this.location,
                'openId': getApp().globalData.userInfo.openid
            };

            let res = await ajax.submitOrder(data);
            uni.showToast({
                title: '报修成功',
                duration: 2000,
                icon: 'none',
                success: function() {
                    uni.switchTab({
                        url: '/pages/index/index'
                    });
                }
            });
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
