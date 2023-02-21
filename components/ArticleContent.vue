<template>
  <h1>{{ content.title }}</h1>
  <section class="author">
    
  </section>
  <article class="article-content" v-html="htmls"></article>
</template>

<script setup>
import { marked } from "marked";
import { ref, reactive } from "vue";
const props = defineProps({
  content: {
    type: Object,
  },
});

let htmls = computed(() => {
  // console.log(marked.parse(props.content.content));
  return props.content?.content ? marked.parse(props.content.content) : "";
});

</script>
<style scoped lang='scss'>
h1 {
  font-size: 1.5rem;
  font-weight: 800;
}
.article-content {
  width: 100%;
  height: auto;
}
</style>