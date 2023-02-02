<template>
  <div class="index">
    <NuxtLayout name="index-article-label"> </NuxtLayout>
    <div class="main">
      <div class="main-article">
        <article-card v-for="i in 10" :key="i"></article-card>
      </div>
      <div class="main-other">作者，广告等
        <!-- 建议组件形式 -->
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
.index {
  margin: 20px auto 0;
  width: 1200px;
}
.main {
  display: flex;
  justify-content: space-between;
}
</style>