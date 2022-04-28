import { POST } from '@/sdk/fetch'

// 获取banner
export const getBannerList = (params) => POST('index/getBannerList', params)

// 获取商品分类
export const getProductCat = (params) => POST('goods/getCat', params)

// 获取首页商品列表
export const getProductList = (params) => POST('goods/goodslist', params, null, true)

// 获取商品详情
export const getProductDetail = (params) => POST('goods/detail', params, null, true)

// 获取用户搜索记录
export const getSearchKeywords = (params) => POST('goods/getsearchkeywords', params, null, true)

// 用户登录/注册
export const getWxapplogin = (params) => POST('user/wxapplogin', params, null, true)

// 获取用户信息
export const getUseriInfo = (params) => POST('user/getuserinfo', params, null, true)
