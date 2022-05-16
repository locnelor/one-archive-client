<template>
  <div id="app">
    <router-view v-if="show"></router-view>
  </div>
</template>
<script>
import FooterComponent from './components/Footer.vue'
import http from './utils/http'
export default {
  data() {
    return {
      show: false
    }
  },
  created() {
    http.auth
      .getInfo()
      .then(e => {
        this.$store.dispatch('setInfo', e)
      })
      .catch(console.log)
      .finally(() => {
        this.show = true
      })
  },
  components: {
    FooterComponent
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
