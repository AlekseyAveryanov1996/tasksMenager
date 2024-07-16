<script setup>
  import { ref } from "vue"

defineProps({
  Icon: String,
  Title: String,
})

const accordionIsActive = ref(false);

const changeActiveAccordion = () => {
  accordionIsActive.value = !accordionIsActive.value;
}

</script>

<template>
  <div class="accordion" :class="{open: accordionIsActive}">
    <div class="accordion__header">
      <div class="accordion__content">
        {{ Title }}
      </div>
      <div class="accordion__trigger" @click="changeActiveAccordion">
        <i :class="Icon" style="font-size: 1.3rem"></i>
      </div>
    </div>
    <div class="accordion__main">
      <div class="accordion__main-animation">
        <div class="accordion__main-transform-wrapper">
          <div class="accordion__main-content">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .accordion
    position relative
    display: flex
    flex-direction: column
    &__content
      max-width: 80%
      +min(mobile)
        max-width: 90%
    &__trigger
      position: absolute
      top: 0px
      right 0px
      padding: 12px
      cursor pointer
      display: flex
      justify-content: center
      align-items: center
      rotate: 0deg
      transform: rotate .5s ease
    &__content
      padding: 12px
      +min(mobile)
        padding: 20px
    &__main
      display: grid
      grid-template-rows: 0fr;
      overflow: hidden;
      transition: grid-template-rows .5s ease;
      &-animation
        min-height: 0px
      &-transform-wrapper
        transform: translateY(-100%)
        visibility: hidden
        transition: transform .5s ease, visibility 0s ease;
    &.open
      .accordion__main
        grid-template-rows: 1fr;
        transition: grid-template-rows .5s ease;
      .accordion__main-transform-wrapper
        transform: translateY(0)
        visibility: visible
        transition: transform .5s ease, visibility 0s ease;
      .accordion__trigger
        rotate: 180deg
        transition: rotate .5s ease
      
</style>