<template>
  <sections style="height: 10rem"></sections>
  <h1>{{ content.title }}</h1>
  <section class="author">
    <div class="message" style="display: flex">
      <section
        style="width: 4rem; height: 4rem; border-radius: 50%; overflow: hidden"
      >
        <!--  -->
        <img
          style="
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            overflow: hidden;
          "
          :src="
            content?.author
              ? 'http://127.0.0.1:1337' +
                content.author.attributes.profile.attributes.url
              : ''
          "
          alt=""
        />
      </section>
      <section
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-left: 1rem;
        "
      >
        <h6>
          {{ content.author ? content.author.attributes.name : "" }}
        </h6>
        <h6>{{ timeFormat(content.updatedAt || "") }}</h6>
        <!-- <button>+ 关注</button> -->
      </section>
    </div>
    <div class="follow">
      <button
        style="width: 3rem; height: 3rem; background-color: cornflowerblue"
      >
        关注
      </button>
    </div>
  </section>
  <article class="article-content" v-html="htmls" id="articleContent"></article>
</template>

<script setup>
import { marked } from "marked";
import { ref, reactive } from "vue";
import request from "../utils/request";
import timeFormat from "../utils/timeFormat";
let navTree = ref([]);
const props = defineProps({
  content: {
    type: Object,
  },
});
const emits = defineEmits(["navigations"]);
const Tags = ["H1", "H2", "H3", "h4"];
let htmls = computed(() => {
  return props.content?.content ? marked.parse(props.content.content) : "";
});
watch(htmls, () => {
  let htmlNode = document.getElementsByTagName("article") || null;
  // 浏览器控制台展开console的时候会重新获取值
  setTimeout(() => {
    let iindex = -1;
    for (let i = 0; i < htmlNode[0].children.length; i++) {
      iindex = Tags.findIndex((item) => {
        return item == htmlNode[0].children[i].tagName;
      });
      htmlNode[0].children[i].setAttribute("name", htmlNode[0].children[i].id);
      if (iindex !== -1) {
        navTree.value.push({
          tagName: htmlNode[0].children[i].tagName,
          id: htmlNode[0].children[i].innerText,
          navIndex: iindex + 1,
        });
      }
    }
    emits("navigations", navTree.value);
  }, 3000);
});
</script>
<style scoped lang='scss'>
.author {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1.2rem;
}
h1 {
  font-size: 1.5rem;
  font-weight: 800;
}
.article-content {
  width: 100%;
  height: auto;
}
</style>