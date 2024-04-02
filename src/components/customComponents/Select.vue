<script setup>
import { Suspense } from 'vue';

  defineProps(['titleSelect']);
  const model = defineModel()

  // ЗАПРОС К СПИСКУ ПОЛЬЗОВАТЕЛЕЙ
  const API = fetch('http://localhost:3000/users/')
  const users = await API.json();
  // const users = [
  //   {
  //     id: 1,
  //     name: 'name'
  //   },
  //   {
  //     id: 2,
  //     name: 'name2'
  //   },
  // ]

  console.log(users);

</script>

<template>
  <div class="select">
    <div class="select__title">{{titleSelect}}</div>
    <div class="select__dropdown">
      <Suspense>
        <select v-model="model">
          <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
        </select>
      </Suspense>
    </div>
  </div>
  
</template>

<style lang="stylus">

</style>