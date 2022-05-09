<template>
  <VanPopup :show="show" round custom-style="border-radius:10px;width:90%">
    <view class="address__wrapper">
      <view class="address__list">
        <view
          v-for="(item, index) in returnData"
          :key="index"
          class="address__item"
          :class="{ default: item.is_default === 1 }"
          @click="handleToClick(item)"
        >
          <view class="address__title">
            <text class="text">{{ item.name }}</text>
            <text class="text">{{ item.mobile }}</text>
          </view>
          <view class="address__detail">
            <text>{{ item.province_name }}{{ item.city_name }}{{ item.area_name }}</text>
          </view>
        </view>
      </view>
    </view>
  </VanPopup>
</template>
<script>
import { api } from '@/api'
import VanPopup from '@/wxcomponents/vant/popup/index'
export default {
  name: 'RankModule',
  components: {
    VanPopup
  },
  data() {
    return {
      show: false,
      order_id: null,
      returnData: []
    }
  },
  methods: {
    handleClose(val) {
      this.show = false
    },
    handleToEdit(item) {
      uni.navigateTo({ url: '/pages/personal/setAddress?data=' + JSON.stringify(item) })
    },
    async handleToClick(item) {
      const { id: address_id } = item
      const { code } = await api.handleTakeGoods({
        token: this.token,
        order_id: this.order_id,
        address_id
      })
      if (code === 1) {
        this.handleClose()
        this.$parent.refresh()
      }
    },
    network() {
      return {
        runApiToGetAddressList: async () => {
          const { code, data } = await api.getAddressList({ token: this.token })
          if (code === 1) {
            this.returnData = data || []
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index.scss';
.address {
  &__list {
    margin-top: pxTorpx(1);
  }
  &__item {
    background-color: $white;
    padding: pxTorpx(20);
    margin-bottom: pxTorpx(1);
    &.default {
      position: relative;
      padding-left: pxTorpx(40);
      &::before {
        content: '';
        display: block;
        position: absolute;
        width: pxTorpx(17);
        height: pxTorpx(17);
        background: url('@/assets/images/select.png') no-repeat;
        background-size: 100% 100%;
        left: pxTorpx(12);
        top: pxTorpx(30);
      }
      .address__title {
        @include flex(center, '');
        .text {
          &:last-child {
            @include flex(center, '');
            &::after {
              content: '默认';
              display: block;
              width: pxTorpx(34);
              height: pxTorpx(18);
              line-height: pxTorpx(18);
              color: $white;
              text-align: center;
              margin-left: pxTorpx(10);
              background-color: $uni-theme-color;
              font-size: pxTorpx(12);
              font-weight: lighter;
            }
          }
        }
      }
    }
  }
  &__title {
    font-family: $SourceHanSansSC;
    font-weight: 700;
    font-size: 14px;
    color: rgb(16, 16, 16);
    margin-bottom: pxTorpx(10);
    .text {
      &:first-child {
        margin-right: pxTorpx(20);
      }
    }
  }
  &__detail {
    font-family: $SourceHanSansSC;
    font-weight: 400;
    font-size: pxTorpx(14);
    color: rgba(144, 144, 144, 1);
    @include flex(center, space-between);
    .img {
      width: pxTorpx(21);
      height: pxTorpx(21);
    }
  }
  &__footer {
    height: pxTorpx(40);
    background-color: $uni-theme-color;
    border: 1px solid $uni-theme-color;
    color: rgb(255, 255, 255);
    border-radius: pxTorpx(100);
    font-size: pxTorpx(14);
    text-align: center;
    line-height: pxTorpx(40);
    position: fixed;
    bottom: pxTorpx(20);
    left: pxTorpx(20);
    width: calc(100% - 80rpx);
  }
}
</style>
