<script setup lang="ts">
import { useArtcileListStore } from '../stores/articleList'

const articleList = useArtcileListStore()

onMounted(() => {
    for (let i = articleList.articList.length; i < 10; i++)
        articleList.addList()
    if (articleList.isAdd) {
        articleList.addList();
        articleList.isAdd = false;
    }
})
</script>

<template>
  <div class="artic-list">
    <template v-for="arc in articleList.articList">
      <div class="arc-item">
        <div class="item-header">
          <p class="arc-auther">
            {{ arc.auther }}
            <span class="bar"> | </span>
          </p>
          <ul class="arc-cat">
              <li v-for="cat in arc.category" class="cat-item">{{ cat }}</li>
              <span class="bar"> | </span>
          </ul>
          <p class="arc-data">
            {{ arc.date }}
          </p>
        </div>
        <div class="item-mid">
          <div class="arc-title">
            {{ arc.title }}
          </div>
          <div class="arc-desc">
            {{ arc.describe }}
          </div>
        </div>
        <div class="item-footer">
          <div class="arc-view">
            {{ arc.view }}
          </div>
          <div class="arc-like">
            {{ arc.like }}
          </div>
          <div>
            {{ arc.comment }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.artic-list {
    .arc-item {
      position: relative;
      border-top: 1px solid #7f7f7f;
      height: 10em;
      overflow-y: hidden;
    }
}
.item-header {
  height: 2em;
  align-items: center;
  display: flex;
  padding: 0 1em;
  position: absolute;
  color: #6b5e5e;
  font-size: 0.9em;
  .arc-cat {
    display: flex;
    margin: 0 1em 0 0.5em;
    .cat-item {
      padding: 0 0.25em;
      cursor: pointer;
    }
  }
}
.item-mid {
  position: absolute;
  top: 2em;
  height: 4em;
  margin: auto 0;
}
.item-footer {
  position: absolute;
  bottom: 0;
}
</style>