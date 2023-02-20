<script setup>
import HeaderTap from '~~/components/HeaderTap.vue';
</script>

<template>
  <HeaderTap />
  <main>
    <slot/>
  </main>
</template>

<style scoped>
div {
  background-color: #f4f4f4;
  min-height: 100vh;
}
main {
  width: 100%;
}
</style>