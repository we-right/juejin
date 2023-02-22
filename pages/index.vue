<script setup lang="ts">
import Category from '../components/Category.vue'
import ArticleList from '../components/ArticleList.vue'
import AutherRank from '../components/AutherRank.vue'
import { useIndexStore } from '../stores/index'
import { useTopTapStore } from '~~/stores/toptap'

const index = useIndexStore()
const toptap = useTopTapStore()

const value = ref('')
const navs = reactive([
    {
        id: 1,
        name: '推荐',
        type: 100
    },
    {
        id: 2,
        name: '最新',
        type: 200
    },
    {
        id: 3,
        name: '热榜',
        type: 3,
        types: [
            {
                value: '3天内',
                label: '3天内',
                type: 3
            },
            {
                value: '7天内',
                label: '7天内',
                type: 7,
            },
            {
                value: '30天内',
                label: '30天内',
                type: 30,
            },
            {
                value: '全部',
                label: '全部',
                type: 0
            }
        ]
    }
])

onMounted(() => {
  toptap.windowWidth = document.documentElement.clientWidth
})
</script>

<template>
  <div class="index">
    <Category />
      <div class="index-main-pc" v-if="toptap.windowWidth >= 1000">
        <div class="main-header">
          <ul class="main-navs">
            <li class="main-nav" v-for="nav in navs" :key="nav.id" @click="index.changeNavType(nav)"
            :class="[nav.id === index.navId ? 'nav-active' : '']">{{ nav.name }}</li>

            <el-select v-if="index.navTypes.length" size="small" placeholder="请选择" class="hot-rank" v-model="value" style="width: 5em;">
              <el-option v-for="type in index.navTypes" :label="type.label" :value="type.value" :key="type.value"></el-option>
            </el-select>
          
          </ul>
        </div>
        <article-list></article-list>
      </div>
      <div class="index-main-mobile" v-else>
        <div class="main-header">
          <ul class="main-navs">
            <li class="main-nav" v-for="nav in navs" :key="nav.id" @click="index.changeNavType(nav)"
            :class="[nav.id === index.navId ? 'nav-active' : '']">{{ nav.name }}</li>

            <el-select v-if="index.navTypes.length" size="small" placeholder="请选择" class="hot-rank" v-model="value" style="width: 5em;">
              <el-option v-for="type in index.navTypes" :label="type.label" :value="type.value" :key="type.value"></el-option>
            </el-select>

          </ul>
        </div>
        <article-list></article-list>
      </div>
      <div class="index-side" v-if="toptap.windowWidth > 1000">
        <auther-rank></auther-rank>
      </div>
  </div>
</template>

<style scoped lang="scss">
.index {
  position: relative;
}
.index-main-pc {
  position: absolute;
  width: 40%;
  border: 1px solid #000;
  border-radius: 3px;
  background-color: #fff;
  margin: 0.5em 0 0 20%;
}
.index-main-mobile {
  position: absolute;
  left: 0;
  width: 100%;
  border-bottom: #9e9e9e;
  background-color: #fff;
}
.main-header {
  padding: 0.5em 0.75em;
}
.main-navs {
  height: 2em;
  display: flex;
  position: relative;
  align-items: center;
  .main-nav {
    display: inline-block;
    font-size: 0.9em;
    color: #9e9e9e;
    cursor: pointer;
    padding: 0 0.5em;
  }
  .hot-rank {
    position: absolute;
    left: 8em;
    top: 0.2em;
    border: none;
  }
}
.index-side {
  width: 20%;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 0.5em 18%;
  float: right;
}
</style>