<template>
    <text
        class="layoutTxt"
        :decode="decode"
        :selectable="selectable"
        :space="space"
        :style="{
            paddingTop: paddingTop + 'rpx',
            paddingLeft: paddingLeft + 'rpx',
            paddingRight: paddingRight + 'rpx',
            paddingBottom: paddingBottom + 'rpx',
            textAlign: textAlign,
            fontSize: fontSize + 'rpx',
            lineHeight: lineHeight + 'rpx',
            fontWeight: fontWeight,
            color: color
        }"
    >
        {{ value }}
    </text>
</template>
<script>
export default {
    name: 'atom-layout-txt',
    props: {
        decode: { default: false, entry: { type: 'boolean' } },
        selectable: { default: false, entry: { type: 'boolean' } },
        space: { default: 'ensp', entry: { type: 'select', componentKey: 'space' } },
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
        textAlign: { default: 'left', entry: { type: 'select', componentKey: 'textAlign' } },
        value: {
            default: '文字',
            entry: { type: 'string' }
        },
        fontSize: {
            default: '20',
            entry: { type: 'string' }
        },
        lineHeight: {
            default: '32',
            entry: { type: 'string' }
        },
        fontWeight: { default: '400', entry: { type: 'select', componentKey: 'fontWeight' } },
        color: {
            default: '#000000',
            entry: { type: 'string' }
        }
    }
};
</script>
<style scoped>
.layoutTxt {
    display: block;
}
</style>
