<template>
  <div class="login flex-items-center">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <div class="subtitle">{{ subtitle }}</div>
      <el-divider>账号密码登录</el-divider>
      <el-form @submit="submit" status-icon label-width="100px" class="demo-ruleForm">
        <el-form-item label="邮箱">
          <el-input v-model="account" type="email" autocomplete="off" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input v-model="password" type="password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <div style="margin-bottom:10px">
          <verification-code style="float:left" />
          <el-input v-model="code" placeholder="请输入验证码" style="width:182px;margin-left:10px"></el-input>
        </div>
        <div class="footer">
          <el-button type="primary" style="width:100px;margin-left:90px" block @click="submit">登录</el-button>
        </div>
      </el-form>
      <router-link to="/register" class="signIn">没有账号?注册一个</router-link>
    </div>
  </div>
</template>
<script>
import VerificationCode from '../components/VerificationCode.vue'
import http from '../utils/http'

export default {
  data() {
    const title = process.env.VUE_APP_TITLE
    const subtitle = process.env.VUE_APP_SUBTITLE
    return {
      title,
      subtitle,
      account: '',
      password: '',
      code: '',
      loading: false
    }
  },
  methods: {
    submit() {
      this.loading = true
      http.auth
        .login(this.account, this.password, this.code)
        .then(() => {
          this.$router.push({
            path: '/',
            query: this.$router.history.current.query.pathname || '/'
          })
        })
        .catch(console.log)
        .finally(() => {
          this.loading = false
        })
    }
  },
  components: { VerificationCode }
}
</script>
<style lang='less' scoped>
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
  margin-top: 40px;
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
.signIn {
  font-size: 12px;
  margin-left: 210px;
  padding-top: 10px;
}
.getSrc {
  margin-left: 33px;
}
/deep/.el-form-item__label {
  padding: 0 40px 0 0;
}
</style>
