<script setup>
  import Aside from "./components/Aside/Aside.vue";
</script>

<template>
  <div class="wrapper-container">
    <Aside />
    <main class="main-content">
      <div class="header">
        header
      </div>
      <div class="content-block">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style lang="stylus">

/*Base style*/
body, html
  margin auto
  height auto
  min-width 360px
  color var(--colorText)
  position relative
  font-family: 'Manrope', 'Arial', 'Helvetica', sans-serif
  font-weight: 400
  font-size: 14px
  line-height: 20px
  max-width: 2560px
  margin 0 auto
.wrapper-container
  background: var(--color1)
  margin-left: auto
  margin-right: auto
  height: 100vh
  width 100%
  display: flex
  flex-direction: column
  +min(mobile)
    display: grid
    grid-template-columns: minmax(0px, 350px) 1fr
  
</style>
