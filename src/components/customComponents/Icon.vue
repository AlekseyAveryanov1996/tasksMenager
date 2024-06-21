<script setup>
  defineProps(['title'])
</script>

<template>
  <!-- <svg>
    <use :xlink:href="`sprite.svg#${title}`"></use>
  </svg> -->
  <i :class="title"></i>
</template>

<style lang="stylus" scoped>
  svg
    width 100%
    height: 100%
</style>