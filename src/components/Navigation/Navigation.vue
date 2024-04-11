<script setup>
  import { ref } from "vue";

  const pages = ref([
    {
      url: '/tasks',
      title: 'Список задач',
      iconURL: 'url'
    },
    {
      url: '/users',
      title: 'Пользователи',
      iconURL: 'url'
    },
    {
      url: '/about',
      title: 'Go to About',
      iconURL: 'url'
    },
  ]);

</script>

<template>
  <nav class="nav">
    <RouterLink v-for="page in pages" :key="page.url" class="nav__link" :to=page.url>{{ page.title }}</RouterLink>
  </nav>
</template>

<style lang="stylus" scoped>
  .nav
    display: flex
    flex-wrap: wrap
    gap: 10px
    +min(mobile)
      flex-direction: column
      gap 20px
    &__link
      color: var(--colorText)
</style>