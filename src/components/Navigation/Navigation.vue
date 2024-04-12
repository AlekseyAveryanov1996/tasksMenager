<script setup>
  import Icon from '@/components/customComponents/Icon.vue'

  import { ref } from "vue";

  const pages = ref([
    {
      url: '/tasks',
      title: 'Список задач',
      iconName: 'icon-tasks'
    },
    {
      url: '/users',
      title: 'Пользователи',
      iconName: 'icon-users'
    },
  ]);

</script>

<template>
  <nav class="nav">
    <RouterLink v-for="page in pages" :key="page.url" class="nav__link" activeClass="--active" :to=page.url>
      <div class="nav__link-icon">
        <Icon :title="page.iconName" />
      </div>
      <div class="nav__link-text">
        {{ page.title }}
      </div>
    </RouterLink>
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
      align-items: flex-end
    &__link
      color: var(--colorText)
      display: inline-flex
      align-items: center
      gap: 10px
      padding: 6px
      border-radius: 10px
      font-size: 14px
      line-height 28px
      text-decoration: none
      font-weight: 500
      max-width: fit-content
      width 100%
      +min(mobile)
        max-width: 100%
        border-radius: 20px 0 0 20px
        font-size: 18px
        line-height 22px
        padding: 10px 6px 10px 20px
      &.--active
        background: var(--color3)
      &-icon
        display: flex
        justify-content: center
        align-items: center
        width 16px
        height: 16px
        +min(mobile)
          width 20px
          height: 20px
        svg
          fill: #fff
</style>