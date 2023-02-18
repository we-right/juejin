<script setup>
import Category from '../components/Category.vue'
import { useIndexStore } from '../stores/index'
import { ElSelect, ElOption } from 'element-plus' 

const index = useIndexStore()

const navs = reactive([
    {
        id: 1,
        name: '推荐',
        type: 0
    },
    {
        id: 2,
        name: '最新',
        type: 0
    },
    {
        id: 3,
        name: '热榜',
        type: 0,
        types: [
            {
                name: '3天内'
            },
            {
                name: '7天内'
            },
            {
                name: '30天内'
            },
            {
                name: '全部'
            }
        ]
    }
])
</script>

<template>
  <div class="index">
    <Category />
    <div class="index-wrapper"></div>
      <div class="index-main">
        <div class="main-header">
          <ul class="main-nav">
            <li class="main-dev" v-for="nav in navs" :key="nav.name" 
            :class="[nav.id == index.navId ? 'nav-active' : '']">{{ nav.name }}</li>
            <el-select v-if="index.navTypes.length" size="mini" style="width: 2em;" placeholder="请选择">
              <el-option v-for="type in index.navTypes" :label="type.name" :value="item.name"></el-option>
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
.index-main {
    position: absolute;
    width: 40%;
    border: 1px solid #000;
    margin: 0.5em 0 0 20%;
}
.index-side {
    width: 20%;
    border: 1px solid #000;
    margin: 0.5em 18%;
    float: right;
}
</style>