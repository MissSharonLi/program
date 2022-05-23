<template>
  <view>
    <view class="lottery__list">
      <view v-for="(item, index) in returnData" :key="index" class="lottery__item">
        <view class="left">
          <view class="images__content">
            <image class="img" :src="item.avatar"></image>
            <view class="text">{{ item.nickname }}</view>
          </view>
          <view class="ranking__content em">
            {{ item.tag_title }}
          </view>
          <view class="ranking__content">
            {{ item.item_name }}
          </view>
        </view>
        <view class="right">
          <text class="em">￥{{ item.item_price }}</text>
          <text class="time">{{ item.pay_time }}</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import { api } from '@/api'
export default {
  name: 'Lottery',
  data() {
    return {
      params: { id: '', page: 1 },
      returnData: []
    }
  },
  onLoad(options) {
    this.params.id = options.id
    this.getData()
  },
  onReachBottom() {
    this.params.page++
    this.getData()
  },
  methods: {
    async getData() {
      const { code, data } = await api.getBuyorderLogList({ ...this.params, token: this.token })
      if (code === 1 && data) {
        if (data.data.length > 0) {
          this.returnData = this.returnData.concat(data.data)
        } else {
          this.params.page > 1 ? this.$toast('没有更多数据了') : this.$toast('暂无数据')
          this.params.page > 1 ? this.params.page-- : (this.returnData = [])
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.lottery {
  &__list {
    padding: pxTorpx(10);
  }
  &__item {
    background-color: $white;
    height: pxTorpx(70);
    border-radius: pxTorpx(5);
    @include flex(center, space-between);
    margin-bottom: pxTorpx(10);
    padding: pxTorpx(12);
    .left {
      @include flex(center, '');
      .images__content {
        &.champion {
          position: relative;
          &::before {
            content: '';
            position: absolute;
            display: block;
            width: pxTorpx(20);
            height: pxTorpx(20);
            background: url('@/assets/images/crown.png') no-repeat;
            background-size: 100% 100%;
            left: 36rpx;
            top: -16rpx;
            transform: rotate(-45deg);
          }
        }
      }
      .img {
        width: pxTorpx(36);
        height: pxTorpx(36);
        border-radius: 50%;
        margin: 0 auto;
        display: block;
        margin-bottom: pxTorpx(5);
        z-index: 9;
        position: relative;
      }
      .text {
        font-family: 'PingFangSC';
        font-weight: 400;
        font-size: pxTorpx(12);
        color: rgb(16, 16, 16);
        min-width: 100px;
        max-width: 100px;
        text-align: center;
      }
      .ranking__content {
        font-family: 'PingFangSC';
        font-weight: 400;
        font-size: pxTorpx(14);
        color: rgb(16, 16, 16);
        .em {
          font-size: pxTorpx(16);
          color: rgba(248, 220, 76, 1);
        }
        &.em {
          color: red;
          margin-right: pxTorpx(10);
          font-weight: 700;
          font-size: pxTorpx(16);
          min-width: pxTorpx(48);
        }
      }
    }
    .right {
      font-family: 'PingFangSC';
      font-weight: 400;
      font-size: pxTorpx(14);
      color: rgb(16, 16, 16);
      text-align: right;
      .em {
        color: $uni-theme-color;
        margin-bottom: pxTorpx(20);
        display: block;
      }
      .time {
        color: #999;
        display: block;
        font-size: pxTorpx(12);
      }
    }
  }
}
</style>
