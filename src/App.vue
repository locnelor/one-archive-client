<template>
  <div id="app">
    <!-- <Login></Login> -->
    <!-- <div v-if="loading"></div>
    <div v-else>
      <router-view></router-view>
      <footer-component></footer-component>
    </div> -->
    <Register></Register>
  </div>
</template>
<script>
import FooterComponent from './components/Footer.vue'
// import Login from './views/login.vue'
// import Index from './views/index.vue'
import Register from './views/register.vue'

export default {
  created() {
    const { user } = this.$store.state
    //若处于未登录状态，跳转至登录组件
    // if (!user) {
    //   const href = window.location.href;
    //   const path = href.substring(href.lastIndexOf("#") + 1);
    //   this.$router.push({
    //     path: "/auth",
    //     query: { path },
    //   });
    // }
  },
  components: {
    FooterComponent,
    Register
    // Login
    // Index
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 100%;
  background: #fafafa;
}
.flex {
  display: flex;
}
.flex-center {
  display: flex;
  justify-content: center;
}
.app-container {
  padding: 20px;
}
.flex-items-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: 1200px;
  margin: auto;
}
.divider {
  margin-top: 10px;
  margin-bottom: 10px;
  height: 1px;
  background: #5c5c5c;
}
</style>
