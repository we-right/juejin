<template>
  <!-- <div>hello</div> -->
  <div id="app">
    <NuxtLayout name="default"> <NuxtPage /></NuxtLayout>
  </div>
</template>
<script setup>
let a = 'o'
</script>
<style lang="less">
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}
a {
	text-decoration: none; /* 去除默认的下划线 */
	outline: none;	/* 去除旧版浏览器的点击后的外虚线框 */
	color: #000;	/* 去除默认的颜色和点击后变化的颜色 */ 
}

#app {
  width: 100%;
  margin: 0;
  padding: 0;
  // height: 100%;
}
</style>