<template>
  <view class="about__us">
    <rich-text :nodes="html"></rich-text>
  </view>
</template>
<script>
import { api } from '@/api'
export default {
  data() {
    return {
      html: ''
    }
  },
  onLoad() {
    this.getData()
  },
  methods: {
    async getData() {
      const { code, data } = await api.getAboutUsList()
      if (code === 1) this.html = data
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.about__us {
  font-size: pxTorpx(12);
  color: #666;
  line-height: 1.8;
  text-align: justify;
  padding: 30rpx;
  min-height: calc(100vh - 70rpx);
  margin-top: 10rpx;
  background-color: #fff;
}
</style>
