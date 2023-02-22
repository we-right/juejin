<script setup lang="ts">
import { useAutherRankStore } from '../stores/autherRank'

const autherRank = useAutherRankStore()
onMounted(() => {
  for (let i = autherRank.autherList.length; i < 3; i++) 
    autherRank.addAuther()
  autherRank.sortAuther()
})
</script>

<template>
  <div class="auther-rank-wrapper">
    <div class="auther-rank-title">🎖️ 作者榜</div>
    <div class="auther-main">
      <div v-for="auther in autherRank.autherList" class="auther-list">
        <div class="auther-item">
          <img :src="auther.image" class="image">
          <div style="float: left;" class="auther-text">
            <p>{{ auther.name }}</p>
            <p>{{ auther.intro }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>完整榜单</div>
  </div>
</template>

<style scoped lang="scss">
.auther-rank-wrapper {
  border-radius: 3px;
  background-color: #fff;
}
.auther-rank-title {
  padding: 0.75em 2em;
  border-bottom: 1px solid #918b8b;
}
.auther-main {
  border-bottom: 1px solid #918b8b;
  padding: 0.5em;
}
.auther-list {
  position: relative;
  .auther-item {
    margin: 1em 0;
    .auther-text {
      position: absolute;
      top: 0.5em;
      left: 5.5em;
    }    
  }
}
.image {
  width: 5em;
  height: 5em;
  border-radius: 50%;
}
</style>