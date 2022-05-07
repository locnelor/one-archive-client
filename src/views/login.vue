<template>
  <div class="login flex-items-center">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <div class="subtitle">{{ subtitle }}</div>
      <van-divider dashed>账号密码登录</van-divider>
      <van-form @submit="submit">
        <van-cell-group inset>
          <van-field
            v-model="account"
            name="account"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div class="flex">
          <verification-code />
          <van-field
            v-model="code"
            name="code"
            placeholder="验证码"
            :rules="[{ required: true, message: '请填写验证码' }]"
          />
        </div>
        <div class="footer">
          <van-button block native-type="submit"> 登录 </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import VerificationCode from "../components/VerificationCode.vue";
import http from "../utils/http";
export default {
  data() {
    const title = process.env.VUE_APP_TITLE;
    const subtitle = process.env.VUE_APP_SUBTITLE;
    return {
      title,
      subtitle,
      account: "",
      password: "",
      code: "",
      loading: false,
    };
  },
  methods: {
    submit(values) {
      this.loading = true;
      http.auth
        .login(values)
        .then(() => {
          this.$router.push({
            path: "auth",
            query: this.$router.history.current.query.pathname || "/",
          });
        })
        .catch(console.log)
        .finally(() => {
          this.loading = false;
        });
    },
  },
  components: { VerificationCode },
};
</script>
<style scoped>
.container {
  background: #fff;
  width: 320px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.title {
  text-align: center;
  font-size: 32px;
  font-weight: 200;
  margin-top: 0;
  margin-bottom: 10px;
}
.login {
  width: 100%;
  height: 80%;
}
.subtitle {
  text-align: center;
  color: #505050;
}
.color {
  color: #000;
}
.footer {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
}
</style>