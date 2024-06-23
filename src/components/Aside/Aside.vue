<script setup>
  import Navigation from '@/components/Navigation/Navigation.vue'

  const emit = defineEmits(['toggleCurrentComponent']) // получаем родительские функции

  function logOut() {
    // localStorage.removeItem('statusLogIn');
    // console.log(localStorage.getItem('statusLogIn'))
    emit('toggleCurrentComponent');
  }

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
    <div class="aside-menu__logout absolute top-2 right-[20px] md:static">
      <div @click="logOut" class="exist-sistem flex ml-auto md:ml-0 gap-[10px] items-center md:pl-[20px] cursor-pointer w-fit">
        <i class="pi pi-sign-out" style="font-size: 1.5rem"></i>
        <span class="md:text-[18px] hidden md:inline-block">Выход</span>
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