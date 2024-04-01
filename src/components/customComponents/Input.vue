<script setup>
  defineProps(['title', 'placeHolderValue'])
  const model = defineModel()
</script>

<template>
  <div class="custom-input">
    <div class="custom-input__title">{{title}}</div>
    <input type="text" :placeholder="placeHolderValue" v-model="model" >
  </div>
</template>

<style lang="stylus" scoped>
  .custom-input
    display: flex
    flex-direction: column
    gap: 10px
</style>