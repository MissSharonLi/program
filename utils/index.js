import { api } from '@/api'
import store from '@/store'
const commonUtils = {
  toast() {
    uni.showToast({
      title: arguments[0] || '',
      icon: arguments[1] || 'none',
      duration: arguments[2] || 2000,
      image: arguments[3] || '',
      postion: arguments[4] || 'center'
    })
  },
  loading() {
    uni.showLoading({
      title: arguments[0] || '',
      mask: true
    })
  },
  hideLoading() {
    uni.hideLoading()
  },
  isPhoneAvailable(phone) {
    const myreg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (!myreg.test(phone)) {
      return false
    } else {
      return true
    }
  },
  login() {
    return new Promise((resolve, reject) => {
      const token = uni.getStorageSync('storage_token')
      if (token) {
        store.commit('setToken', token)
        resolve(true)
      } else {
        uni.getUserProfile({
          desc: '获取您的昵称、头像、地区及性別',
          success: (res) => {
            const params = {
              nickname: res.userInfo.nickName,
              headimgurl: res.userInfo.avatarUrl,
              sex: res.userInfo.gender,
              province: res.userInfo.province,
              city: res.userInfo.city,
              country: res.userInfo.country
            }
            wx.login({
              provider: 'weixin',
              onlyAuthorize: true,
              success: async (obj) => {
                params.code = obj.code
                const { code, data } = await api.getWxapplogin(params)
                if (code === 1 && data) {
                  store.commit('setToken', data.token)
                  uni.setStorageSync('storage_token', data.token)
                  uni.setStorageSync('storage_userInfo', JSON.stringify(data.userinfo))
                  resolve(true)
                }
              },
              fail: () => {
                commonUtils.toast('您已拒绝授权')
              }
            })
          },
          fail: () => {
            commonUtils.toast('您已拒绝授权')
          }
        })
      }
    })
  }
}
export default commonUtils
