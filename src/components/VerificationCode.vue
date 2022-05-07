<template>
  <div class="box" @click="getSrc" v-html="html"></div>
</template>
<script>
import http from "../utils/http";
export default {
  created() {
    this.getSrc();
  },
  data() {
    return {
      html: "",
    };
  },
  methods: {
    getSrc() {
      http.auth
        .getSrc()
        .then((e) => (this.html = e))
        .catch(console.log);
    },
  },
};
</script>
<style scoped>
.box {
  width: 100px;
  height: 44px;
  padding-right: 10px;
  padding-left: 10px;
  cursor: pointer;
}
</style>