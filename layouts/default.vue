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
main {
  background-color: #fff;
  /* min-height: 1000vh; */
}
</style>