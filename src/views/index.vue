<template>
  <div class="app-container">
    <van-row :gutter="40">
      <van-col :span="6" v-for="(item, key) in utils" :key="key">
        <van-card :title="item.title" @click="push(item)"> </van-card>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  created() {
    //getUtilList
  },
  data() {
    return {
      utils: [],
    };
  },
};
</script>