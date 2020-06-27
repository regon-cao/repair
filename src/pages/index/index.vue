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
                <view class="avatarWrap" @click="toApply(0)">
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
                <view class="avatarWrap" @click="toApply(1)">
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
                <view class="avatarWrap" @click="toApply(9)">
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
                <view class="avatarWrap" @click="toApply(6)">
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
                <view class="avatarWrap" @click="toApply(12)">
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
                <view class="avatarWrap" @click="toApply(2)">
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
                <view class="avatarWrap" @click="toApply(4)">
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
                <view class="avatarWrap" @click="toApply(0)">
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
                <view class="tagTxtWrap">
                    <view>报修时间：</view>
                    <view class="tagTxt">{{ item.create_time }}</view>
                </view>
                <view class="tagTxtWrap">
                    <view>报修人员：</view>
                    <view class="tagTxt">{{ item.report_user_info.name }}</view>
                </view>
                <view class="tagTxtWrap">
                    <view>联系电话：</view>
                    <view class="imPrice">{{ item.report_user_info.mobile }}</view>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
import api from '../../utils/api';
import { formatTime } from '../../utils/tool';
export default {
    data() {
        return {
            options_0: [
                {
                    'src':
                        'https://jfile.cloudpnr.com/app-7349e98b-7bef-4b61-b278-48644bbc8058/42e1a1131dd0723650893e2252c71180repairman8881c614d78fdeb961216d08594552a9fb4.jpg'
                }
            ],
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
        toApply(type) {
            if (this.isRegistered()) {
                return uni.navigateTo({
                    url: '/pages/index/apply?type=' + type
                });
            }
            uni.navigateTo({
                url: '/pages/index/register'
            });
        },
        //校验是否填了角色
        isRegistered() {
            if (getApp().globalData.userInfo.type == '0') return false;
            return true;
        },
        async getList() {
            let data = {
                open_id: getApp().globalData.userInfo.openid,
                page_index: 1,
                page_size: 100
            };
            if (!this.isRegistered()) return;
            let r = await api.getPendList(data);
            this.list = r.data.repair_order_list;
            this.list = this.list.map(item => {
                item.create_time = formatTime(item.create_time);
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
        }
    }
}
</style>
