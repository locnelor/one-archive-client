<template>
  <div class="wrapper">
    <page-header />
    <router-view :key="key" />
  </div>
</template>
<script>
import pageHeader from "./pageHeader.vue";
export default {
  created() {
    console.log(1);
  },
  components: { pageHeader },
};
</script>