const mixins = {
  computed: {
    navBarHeight() {
      return this.$store.getters.getNavBarHeight
    },
    token() {
      return this.$store.state.token || uni.getStorageSync('storage_token')
    }
  }
}
export default mixins
