<script setup>
  import LogIn from './views/LogIn.vue';
  import HomeView from './views/HomeView.vue';
  import { ref } from "vue";

  const currentComponentName = ref("LogIn");

  const components = {
    LogIn,
    HomeView,
  }

  const toggleCurrentComponent = () => {
    currentComponentName.value =
      currentComponentName.value == "LogIn" ? "HomeView" : "LogIn";
  };

</script>

<template>
  <div>
    <component :is="components[currentComponentName]"></component>
    <button @click="toggleCurrentComponent">Toggle</button>
  </div>
</template>

<style lang="stylus">

/*Base style*/
body, html
  margin auto
  height auto
  min-width 360px
  position relative
  font-family: 'Manrope', 'Arial', 'Helvetica', sans-serif
  font-weight: 400
  font-size: 14px
  line-height: 20px
  max-width: 2560px
  margin 0 auto
  
</style>
