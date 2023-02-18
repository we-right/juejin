<script setup lang="ts">
import Category from '../components/Category.vue'
import { useIndexStore } from '../stores/index'
import { ElSelect, ElOption } from 'element-plus' 

const index = useIndexStore()

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
                name: '3天内',
                type: 3
            },
            {
                name: '7天内',
                type: 7,
            },
            {
                name: '30天内',
                type: 30,
            },
            {
                name: '全部',
                type: 0
            }
        ]
    }
])
</script>

<template>
  <div class="index">
    <Category />
    <div class="index-wrapper"></div>
      <div class="index-main-pc">
        <div class="main-header">
          <ul class="main-navs">
            <li class="main-nav" v-for="nav in navs" :key="nav.id" @click="index.changeNavType(nav)"
            :class="[nav.id === index.navId ? 'nav-active' : '']">{{ nav.name }}</li>
            <el-select v-if="index.navTypes.length" size="small" placeholder="请选择" class="hot-rank">
              <el-option v-for="type in index.navTypes" :label="type.name" :value="type.name"></el-option>
            </el-select>
          </ul>
        </div>
      </div>
      <div class="index-side">小册</div>
  </div>
</template>

<style scoped lang="scss">
.index {
  position: relative;
  .index-wrapper {
    position: absolute;
    top: 4em;
  }
}
.index-main-pc {
  position: absolute;
  width: 40%;
  border: 1px solid #000;
  border-radius: 3px;
  background-color: #fff;
  margin: 0.5em 0 0 20%;
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
    width: 1em;
  }
}
.index-side {
  width: 20%;
  border: 1px solid #000;
  margin: 0.5em 18%;
  float: right;
}
</style>