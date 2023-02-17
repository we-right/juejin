<script setup>
import Category from '../components/Category.vue'

const navs = reactive([
    {
        name: '综合'
    },
    {
        name: '关注'
    },
    {
        name: '后端'
    },
    {
        name: '前端'
    },
    {
        name: 'Android'
    },
    {
        name: 'iOS'
    },
    {
        name: '人工智能'
    },
    {
        name: '开发工具'
    },
    {
        name: '代码人生'
    },
    {
        name: '阅读'
    }
])
</script>

<template>
  <div class="index">
    <Category :channels="navs" />
    <div class="main">首页</div>
  </div>
</template>

<style scoped lang="scss">
.index {
  position: relative;
  .main {
    position: absolute;
    top: 4em;
  }
}
</style>