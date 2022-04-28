<template>
  <view class="product__list__content">
    <view
      v-for="(item, index) in dataSource"
      :key="index"
      class="list__item"
      @click="handleClick(item)"
    >
      <image class="list__item__image" :src="item.goods_image"></image>
      <text class="label">{{ item.stock_box_num }}/{{ item.box_num }}箱</text>
      <view class="title">{{ item.goods_name }}</view>
      <view class="sub__title">{{ item.goods_price }}元/张</view>
    </view>
    <view v-if="dataSource.length === 0" class="empty">暂无数据哦~</view>
  </view>
</template>
<script>
export default {
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick(item) {
      uni.navigateTo({
        url: '/pages/product/detail?id=' + item.id
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.product__list__content {
  @include flex(center, space-between, wrap);
  padding: pxTorpx(5) pxTorpx(15);
  .list__item {
    width: calc(50% - 20rpx);
    min-height: pxTorpx(40);
    margin-bottom: pxTorpx(10);
    position: relative;
    &__image {
      width: pxTorpx(160);
      height: pxTorpx(165);
      border-radius: pxTorpx(26);
    }
    .label {
      position: absolute;
      top: 0;
      left: pxTorpx(15);
      font-family: $FZYuan;
      font-weight: 700;
      font-size: pxTorpx(12);
      color: $white;
      letter-spacing: 1px;
      padding: pxTorpx(5);
    }
    .title {
      font-family: $FZYuan;
      font-weight: 700;
      font-size: pxTorpx(14);
      color: $uni-text-color;
      letter-spacing: 1px;
      margin-top: pxTorpx(5);
    }
    .sub__title {
      font-family: $FZYuan;
      font-weight: 700;
      font-size: 16px;
      color: $tips-color;
      margin-top: pxTorpx(5);
    }
  }
  .empty {
    color: #999;
    font-size: 14px;
    text-align: center;
    margin: 20px auto;
  }
}
</style>
