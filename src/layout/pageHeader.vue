<template>
  <header>
    <div class="container header" style="width:100%">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo.jpg" style="width:61px;margin-left:60px;" title="一个专注于xxx的网站">
        </router-link>
      </div>
      <div class="menus">
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="height:64px">
          <el-menu-item>首页</el-menu-item>
        </el-menu>
      </div>
      <div class="user-button">
        <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="height:64px">
          <el-menu-item @click="gologin">
            <el-link icon="el-icon-user-solid">用户登录</el-link>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    gologin() {
      this.$router.push('/login')
    }
  }
}
</script>


<style lang='less' scoped>
header {
  height: 64px;
  background: #fff;
  margin-bottom: 20px;
}
.container header {
  height: 64px;
}
.header {
  height: 64px;
}
.logo {
  background: #545c64;
  width: 168px;
  height: 64px;
  float: left;
}
.menus {
  width: 1200px;
  margin: auto;
  height: 64px;
  float: left;
}
.user-button {
  width: 168px;
  height: 64px;
  background: #545c64;
  float: right;
}
</style>
