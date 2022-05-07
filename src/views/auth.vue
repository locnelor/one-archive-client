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
    const { pathname } = this.$router.history.current.query;
    // http.auth
    //   .getInfo()
    //   .then((e) => {
    //     this.$router.push({
    //       path: pathname,
    //     });
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     this.$router.push({
    //       path: "/login",
    //     });
    //   });
    this.$router.push({
      path: "login",
      query: { pathname },
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