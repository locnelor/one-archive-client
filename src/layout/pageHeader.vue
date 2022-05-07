<template>
  <header>
    <div class="container header">
      <van-row>
        <van-col :span="6"> logo </van-col>
        <van-col :span="12"> menus </van-col>
        <van-col :span="6"> user-button </van-col>
      </van-row>
    </div>
  </header>
</template>
<style scoped>
header {
  height: 64px;
  background: #fff;
  margin-bottom: 20px;
}
.header {
  height: 64px;
}
</style>