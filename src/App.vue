<script setup>
  import LogIn from './views/LogIn.vue';
  import HomeView from './views/HomeView.vue';
  import { ref} from "vue";

  const statusLogIn = localStorage.getItem('statusLogIn');

  // переменная для переключения шаблонов динамически
  const currentComponentName = ref('');

  if (statusLogIn === 'OK') {
    currentComponentName.value = 'HomeView';
  } else {
    currentComponentName.value = 'LogIn';
  }

  // объект с шаблоанами для переключения
  const components = {
    LogIn,
    HomeView,
  }

  // Переключаем компонент
  const toggleCurrentComponent = () => {
    currentComponentName.value = 'HomeView'
  };

  

</script>

<template>
    <component :is="components[currentComponentName]" @toggle-current-component="toggleCurrentComponent">
      <RouterView />
    </component>
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
