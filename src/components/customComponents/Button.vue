<script setup>
  defineProps({
    textBtn: String,
    click: Function,
  })
</script>


<template>
  <div @click="click" class="btn">{{ textBtn }}</div>
</template>

<style lang="stylus" scoped>
  .btn
    text-transform: uppercase
    padding: 8px 16px
    width 100%
    max-width: fit-content
    color: var(--colorText)
    border-radius: 10px
    // background: black
    cursor pointer
    text-decoration: none;
    border: 2px solid rgb(146, 148, 248);
    position: relative;
    overflow: hidden;
    font-size: 12px
    font-weight: 600
    +min(mobile)
      padding: 12px 20px
      font-size: 14px
    &:hover
      box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
      &::before
        left: 100%;
    &::before
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(146, 148, 248, 0.4),
        transparent
      );
      transition: all 650ms;
</style>