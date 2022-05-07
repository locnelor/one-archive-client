<template>
  <div class="box">
    <img :src="src" @click="getSrc" />
  </div>
</template>
<script>
import http from "../utils/http";
export default {
  created() {
    this.getSrc();
  },
  data() {
    return {
      src: "",
    };
  },
  methods: {
    getSrc() {
      http.auth
        .getSrc()
        .then((e) => (this.src = e))
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
}
.box .img {
  width: 100%;
  cursor: pointer;
}
</style>