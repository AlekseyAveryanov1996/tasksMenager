<script setup>
  import Navigation from '@/components/Navigation/Navigation.vue'
</script>

<template>
  <aside class="aside-menu">
    <div class="logo">
      <RouterLink to="/">
        <img src="@/assets/images/logo.svg" alt="Logo">
      </RouterLink>
    </div>
    <div class="aside-menu__wrapper-nav">
      <Navigation />
    </div>
    <div class="aside-menu__logout">
      <div class="exist-sistem">
        exit
      </div>
    </div>
  </aside>
</template>

<style lang="stylus" scoped>
  .aside-menu
    background: var(--color2)
    background: linear-gradient(88.96deg, #453BB4 17.44%, #0B0A2D 120.38%);
    padding: 40px 20px
    display flex
    flex-direction: column
    gap: 20px
    +min(mobile)
      padding: 40px 0 40px 20px
    &__wrapper-nav
      +min(mobile)
        margin-top: 60px
    &__logout
      +min(mobile)
        margin-top: auto
  .logo
    display: flex
    justify-content: center
</style>