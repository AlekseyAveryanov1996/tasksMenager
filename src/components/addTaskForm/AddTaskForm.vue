<script setup>
import Input from '@/components/customComponents/Input.vue'
import Select from '@/components/customComponents/Select.vue'
import DateInput from '@/components/customComponents/DateInput.vue'
import { ref, onMounted } from 'vue';
import axios from "axios";
  
  const tasks = ref([]);

  let inputTasks = ref('');
  let inputDescription = ref('');
  let directorTask = ref('');
  let responsibleTask = ref('');
  let startDate = ref('');
  let endDate = ref('');

  // ПОЛУЧАЕМ СПИСОК ЗАДАЧ
  function getTasks() {
    axios
      .get("http://5.35.86.160:3000/tasks/")
      .then((response) => {
        tasks.value = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addTask(e) {
    e.preventDefault();
    let task = {
      title: inputTasks.value, //Заголовок
      description: inputDescription.value, // Описание
      userFrom: directorTask.value, // Постановщик
      userTo: responsibleTask.value, // Ответственный
      dateCreate: startDate.value.getTime(), // Дата начала работ
      dateTo: endDate.value.getTime(), // Дата окончания работ
      subTasks: [],
    }

    let response = fetch('http://5.35.86.160:3000/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(task)
    }).then((res) => { 
      res.status;
      getTasks(); // ОБНОВЛЯЕМ СПИСОК ЗАДАЧ
    });
    
  }

  /*
  fetch('http://5.35.86.160:3000/users/auth', 
  {method: 'POST',
  body: JSON.stringify({
    nick:'IgorVasin', 
    password: 'password12345678'}),
  headers: {'Content-Type': 'application/json'}})
  .then(res=> res.json()).then(data => console.log(data)) */
  

  
  onMounted(() => {
    getTasks();
  });

</script>

<template>
  <form action="">
    <Input  title="Заголовок" typeValue="text" placeHolderValue="Введите заголовок задачи" v-model="inputTasks" />
    <Input  title="Описание" typeValue="text" placeHolderValue="Введите Описание задачи" v-model="inputDescription" />
    <Select titleSelect="Кто ставит задачу" v-model="directorTask" />
    <Select titleSelect="Кому поставить задачу" v-model="responsibleTask" />
    <DateInput titleDate="Дата начала:" v-model="startDate"/>
    <DateInput titleDate="Выполнить до:" v-model="endDate"/>
    <button @click="addTask">Добавить задачу</button>

  </form>
  

  <div class="tasks">
    <div class="tasks__title">Список задач:</div>
    <ul class="tasks__lists">
      <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
    </ul>
  </div>

</template>

<style>
</style>