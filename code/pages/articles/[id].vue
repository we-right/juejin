<template>
  <div class="article-content" id="content">
    <div v-html="content"></div>
  </div>
</template>

<script setup>
import request from "../../utils/request";
import { marked } from "marked";
import { ref, onMounted } from "vue";
let content = ref("");
const route = useRoute();
console.log(route.params.id);
onMounted(() => {
  request("/api/articles/" + 1, {}, 0).then((e) => {
    content.value = e.data.attributes.content;
    content.value = content.value.replace(
      "/uploads",
      "http://127.0.0.1:1337/uploads"
    );
    content.value = marked.parse(content.value);
    console.log(document.getElementsByTagName("h4"));
  });
});
</script>
<style scoped lang='less'>
</style>