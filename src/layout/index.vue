<template>
  <div class="wrapper">
    <div>
      <page-header />
    </div>
    <router-view />
  </div>
</template>
<script>
import pageHeader from './pageHeader.vue'
export default {
  created() {
    this.inspect(this.$router.history.current.meta)
  },
  methods: {
    //检查是否符合权限
    inspect(meta) {
      const user = this.$store.state.user
      console.log(meta)
      return true
    }
  },
  //路由改变时触发，通过meta判断是否符合权限
  beforeRouteUpdate(to, form, next) {
    if (this.inspect(to.meta)) next()
    //else
  },
  components: { pageHeader }
}
</script>
