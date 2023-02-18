<script setup>
import { useTopTapStore } from '~~/stores/toptap';
import { NScrollbar } from 'naive-ui'

const toptap = useTopTapStore()

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
  <nav class="nav-wrapper">
    <div class="nav" :class="[toptap.isShowTopTap ? '' : 'nav-sticky']">
      <div class="nav-main">
        <ul class="nav-list" v-if="toptap.windowWidth > 1000">
          <li class="nav-item" v-for="nav in navs" :key="nav.id">{{ nav.name }}</li>
          <NuxtLink class="navs-manager">标签管理</NuxtLink>
        </ul>    
        <div v-else class="nav-list-mobile">
          <ul  class="scroll">
            <li class="nav-item-mobile" v-for="nav in navs" :key="nav.id">{{ nav.name }}</li>
          </ul>
        </div>
      </div> 
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav-wrapper {
  position: relative;
  height: 4em;
  z-index: 900;
}
.nav {
  position: fixed;
  left: 0;
  top: 4em;
  width: 100%;
  background: #fff;
  border-bottom: 2px solid #eee;
  transform: all 0.2s;
  &.nav-sticky {
      top: 0;
  }
}
.nav-main { 
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 auto;
}
.nav-list {
  display: flex;
  width: 80%;
  margin: 0px auto;
  font-size: 0.9em;
  line-height: 4em;

  .nav-item {
      padding: 0 1rem;
      cursor: pointer;
  }
  .navs-manager {
      position: absolute;
      right: 5%;
  } 
}
.nav-list-mobile {
  width: 100%;
  height: 100%;

  .scroll {
    display: flex;
    width: 100%;
    font-size: 0.9em;
    white-space: nowrap;
    overflow: auto;
    &::-webkit-scrollbar {
      height: 0.5em;
      width: 10%;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: rgb(185, 244, 244);
    }
  }
  .nav-item-mobile {
    width: 25%;
    height: 2em;
    display: inline-block;
    margin: 0.5em 1em;
  }
}
</style>