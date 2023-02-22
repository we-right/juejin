<template>
  <div
    :class="[
      'container',
      windowWidth > 960 ? 'container-PC' : 'container-mobile',
    ]"
    :style="{ width: windowWidth + 'px' }"
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
      <article-content
        :content="content.data"
        @navigations="getNavTree"
      ></article-content>
      <!-- <section class="book-about">
        <h4>相关小册</h4>
        <div>
          <section v-for="item in recommendBooks" :key="item.id"></section>
        </div>
      </section> -->
      <!-- <section class="comment">
        <h4>评论</h4>
        <section></section>
        <h4>全部评论<span>2</span></h4>
        <section></section>
      </section> -->
      <section class="recommend">
        <h5>相关推荐</h5>
        <!-- <article-card></article-card> -->
      </section>
    </section>
    <aside class="right">
      <div style="height: 30rem">
        <!-- <img
          :src="
            'http://127.0.0.1:1337' +
              content.data.author?.data?.avatar?.data.attributes.url || ''
          "
          alt=""
        /> -->
      </div>
      <div class="navigation" id="navigations"></div>
    </aside>
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
    icon: "icon-pinglunxuanzhong",
    show: true,
  },
  {
    id: "03",
    icon: "icon-shoucang",
    show: true,
  },
  {
    id: "04",
    icon: "icon-fenxiang",
    show: true,
  },
  {
    id: "06",
    icon: "icon-jinggao",
    show: true,
  },
  {
    id: "05",
    icon: "icon-jujiao",
    show: true,
  },
]);
let content = reactive({
  title: "文章md字符串",
  data: {},
});
let navigations = ref([]);
let recommendBooks = ref([
  {
    id: 1,
    title: "前端性能优化原理与实践",
    payed: 12457,
    money: 29.9,
    author: "修言",
  },
  {
    id: 2,
    title: "JavaScript设计模式核心原理与应用实践",
    payed: 12457,
    money: 29.9,
    author: "修言",
  },
]);
const route = useRoute();
let windowWidth = ref(100);

onMounted(() => {
  request(`/api/articles/${route.params.id}?populate=*`, {}, 0).then((res) => {
    res.data.attributes.content = res.data.attributes.content.replaceAll(
      "/uploads",
      "http://127.0.0.1:1337/uploads"
    );
    request(
      `/api/authors/${res.data.attributes.author.data.id}?populate=profile`,
      {},
      0
    ).then((e) => {
      res.data.attributes.author = e.data;
      content.data = res.data.attributes;
      console.log(content.data);
    });
    windowWidth.value = window.screen.width;
    // 要放在mounted里，不然不会有window对象
    window.onresize = () => {
      // console.log("resize", window.navigator);
      windowWidth.value = window.screen.width;
      // console.log(windowWidth.value);
    };
  });
});
onUpdated(() => {});
const getNavTree = (e) => {
  // console.log(e.length);
  let nav = document.getElementById("navigations");
  // console.log(nav);
  e.forEach((elem) => {
    // console.log(elem);
    let a = document.createElement("a");
    a.href = "#" + elem.id;
    a.innerText = elem.id;
    // a.style.textIndent = elem.navIndex + 'rem'
    a.style.marginLeft = elem.navIndex + 'rem'
    nav.appendChild(a);
  });
};
</script>
<style scoped lang='scss'>
.container {
  // min-width: 75rem;
  margin: 0 auto;
  display: flex;
  // width: 100%;
  &-mobile {
    width: 100%;
    // margin: 0 0;
    box-sizing: border-box;
  }
  &-PC {
    width: 100%;
    // min-width: 75rem;
    // max-width: 90rem;
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
    top: 10rem;
    text-align: center;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
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
    width: 60%;
    margin-left: 10%;
  }
  &-mobile {
    width: 100%;
  }
}
.right {
  &-PC {
    width: 10%;
    .navigation {
      position: sticky;
      top: 20rem;
      width: 15rem;
      // text-indent: 0px;
      margin-left: 1.5rem;
    }
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