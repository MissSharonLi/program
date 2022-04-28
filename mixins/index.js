const mixins = {
  computed: {
    navBarHeight() {
      return this.$store.getters.getNavBarHeight
    },
    token() {
      return uni.getStorageSync('storage_token')
    }
  }
}
export default mixins
