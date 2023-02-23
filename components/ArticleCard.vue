<template>
  <div class="article-card">
    <NuxtLink :to="'/articles/' + article.id">
      <section style="width: 100%; height: 100%">相关推荐</section>
      <!-- <h3>{{ article.attributes.title }}</h3>
      <p>{{ article.attributes.brief }}</p> -->
    </NuxtLink>
  </div>
</template>

<script setup>
import request from "../utils/request";
const props = defineProps({
  article: {
    type: Object,
  },
});
</script>
<style scoped lang='scss'>
.article-card {
  width: 100%;
  height: 6rem;
  margin-bottom: 1rem;
  background-color: #e2e1e4;
  h3 {
    height: 1rem;
    line-height: 1rem;
  }
  p {
    height: 3.6rem;
    overflow: hidden;
    line-height: 1.2rem;
    height: 1.2rem;
    font-size: 1rem;
    // overflow: hidden;
    // white-space: nowrap;
    // text-overflow: ellipsis;
  }
}
</style>