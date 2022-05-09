<template>
  <VanPopup :show="show" round custom-style="border-radius:10px;width:90%">
    <view class="tips">1jfdlf的恢复快的撒放假房贷啥法兰克防水防汗打散富士达客户</view>
    <view class="tips__footer" @click="show = false">关闭</view>
  </VanPopup>
</template>
<script>
import VanPopup from '@/wxcomponents/vant/popup/index'
export default {
  components: {
    VanPopup
  },
  data() {
    return {
      show: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.tips {
  text-align: justify;
  font-size: 24rpx;
  min-height: 200px;
  padding: 20px;
  line-height: 1.8;
  &__footer {
    width: pxTorpx(80);
    height: pxTorpx(30);
    line-height: pxTorpx(30);
    background-color: #f8dc4c;
    color: $white;
    text-align: center;
    margin: pxTorpx(10) auto;
    border-radius: pxTorpx(5);
  }
}
</style>
