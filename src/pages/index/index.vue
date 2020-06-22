<template>
    <view class="">
        <mx-swiper :width="750" :height="375" autoplay :options="options_0" indicatorDots indicatorColor="#333" indicatorActiveColor="#0a68f4" />
        <atom-layout-txt
            value="报修类别"
            fontSize="28"
            lineHeight="32"
            color="#000000"
            textAlign="left"
            fontWeight="400"
            paddingTop="30"
            paddingLeft="30"
            :paddingRight="0"
            paddingBottom="20"
            space="ensp"
        />
        <view class="atom-layout">
            <view style="width:25%;margin-bottom:30rpx;">
                <view class="avatarWrap" @click="avatar_text2_0_0">
                    <mx-avatar
                        src="https://jfile.cloudpnr.com/app-7349e98b-7bef-4b61-b278-48644bbc8058/678749dd715fe7efb808a25b9875e1efrepairman888照明.png"
                        mode="aspectFill"
                        borderColor="#ffffff"
                        :radius="64"
                        :borderWidth="0"
                        extClass="avatar"
                        :width="60"
                        :height="60"
                    >
                    </mx-avatar>
                    <atom-layout-txt :fontSize="24" color="#000000" value="照明" class="text"> </atom-layout-txt>
                </view>
            </view>
            <view style="width:25%;margin-bottom:30rpx;">
                <view class="avatarWrap" @click="avatar_text2_1_0">
                    <mx-avatar
                        src="https://jfile.cloudpnr.com/app-7349e98b-7bef-4b61-b278-48644bbc8058/31299a11a387b669b2a2d09fdd6dd063repairman888空调.png"
                        mode="aspectFill"
                        borderColor="#ffffff"
                        :radius="64"
                        :borderWidth="0"
                        extClass="avatar"
                        :width="60"
                        :height="60"
                    >
                    </mx-avatar>
                    <atom-layout-txt :fontSize="24" color="#000000" value="空调" class="text"> </atom-layout-txt>
                </view>
            </view>
            <view style="width:25%;margin-bottom:30rpx;">
                <view class="avatarWrap" @click="avatar_text2_2_0">
                    <mx-avatar
                        src="https://jfile.cloudpnr.com/app-7349e98b-7bef-4b61-b278-48644bbc8058/380026fca373254fb1fb4d539d2d8bdarepairman888电梯.png"
                        mode="aspectFill"
                        borderColor="#ffffff"
                        :radius="64"
                        :borderWidth="0"
                        extClass="avatar"
                        :width="60"
                        :height="60"
                    >
                    </mx-avatar>
                    <atom-layout-txt :fontSize="24" color="#000000" value="电梯" class="text"> </atom-layout-txt>
                </view>
            </view>
            <view style="width:25%;margin-bottom:30rpx;">
                <view class="avatarWrap" @click="avatar_text2_3_0">
                    <mx-avatar
                        src="https://jfile.cloudpnr.com/app-7349e98b-7bef-4b61-b278-48644bbc8058/f81db47c9e0e6719845111139f8b34c6repairman888清洁用具.png"
                        mode="aspectFill"
                        borderColor="#ffffff"
                        :radius="64"
                        :borderWidth="0"
                        extClass="avatar"
                        :width="60"
                        :height="60"
                    >
                    </mx-avatar>
                    <atom-layout-txt :fontSize="24" color="#000000" value="清洁" class="text"> </atom-layout-txt>
                </view>
            </view>
            <view style="width:25%;margin-bottom:30rpx;">
                <view class="avatarWrap" @click="avatar_text2_4_0">
                    <mx-avatar
                        src="https://jfile.cloudpnr.com/app-7349e98b-7bef-4b61-b278-48644bbc8058/33abdfe6d978aa5154e87943c45adf1repairman888电脑.png"
                        mode="aspectFill"
                        borderColor="#ffffff"
                        :radius="64"
                        borderWidth="NaN"
                        extClass="avatar"
                        :width="60"
                        :height="60"
                    >
                    </mx-avatar>
                    <atom-layout-txt :fontSize="24" color="#000000" value="电脑" class="text"> </atom-layout-txt>
                </view>
            </view>
            <view style="width:25%;margin-bottom:30rpx;">
                <view class="avatarWrap" @click="avatar_text2_5_0">
                    <mx-avatar
                        src="https://jfile.cloudpnr.com/app-7349e98b-7bef-4b61-b278-48644bbc8058/b36d3e090f56caca6403b55390198b4repairman888电源，插头.png"
                        mode="aspectFill"
                        borderColor="#ffffff"
                        :radius="64"
                        :borderWidth="0"
                        extClass="avatar"
                        :width="60"
                        :height="60"
                    >
                    </mx-avatar>
                    <atom-layout-txt :fontSize="24" color="#000000" value="电源" class="text"> </atom-layout-txt>
                </view>
            </view>
            <view style="width:25%;margin-bottom:30rpx;">
                <view class="avatarWrap" @click="avatar_text2_6_0">
                    <mx-avatar
                        src="https://jfile.cloudpnr.com/app-7349e98b-7bef-4b61-b278-48644bbc8058/642c4028577534d4d77b9143b2069f79repairman888打印机.png"
                        mode="aspectFill"
                        borderColor="#ffffff"
                        :radius="64"
                        :borderWidth="0"
                        extClass="avatar"
                        :width="60"
                        :height="60"
                    >
                    </mx-avatar>
                    <atom-layout-txt :fontSize="24" color="#000000" value="打印机" class="text"> </atom-layout-txt>
                </view>
            </view>
            <view style="width:25%;margin-bottom:30rpx;">
                <view class="avatarWrap" @click="avatar_text2_7_0">
                    <mx-avatar
                        src="https://jfile.cloudpnr.com/app-7349e98b-7bef-4b61-b278-48644bbc8058/ebf1a3361f63249e80c3c4ac47105443repairman888更多.png"
                        mode="aspectFill"
                        borderColor="#ffffff"
                        :radius="64"
                        :borderWidth="0"
                        extClass="avatar"
                        :width="60"
                        :height="60"
                    >
                    </mx-avatar>
                    <atom-layout-txt :fontSize="24" color="#000000" value="更多" class="text"> </atom-layout-txt>
                </view>
            </view>
        </view>
        <atom-layout-txt
            value="等待维修"
            fontSize="28"
            lineHeight="32"
            color="#000000"
            textAlign="left"
            fontWeight="400"
            paddingTop="20"
            paddingLeft="30"
            :paddingRight="0"
            paddingBottom="20"
            space="ensp"
        />
        <view class="imageContentWrap" @click="image_content14_0">
            <image
                class="imImg"
                src="https://jarvisfile-test.oss-cn-shanghai.aliyuncs.com/app-a8187ae7-5671-4888-4321-2cc8c4d476ba/ADAMALL_PIC0089443175550205952.png?x-oss-process=image/resize,m_lfit,w_200"
            />
            <view class="contentWrap">
                <view class="imTop">
                    <view class="imTitle">冰箱损坏</view>
                    <view class="imIntro">普天4楼餐厅</view>
                </view>
                <view class="imBottom">
                    <view class="tagTxtWrap">
                        <view class="tagTxt">报修人：李项</view>
                    </view>
                    <view class="imPrice">联系电话：18667889099</view>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    data() {
        return {
            options_0: [
                {
                    'src':
                        'https://jfile.cloudpnr.com/app-7349e98b-7bef-4b61-b278-48644bbc8058/42e1a1131dd0723650893e2252c71180repairman8881c614d78fdeb961216d08594552a9fb4.jpg'
                }
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
        avatar_text2_0_0() {
            uni.navigateTo({
                url: '/pages/index/apply'
            });
        },
        avatar_text2_1_0() {},
        avatar_text2_2_0() {},
        avatar_text2_3_0() {},
        avatar_text2_4_0() {},
        avatar_text2_5_0() {},
        avatar_text2_6_0() {},
        avatar_text2_7_0() {},
        image_content14_0() {}
    }
};
</script>
<style scoped lang="scss">
.atom-vfor-layout,
.atom-layout {
    display: flex;
    flex-wrap: wrap;
    & > * {
        flex-grow: 0;
        flex-shrink: 0;
    }
}
.avatarWrap {
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar {
        margin-bottom: 15rpx;
        box-shadow: none;
    }
    .text {
        font-size: 26rpx;
        color: #333;
        margin-top: 10rpx;
    }
}
.imageContentWrap {
    display: flex;
    padding: 20rpx 20rpx;
    .imImg {
        width: 280rpx;
        height: 210rpx;
        margin-right: 20rpx;
        overflow: hidden;
        border-radius: 8rpx;
    }
    .contentWrap {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .imTop {
            flex: 4;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
        .imBottom {
            flex: 3;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .imTitle {
            font-weight: 400;
            font-size: 28rpx;
            line-height: 1.2;
            margin-bottom: 10rpx;
        }
        .imIntro {
            color: #7d7d7d;
        }
        .tagTxtWrap {
            .tagTxt {
                display: inline-block;
                padding: 6rpx 8rpx;
                font-size: 28rpx;
                margin-right: 10rpx;
                border-radius: 4rpx;
                background-color: #fde7d9;
                color: #de6e0d;
            }
        }

        .imPrice {
            font-size: 26rpx;
            color: #de6e0d;
            line-height: 42rpx;
            display: block;
        }
    }
}
</style>
