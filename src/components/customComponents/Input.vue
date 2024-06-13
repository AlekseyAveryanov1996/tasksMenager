<script setup>
  defineProps({
    title: String,
    placeHolderValue: String,
    typeValue: String,
    colorTextClass: String,
    icon: String,
    iconText: String
    })
  const model = defineModel()
</script>

<template>
  <div class="custom-input flex flex-col" :class="colorTextClass">
    <div class="custom-input__title text-xl">{{title}}</div>
    <div class="custom-input__wrapper mt-[12px] flex">
      <div v-if="icon !==''">
        <i :class="icon"></i>
      </div>
      <input :type="typeValue" v-model="model" class="pt-[5px] pb-[5px] pl-[10px] pr-[10px] bg-transparent rounded-[6px] border-[2px] border-indigo-600 grow" >
    </div>
    <div class="custom-input__sub-text">{{placeHolderValue}}</div>
  </div>
</template>

<style lang="stylus" scoped>
 .custom-input 
  input
    outline: none
</style>