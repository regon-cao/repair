<template>
    <view class="blank" :style="{ height: value + 'rpx' }" />
</template>
<script>
export default {
    name: 'atom-blank',
    props: {
        value: {
            default: '50',
            entry: { type: 'string' }
        }
    }
};
</script>
<style lang="scss" scoped>
.blank {
    background-size: 50rpx;
    opacity: 0.09;
}
</style>
