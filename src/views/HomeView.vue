<script setup>
  import Aside from "@/components/Aside/Aside.vue";
  import Button from "primevue/button";
</script>

<template>
  <div class="wrapper-container">
    <Aside />
    <main class="main-content">
      <div class="header">
        <Button label="Кнопка" icon="pi pi-user"/>
      </div>
      <div class="content-block">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style lang="stylus">

.wrapper-container
  background: linear-gradient(92.28deg, #0B0A2C 0%, #453BB4 100%);
  margin-left: auto
  margin-right: auto
  height: 100%
  min-height: 100dvh
  width 100%
  display: flex
  flex-direction: column
  color: var(--colorText)
  +min(mobile)
    display: grid
    grid-template-columns: minmax(0px, 225px) 1fr
  
</style>
