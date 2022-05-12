<template>
  <div class="box">
    <van-loading></van-loading>
  </div>
</template>
<script>
import http from "../utils/http";
//自动登录页面，向后端发送登录请求，检查是否已登录状态
export default {
  created() {
    const { path = "/" } = this.$router.history.current.query;
    http.auth
      .getInfo()
      .then((e) => {
        this.$store.dispatch("setInfo", e);
        this.$router.push({
          path: ["/login", "/auth"].some((e) => e === path) ? "/" : path,
        });
      })
      .catch((e) => {
        this.$router.push({
          path: "/login",
        });
      });
  },
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>