<script setup>
  import Aside from "@/components/Aside/Aside.vue";
  import Header from "@/components/Header/Header.vue";
  import { useRoterStore } from '../stores/router.js'

  const routerStore = useRoterStore();

  
</script>

<template>
  <div class="wrapper-container">
    <Aside />
    <main class="main-content">
      <div class="header">
        <Header />
      </div>
      <div class="content-block p-[20px]">
        <div class="dashboard">
          {{routerStore.thisRouter}}
        </div>
        <slot></slot>
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
