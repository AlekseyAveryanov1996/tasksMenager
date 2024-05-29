<script setup>
  import Aside from "@/components/Aside/Aside.vue";
</script>

<template>
  <router-view />
</template>

<style lang="stylus">

/*Base style*/
body, html
  margin auto
  height auto
  min-width 360px
  // color var(--colorText)
  position relative
  font-family: 'Manrope', 'Arial', 'Helvetica', sans-serif
  font-weight: 400
  font-size: 14px
  line-height: 20px
  max-width: 2560px
  margin 0 auto
  
</style>
