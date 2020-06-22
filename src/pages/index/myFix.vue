<template>
    <view class="">
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
                font-size: 14rpx;
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
