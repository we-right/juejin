<template>
  <div class="default-layout">
    <!-- 一些在所有页面共享的默认布局 -->
    <div class="top-tabs">
      <!-- <NuxtLink  v-for="(item, index) in tabs" :key="index" to="/others" target="_blank">{{ item }}</NuxtLink> -->
      <NuxtLink v-for="(item, index) in tabs" :key="index" to="/">{{
        item
      }}</NuxtLink>
    </div>
    <slot />
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
let tabs = ref(["首页", "沸点", "课程", "其他"]);
</script>
<style lang="less" scoped>
.default-layout {
  .top-tabs {
    width: 100%;
    height: 50px;
    background-color: red;
    display: flex;
  }
}
</style>