<script setup>
  import Navigation from '../Navigation/Navigation.vue'
</script>

<template>
  <aside class="aside-menu">
    <div class="logo">
      <RouterLink to="/">
        <img src="" alt="Logo">
      </RouterLink>
    </div>
    <Navigation />
    <div class="exist-sistem">
      exit
    </div>
  </aside>
</template>

<style lang="stylus" scoped>
  .aside-menu
    background: var(--color2)
    padding: 40px 20px
    display flex
    flex-direction: column
    gap: 20px
    +min(mobile)
      padding: 40px 0 40px 40px
</style>