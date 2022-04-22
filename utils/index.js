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
  }
}
export default commonUtils
