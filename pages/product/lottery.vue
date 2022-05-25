<template>
  <view>
    <view class="lottery__list">
      <view v-for="(item, index) in list" :key="index" class="lottery__item">
        <view class="left">
          <view class="rank__num">
            <text class="em" :class="{ yellow: item.is_ticket === 0 }">{{ item.rank_num }}</text>
            <text class="time">{{ item.pay_time }}</text>
          </view>
          <view class="images__content" :class="{ speacial: item.is_ticket === 0 }">
            <view class="text">{{ item.nickname }}</view>
            <view class="text">{{ item.item_name }}</view>
          </view>
        </view>
        <view class="right">
          <view class="ranking__content em">
            {{ item.tag_title }}
          </view>
        </view>
      </view>
      <view v-for="(item, index) in returnData" :key="index" class="lottery__item">
        <view class="left">
          <view class="rank__num">
            <text class="em">{{ item.rank_num }}</text>
            <text class="time">{{ item.pay_time }}</text>
          </view>
          <view class="images__content">
            <view class="text">{{ item.nickname }}</view>
            <view class="text">{{ item.item_name }}</view>
          </view>
        </view>
        <view class="right">
          <view class="ranking__content em">
            {{ item.tag_title }}
          </view>
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
      list: [],
      params: { id: '', page: 1 },
      returnData: []
    }
  },
  onLoad(options) {
    this.params.id = options.id
    this.getData()
    this.query()
  },
  onReachBottom() {
    this.params.page++
    this.getData()
  },
  methods: {
    async query() {
      const { code, data } = await api.getBuyOrderwinlog({ ...this.params, token: this.token })
      if (code === 1) {
        this.list = data || data
      }
    },
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
      margin-right: pxTorpx(5);
      .rank__num {
        font-family: 'PingFangSC';
        font-weight: 700;
        font-size: pxTorpx(14);
        color: rgb(16, 16, 16);
        text-align: center;
        margin-right: pxTorpx(30);
        .em {
          color: $uni-theme-color;
          margin-bottom: pxTorpx(10);
          display: block;
          &.yellow {
            color: rgba(248, 220, 76, 1);
          }
        }
        .time {
          color: #101010;
          display: block;
          font-weight: 400;
          font-size: pxTorpx(12);
        }
      }
      .text {
        font-family: 'PingFangSC';
        font-weight: 700;
        font-size: pxTorpx(14);
        color: $uni-theme-color;
        min-width: 100px;
        max-width: 100px;
        text-align: left;
        &:first-child {
          margin-bottom: pxTorpx(10);
        }
      }
      .speacial {
        .text {
          color: rgba(248, 220, 76, 1);
        }
      }
    }
    .right {
      .ranking__content {
        font-family: 'PingFangSC';
        font-weight: 400;
        font-size: pxTorpx(14);
        color: rgb(16, 16, 16);
        text-align: right;
        .em {
          font-size: pxTorpx(16);
          color: rgba(248, 220, 76, 1);
        }
        &.em {
          color: red;
          font-weight: 700;
          font-size: pxTorpx(18);
          min-width: pxTorpx(48);
        }
      }
    }
  }
}
</style>
