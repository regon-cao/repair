<template>
    <view class="">
        <view class="imageContentWrap" v-for="item in list">
            <view class="contentWrap">
                <view class="tagTxtWrap">
                    <view>维修内容：</view>
                    <view class="tagTxt">{{ item.desc }}</view>
                </view>
                <view class="tagTxtWrap">
                    <view>维修位置：</view>
                    <view class="tagTxt">{{ item.location }}</view>
                </view>
                <view class="tagTxtWrap" v-if="item.status == 3">
                    <view>维修人员：</view>
                    <view class="tagTxt">{{ item.repair_user_info.name }}</view>
                </view>
                <view class="tagTxtWrap" v-if="item.status == 3">
                    <view>维修时间：</view>
                    <view class="tagTxt">{{ item.complete_time }}</view>
                </view>
                <view class="tagTxtWrap" v-if="item.status == 3">
                    <view>联系电话：</view>
                    <view class="imPrice">{{ item.repair_user_info.mobile }}</view>
                </view>
                <view class="tagTxtWrap">
                    <view>维修状态：</view>
                    <view class="imPrice status">{{ item.statusDesc }}</view>
                </view>
                <view class="tagTxtWrap" v-if="item.status == 4 && item.remark">
                    <view>维修备注：</view>
                    <view class="imPrice status">{{ item.remark }}</view>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
import api from '../../utils/api';
import { formatTime, handleStatus } from '../../utils/tool';
export default {
    data() {
        return {
            list: []
        };
    },
    onShow() {
        this.$Monitor && this.$Monitor.pageShow();
        this.getList();
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
        async getList() {
            let data = {
                open_id: getApp().globalData.userInfo.openid,
                type: 1,
                page_index: 1,
                page_size: 100
            };
            let r = await api.getOrderList(data);
            this.list = r.data.repair_order_list;
            this.list = this.list.map(item => {
                item.create_time = formatTime(item.create_time);
                item.statusDesc = handleStatus(item.status);
                item.handler_time = formatTime(item.handler_time);
                item.complete_time = formatTime(item.complete_time);
                return item;
            });
        }
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
    padding: 20rpx 35rpx;
    border-bottom: 8rpx solid #1babf2;
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
            font-weight: 700;
            font-size: 30rpx;
            line-height: 1.2;
            margin-bottom: 16rpx;
        }
        .imIntro {
            color: #7d7d7d;
        }
        .tagTxtWrap {
            display: flex;
            margin-bottom: 8rpx;
            align-items: center;
            .tagTxt {
                display: inline-block;
                padding: 6rpx 8rpx;
                font-size: 28rpx;
                margin-right: 10rpx;
                border-radius: 4rpx;
                color: #de6e0d;
                flex: 1;
            }
        }

        .imPrice {
            font-size: 26rpx;
            color: #de6e0d;
            line-height: 42rpx;
            display: block;
            &.status {
                font-weight: 600;
                font-size: 28rpx;
            }
        }
    }
}
</style>
