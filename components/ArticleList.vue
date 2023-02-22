<script setup lang="ts">
import { useArtcileListStore } from '../stores/articleList'

const articleList = useArtcileListStore()

onMounted(() => {
    for (let i = articleList.articList.length; i < 10; i++)
        articleList.addArc()
    if (articleList.isAdd) {
        articleList.addArc();
        articleList.isAdd = false;
    }
})
</script>

<template>
  <div class="artic-list">
    <template v-for=" arc, index in articleList.articList">
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
          <p class="arc-data"> {{ arc.date }} </p>
        </div>
        <div class="item-mid">
          <div class="arc-title"> {{ arc.title }} </div>
          <div>
            <p class="arc-desc"> {{ arc.describe }} </p>
            <span>...</span>
          </div>
        </div>
        <div class="item-footer">
          <p class="arc-view">👁️‍🗨️{{ arc.view }}</p>
          <span class="arc-like" @click="articleList.Count(index)"><img src="../assets/images/like.png" style="width: 1.2em;" 
            alt="like" class="font-image"> {{ arc.like }}</span>
          <span class="arc-comment"><img src="../assets/images/comment.png" style="width: 1.2em;" 
            alt="comment" class="font-image"> {{ arc.comment }}</span>
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
  .arc-auther {
    cursor: pointer;
  }
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
  .arc-title {
    font-size: 1.2em;
  }
  .arc-desc {
    font-size: 0.9em;
    color: rgb(105, 100, 100);
    width: auto;
    height: 2.8em;
    overflow-y: hidden;
    word-break: break-all;
    word-wrap: break-word;
  }
}
.item-footer {
  position: absolute;
  bottom: 0;
  display: flex;
  font-size: 0.85em;
  color: dimgray;
  .arc-like{
    cursor: pointer;
  }
}
.font-image {
  display: inline-block;
  margin-left: 0.25em;
}
.bar {
  color: rgb(225, 230, 235);
}
</style>