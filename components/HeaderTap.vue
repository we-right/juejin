<script setup lang="ts">
import { useTopTapStore } from '../stores/toptap'
const taps = reactive([
  {
    name: '首页',
    link: '/'
  },
  {
    name: '沸点',
    link: '/essay'
  },
  {
    name: '课程',
    link: '/lessons'
  },
  {
    name: '直播',
    link: '/live'
  },
  {
    name: '活动',
    link: '/actions'
  },
  {
    name: '商城',
    link: '/shop'
  },
  {
    name: 'App',
    link: '/apps'
  },
  {
    name: '插件',
    link: '/plugins'
  }
])

const toptap = useTopTapStore()
toptap.isShowTopTap = true
toptap.dropDown = false
// console.log('header-tap is show: ' + toptap.isShow)

onMounted(() => {
  toptap.windowWidth = document.documentElement.clientWidth
  // console.log('Width: ' + toptap.windowWidth)
  // console.log(toptap.windowWidth > 600 ? 'pc' : 'mobile')
})
</script>

<template>
  <header class="tap-wrapper">
    <div class="tap" :class="[toptap.isShowTopTap ? 'tap-show' : 'tap-hidden']">
      <div class="tap-left">
        <NuxtLink to="/" class="logo">
          <img src="/juejin.ico" alt="juejin" />
        </NuxtLink> 
        <ul class="taps-pc" v-if="toptap.windowWidth > 600">
          <li v-for="tap in taps" :key="tap.name" class="tap-item"><NuxtLink :to="tap.link">{{ tap.name }}</NuxtLink></li>
        </ul>
        <div v-else class="taps-mobile-wrapper">
          <button class="button-taps" @click="toptap.dropDown = toptap.dropDown ? false : true">{{ $route.name }}</button>
          <ul class="taps-mobile" v-if="toptap.dropDown">
            <li v-for="tap in taps" :key="tap.name" class="tap-item-mobile"><NuxtLink :to="tap.link">{{ tap.name }}</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.tap-wrapper {
  z-index: 1000;
  position: relative;
  height: 4em;
}
.tap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 4px #e2dfdf;
  transition: all .2s;

  &.tap-show {
    transform: translateY(0);
  }
  &.tap-hidden {
    transform: translateY(-100%);
  }
}
.tap-left {
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 auto;

  .logo {
    margin: 0 1em;
    
    img {
      display: block;
      width: 2em;
      height: 2em;
    }
  }
}
.taps-pc {
  display: flex;
  line-height: 4em;
  font-size: 0.9em;
  color: #000;

  .tap-item {
    padding: 0 1em;
    cursor: pointer;
  }
}
.taps-mobile-wrapper {
  position: relative;
  display: inline-block;
}
.taps-mobile {
  display: block;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 4px 4px 0 #e2dfdf;
  z-index: 1000;
  min-width: 9em;
  left: -4em;

  .tap-item-mobile {
    padding: 0.2em 0;
    cursor: pointer;
    text-align: center;
  }
}
.button-taps {
  background-color: #fff;
  color: #0c51c0;
  border: none;
  padding: 1em 0;
  font-size: 0.9em;
  cursor: pointer;
  min-width: 5em;
}
</style>