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
    <div class="custom-input__wrapper mt-[12px] flex gap-[10px] justify-center items-center">
      <div v-if="icon !==''" class="flex">
        <i :class="icon" style="font-size: 20px;"></i>
      </div>
      <input :type="typeValue" v-model="model" class="pt-[5px] pb-[5px] pl-[10px] pr-[10px] bg-transparent rounded-[6px] border-[2px] border-[#9294F8] grow" >
    </div>
    <div v-if="placeHolderValue !== ''" class="custom-input__sub-text">{{placeHolderValue}}</div>
  </div>
</template>

<style lang="stylus" scoped>
 .custom-input 
  input
    outline: none
</style>