<script setup>
  import LogIn from './views/LogIn.vue';
  import HomeView from './views/HomeView.vue';
  import { ref } from "vue";

  // переменная для переключения шаблонов динамически
  const currentComponentName = ref("LogIn");

  // объект с шаблоанами для переключения
  const components = {
    LogIn,
    HomeView,
  }

  // функция переключения динамических шаблоннов
  const toggleCurrentComponent = () => {
    currentComponentName.value =
      currentComponentName.value == "LogIn" ? "HomeView" : "LogIn";
  };

</script>

<template>
    <component :is="components[currentComponentName]"></component>
    <v-btn @click="toggleCurrentComponent">Toggle</v-btn>
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
