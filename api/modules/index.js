import { POST } from '@/sdk/fetch'

// 获取地区列表
export const getAreaList = (params) => POST('index/test', params, null, true)

// 获取banner
export const getBannerList = (params) => POST('index/getBannerList', params, null, true)
