<template>
  <div class="wrapper">
    <page-header />
    <router-view />
  </div>
</template>
<script>
import pageHeader from "./pageHeader.vue";
export default {
  components: { pageHeader },
};
</script>