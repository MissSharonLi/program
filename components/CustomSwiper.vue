<template>
  <view class="swiper__content" :class="{ banner: isBanner }">
    <Swiper
      class="swiper"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <Block v-for="(item, index) in dataSource" :key="index">
        <SwiperItem>
          <view class="swiper-item">
            <image class="swiper-image" :class="{ unique: isUnique }" :src="item"></image>
          </view>
        </SwiperItem>
      </Block>
    </Swiper>
  </view>
</template>
<script>
export default {
  props: {
    isBanner: {
      type: Boolean,
      default: false
    },
    dataSource: {
      type: Array,
      default: () => ['banner.jpeg', 'banner.jpeg']
    },
    isUnique: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      indicatorDots: false,
      autoplay: false,
      interval: 1000,
      duration: 500
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.swiper__content {
  height: pxTorpx(150);
  .swiper {
    margin-top: pxTorpx(5);
  }
  .swiper-item {
    height: pxTorpx(128);
    text-align: center;
    .swiper-image {
      height: pxTorpx(130);
      border-radius: pxTorpx(16);
      text-align: center;
      width: pxTorpx(350);
    }
  }
  &.banner {
    .swiper {
      margin-top: 0;
    }
    .swiper-item {
      height: pxTorpx(150);
      text-align: center;
      .swiper-image {
        width: pxTorpx(375);
        height: pxTorpx(150);
        border-radius: 0;
      }
    }
  }
}
</style>
