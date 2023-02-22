<script setup>
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
@import url("//at.alicdn.com/t/c/font_3906421_ggfmrjunfcv.css");
@media screen and (max-width: 500px) {
  html {
    font-size: 10px;
  }
}
@media screen and (max-width: 960px) {
  html {
    font-size: 14px;
  }
}
@media screen and (max-width: 1440px) {
  html {
    font-size: 16rpx;
  }
}
html,
body {
  /* 增加锚点跳转过度效果 */
  scroll-behavior: smooth;
}
</style>
