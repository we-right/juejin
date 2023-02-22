<template>
  <div
    :class="[
      'container',
      windowWidth > 960 ? 'container-PC' : 'container-mobile',
    ]"
    :style="{ width: windowWidth + 'px' }"
    id="container"
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
      <section class="recommend">
        <h5>相关推荐</h5>
        <!-- <article-card></article-card> -->
      </section>
    </section>
    <aside class="right">
      <section>
        <img
          style="
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            overflow: hidden;
          "
          :src="
            content.data?.author
              ? 'http://127.0.0.1:1337' +
                content.data.author.attributes.profile.attributes.url
              : ''
          "
          alt=""
        />
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
          <!-- <h6>{{ content.updatedAt || "" }}</h6> -->
          <!-- <button>+ 关注</button> -->
        </section>
      </section>

      <section style="height: 10rem"></section>
      <div
        class="navigation"
        id="navigations"
        style="position: sticky; top: 10rem; width: 15rem; margin-left: 1.5rem"
      >
        <h6 style="border-bottom: 1px solid">目录</h6>
      </div>
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
      console.log(e);
      e.data.attributes.profile = { ...e.data.attributes.profile.data };
      // res.data.attributes
      res.data.attributes.author = e.data;
      content.data = res.data.attributes;
      console.log(content.data);
    });
    windowWidth.value = window.screen.width;
    // 要放在mounted里，不然不会有window对象
    window.onresize = () => {
      windowWidth.value = window.screen.width;
    };
  });
});
onUpdated(() => {});
const getNavTree = (e) => {
  console.log(e.length);
  let nav = document.getElementById("navigations");
  console.log(nav);
  e.forEach((elem) => {
    let a = document.createElement("a");
    a.href = "#" + elem.id;
    a.innerText = elem.id;
    a.style.marginLeft = Math.round((elem.navIndex * 10) / 16) + "rem";
    a.addEventListener("click", (e) => {
      window.scrollTo(0, 100);
      // console.log(e.target.innerText);
      let item = document.getElementById(e.target.innerText);
      console.log(item.offsetTop);
      setTimeout(() => {
        console.log("aaa");
        window.scrollTo({
          left: 0,
          top: item.offsetTop - 100,
          behavior: "smooth",
        });
      }, 200);
      // item.offsetTop = 1000
      // item.scrollTop = -100
      // setTimeout(() => {
      //   window.scroll(0,-100)
      //   console.log('hhhh');
      // }, 1000);
      //
    });
    nav.appendChild(a);
  });
};
</script>
<style scoped lang='scss'>
.container {
  padding-top: 50px;

  // min-width: 75rem;
  margin: 0 auto;
  margin-top: -50px;
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