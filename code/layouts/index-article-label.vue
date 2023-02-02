<template>
  <div class="index-article-label">
    <!-- Some *custom* layout -->
    <div class="labels">
        <NuxtLink to="/" v-for="(item,index) in tabs">{{ item }}</NuxtLink>
    </div>
    <slot />
  </div>
</template>

<script setup>
import { ref,reactive } from "vue"
let tabs = ref(['综合','关注','后端','前端'])
</script>
<style scoped lang='less'>
.labels {
    height: 50px;
    background-color: yellow;
    display: flex;
}
</style>