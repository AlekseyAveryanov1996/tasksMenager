<script setup>
  import LogIn from './views/LogIn.vue';
  import HomeView from './views/HomeView.vue';
  import { useAuthStore } from '@/stores/auth.js' 

  const authStore = useAuthStore();

  // получаем токены из локал для записи в store для сохранения авторизации
  const checkUser = () => {
    const tokens = JSON.parse(localStorage.getItem('userTokens'));
    if (tokens) {
      authStore.userInfo.token = tokens.token;
      authStore.userInfo.refreshToken = tokens.refreshToken;
      authStore.userInfo.userId = tokens.userId;
      authStore.currentComponentName = 'HomeView'
    }
  }

  checkUser();

  // объект с шаблоанами для переключения
  const components = {
    LogIn,
    HomeView,
  }

  // Переключаем компонент
  const toggleCurrentComponent = () => {
    authStore.currentComponentName = 'HomeView'
  };

  

</script>

<template>
    <component :is="components[authStore.currentComponentName]" @toggle-current-component="toggleCurrentComponent"></component>
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
