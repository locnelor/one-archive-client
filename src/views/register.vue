<template>
  <div class="box">
    <div>
      <img
        src="	https://uap.hd-u.com/assets/images/banner1.png"
        style="width: 100%; margin-top: 6px"
      />
    </div>
    <div class="word">
      -------------------------注册-------------------------
    </div>
    <el-form status-icon label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名">
        <el-input
          v-model="user_name"
          type="name"
          autocomplete="off"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input
          v-model="user_email"
          type="email"
          autocomplete="off"
          placeholder="请输入邮箱"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input
          v-model="email_code"
          type="code"
          autocomplete="off"
          placeholder="请输入验证码"
          style="width: 350px"
        ></el-input>
        <el-button type="primary" @click="getSrc">获取验证码</el-button>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="password"
          type="password"
          autocomplete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input
          v-model="confirmPassword"
          type="password"
          autocomplete="off"
          placeholder="请输入确认密码"
        ></el-input>
      </el-form-item>
    </el-form>
    <div style="width: 150px; margin: 0 auto">
      <el-row>
        <el-button :loading="loading" type="primary" @click="toRegister"
          >注册</el-button
        >
        <el-button type="info" @click="reset">重置</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import http from "../utils/http";

export default {
  data() {
    return {
      user_name: "",
      user_email: "",
      email_code: "",
      password: "",
      confirmPassword: "",
      loading: false,
    };
  },
  methods: {
    getSrc() {
      http.auth.getEmail(this.user_email);
    },
    reset() {
      this.user_name = "";
      this.user_email = "";
      this.email_code = "";
      this.password = "";
      this.confirmPassword = "";
    },
    toRegister() {
      this.loading = true;
      http.auth
        .toRegister(
          this.user_name,
          this.user_email,
          this.email_code,
          this.password,
          this.confirmPassword
        )
        .then(() => {
          window.location.href = "/";
        })
        .catch(console.log)
        .finally(() => {
          this.loading = false;
        });
    },
  },
  components: {
    http,
  },
};
</script>

<style lang='less' scoped>
.box {
  height: 550px;
  width: 600px;
  border: 1px solid;
  border-radius: 10px;
  margin: auto;
  margin-top: 50px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.word {
  font-size: 15px;
  text-align: center;
  color: #9c9e9f;
  margin-top: 10px;
  margin-bottom: 10px;
}
/deep/ .el-input__inner {
  width: 92%;
}
</style>
