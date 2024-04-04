<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

  defineProps(['titleSelect']);
  const model = defineModel();
  const users = ref([]); // записываем сюда юзеров

  onMounted(() => {
    axios
      .get("http://localhost:3000/users/")
      .then((response) => {
        users.value = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  });

</script>

<template>
  <div class="select">
    <div class="select__title">{{titleSelect}}</div>
    <div class="select__dropdown">
        <select v-model="model">
          <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
        </select>
    </div>
  </div>
  
</template>

<style lang="stylus">

</style>