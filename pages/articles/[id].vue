<template>
  <div
    :class="[
      'container',
      windowWidth > 960 ? 'container-PC' : 'container-mobile',
    ]"
  >
    <aside
      :class="['options', windowWidth > 960 ? 'options-PC' : 'options-mobile']"
    >
      <!-- <ul> -->
      <li v-for="item in options" :key="item.id">
        <i :class="['iconfont', item.icon]"></i>
      </li>
      <!-- </ul> -->
    </aside>
    <section :class="['main', windowWidth > 960 ? 'main-PC' : 'main-mobile']">
      <article-content :content="content.data"></article-content>
    </section>
    <aside class="right"></aside>
  </div>
</template>

<script setup>
import { marked } from "marked";
import request from "../../utils/request";
import { ref, reactive } from "vue";
const options = ref([
  {
    id: "01",
    icon: "icon-tubiaozhizuomoban-",
    show: true,
  },
  {
    id: "02",
    icon: "icon-pinglun",
    show: true,
  },
  {
    id: "03",
    icon: "icon-shoucang",
    show: true,
  },
]);
let content = reactive({
  title: "文章md字符串",
  data: {},
});
const route = useRoute();
let windowWidth = ref(100);

onMounted(() => {
  request(`/api/articles/${route.params.id}`, {}, 0).then((res) => {
    res.data.attributes.content = res.data.attributes.content.replaceAll(
      "/uploads",
      "http://127.0.0.1:1337/uploads"
    );
    windowWidth.value = window.screen.width;
    // 要放在mounted里，不然不会有window对象
    window.onresize = () => {
      console.log("resize", window.navigator);
      windowWidth.value = window.screen.width;
      console.log(windowWidth.value);
    };
    content.data = res.data.attributes;
  });
});
</script>
<style scoped lang='scss'>
.container {
  // min-width: 75rem;
  margin: 0 auto;
  &-mobile {
    width: 100%;
  }
  &-PC {
    min-width: 75rem;
    max-width: 90rem;
  }
}
.options {
  position: fixed;

  ul {
    display: flex;
    li {
      width: 1rem;
      height: 1rem;
    }
  }
  &-PC {
    top: 20rem;
    text-align: center;
    width: 6rem;
    line-height: 6rem;
    li {
      background-color: antiquewhite;
      border-radius: 50%;
      margin-bottom: 1.5rem;
    }
  }
  &-mobile {
    // position: fixed;
    align-items: center;
    display: flex;
    justify-content: space-around;
    height: 5rem;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #efe8e8;
  }
}
.main {
  &-PC {
    width: 75%;
    margin-left: 10%;
  }
  &-mobile {
    width: 100%;
  }
}
.right {
  &-PC {
    width: 10%;
  }
  &-mobile {
    display: none;
  }
}
li {
  list-style-type: none;
}
.iconfont {
  font-size: 1.7rem;
}
</style>