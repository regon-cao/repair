<template>
    <view
        class="imgWrap"
        :style="{
            paddingTop: paddingTop + 'rpx',
            paddingLeft: paddingLeft + 'rpx',
            paddingRight: paddingRight + 'rpx',
            paddingBottom: paddingBottom + 'rpx',
            alignItems: alignItems,
            justifyContent: justifyContent
        }"
    >
        <image class="img" :src="imgUrl" :mode="mode" :lazy-load="lazyLoad" :style="{ width: imgWidth + 'rpx', height: imgHeight + 'rpx' }" />
    </view>
</template>
<script>
export default {
    name: 'atom-img',
    props: {
        imgUrl: {
            default:
                'https://jarvisfile-test.oss-cn-shanghai.aliyuncs.com/app-a8187ae7-5671-4888-4321-2cc8c4d476ba/ADAMALL_PIC0089438397885628416.png?x-oss-process=image/resize,m_lfit,w_640/quality,q_50',
            entry: { type: 'string' }
        },
        mode: { default: 'scaleToFill', entry: { type: 'select', componentKey: 'mode' } },
        lazyLoad: { default: true, entry: { type: 'boolean' } },
        imgWidth: {
            default: '750',
            entry: { type: 'string' }
        },
        imgHeight: {
            default: '375',
            entry: { type: 'string' }
        },
        paddingTop: {
            default: '0',
            entry: { type: 'string' }
        },
        paddingLeft: {
            default: '0',
            entry: { type: 'string' }
        },
        paddingRight: {
            default: '0',
            entry: { type: 'string' }
        },
        paddingBottom: {
            default: '0',
            entry: { type: 'string' }
        },
        alignItems: { default: 'center', entry: { type: 'select', componentKey: 'alignItems' } },
        justifyContent: { default: 'center', entry: { type: 'select', componentKey: 'justifyContent' } }
    }
};
</script>

<style lang="scss" scoped>
.imgWrap {
    display: flex;
    flex-direction: column;
    .img {
        display: block;
    }
}
</style>
