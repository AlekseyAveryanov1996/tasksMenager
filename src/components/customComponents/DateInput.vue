<script setup>
  import { ref } from 'vue';
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'
  
  defineProps(['titleDate']);

  const model = defineModel()
</script>

<template>
  <div class="date-input">
    <div class="date-input__title">{{ titleDate }}</div>
    <div class="date-input__current">
      <VueDatePicker v-model="model"></VueDatePicker>
    </div>
  </div>
</template>

<style lang="stylus">

</style>