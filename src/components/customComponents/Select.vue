<script setup>
  defineProps(['titleSelect']);
  const model = defineModel()
</script>

<template>
  <div class="select">
    <div class="select__title">{{titleSelect}}</div>
    <div class="select__dropdown">
      <select v-model="model">
        <option>User 1</option>
        <option>User 2</option>
        <option>User 3</option>
      </select>
    </div>
  </div>
  
</template>

<style lang="stylus">

</style>