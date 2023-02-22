<template>
  <h1>{{ content.title }}</h1>
  <section class="author">
    <div class="message">
      <section
        style="width: 4rem; height: 4rem; border-radius: 50%; overflow: hidden"
      >
        <img
          :src="
            'http://127.0.0.1:1337' +
              content?.author?.attributes.profile.data.attributes.url || ''
          "
          alt=""
        />
        <!-- <section>
          <h6></h6>
        </section> -->
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
          {{ content?.author.attributes.name || "" }}
        </h6>
        <h6>{{ content.updatedAt || "" }}</h6>
        <!-- <button>+ 关注</button> -->
      </section>
    </div>
    <div class="follow">
      <!-- <button
        style="width: 3rem; height: 3rem; background-color: cornflowerblue"
      >
        关注
      </button> -->
    </div>
  </section>
  <article class="article-content" v-html="htmls" id="articleContent"></article>
</template>

<script setup>
import { marked } from "marked";
import { ref, reactive } from "vue";
import request from "../utils/request";
let navTree = ref([]);
const props = defineProps({
  content: {
    type: Object,
  },
});
const emits = defineEmits(["navigations"]);
// const refreshNavTree = (treeData) => {
//   console.log(treeData);
//   this.navTree = treeData;
// };
const Tags = ["H1", "H2", "H3", "h4"];
let user = reactive({
  data: {},
  name: "user",
});
watch(
  () => props.content,
  () => {
    console.log("change");
  },
  {
    deep: true,
  }
);
let htmls = computed(() => {
  return props.content?.content ? marked.parse(props.content.content) : "";
});
watch(htmls, () => {
  let htmlNode = document.getElementsByTagName("article");
  // 浏览器控制台展开console的时候会重新获取值
  setTimeout(() => {
    // let list = JSON.stringify(htmlNode[0].childNodes);
    // console.log(htmlNode[0].children);
    // for(let i of htmlNode[0].children){
    //   console.log(i);
    // }
    let iindex = -1;
    for (let i = 0; i < htmlNode[0].children.length; i++) {
      iindex = Tags.findIndex((item) => {
        return item == htmlNode[0].children[i].tagName;
      });

      if (iindex !== -1) {
        htmlNode[0].children[i].setAttribute(
          "name",
          htmlNode[0].children[i].id
        );
        navTree.value.push({
          tagName: htmlNode[0].children[i].tagName,
          id: htmlNode[0].children[i].innerText,
          navIndex: iindex + 1,
        });
      }
    }
    // console.log(navTree);
    emits("navigations", navTree.value);
    // htmlNode[0].children.forEach((currentValue, currentIndex, listObj)=>{
    //   console.log(typeof currentValue, currentIndex, listObj);
    // })
  }, 3000);
  // list.forEach((elem) => {
  //   console.log(elem);
  // });
  // htmlNode[0].children.forEach(elem=>{
  //   console.log(elem);
  // })
  // for(let i in htmlNode[0].childNodes){
  //   console.log(htmlNode[0].childNodes[i]);
  // }
  // htmlNode[0].childNodes.forEach()
  // for(let aa of htmlNode[0].childNodes){
  //   console.log(aa);
  // }
  // Array.prototype.forEach.call(htmlNode[0].childNodes, function (checkbox) {
  //   // checkbox.checked = true;
  //   console.log(checkbox);
  // }); 

  let arr = document.getElementsByTagName("h3");
  // console.log(arr, "arr", htmls);
});
</script>
<style scoped lang='scss'>
.author {
  display: flex;
  justify-content: space-between;
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