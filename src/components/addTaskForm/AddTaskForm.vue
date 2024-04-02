<script setup>
import Input from '../customComponents/Input.vue'
import Select from '../customComponents/Select.vue'
import DateInput from '../customComponents/DateInput.vue'
import { ref } from 'vue';
  
  const tasks = ref([]);

  let inputTasks = ref('');
  let inputDescription = ref('');
  let directorTask = ref('');
  let responsibleTask = ref('');
  let startDate = ref('');
  let endDate = ref('');

  function addTask(e) {
    e.preventDefault();
    let task = {
      id: '4',
      title: inputTasks.value, //Заголовок
      description: inputDescription.value, // Описание
      userFrom: directorTask.value, // Постановщик
      userTo: responsibleTask.value, // Ответственный
      dateCreated: startDate.value.getTime(), // Дата начала работ
      dateClosed: endDate.value.getTime(), // Дата окончания работ
      subTasks: [],
    }

    let response = fetch('http://localhost:3000/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(task)
    }).then(res=>res.status);

    // console.log(response);
  }

  

</script>

<template>
  <form action="">
    <Input  title="Заголовок" placeHolderValue="Введите заголовок задачи" v-model="inputTasks" />
    <Input  title="Описание" placeHolderValue="Введите Описание задачи" v-model="inputDescription" />
    <Select titleSelect="Кто ставит задачу" v-model="directorTask" />
    <Select titleSelect="Кому поставить задачу" v-model="responsibleTask" />
    <DateInput titleDate="Дата начала:" v-model="startDate"/>
    <DateInput titleDate="Выполнить до:" v-model="endDate"/>
    <button @click="addTask">Добавить задачу</button>

  </form>
  

  <div class="tasks">
    <div class="tasks__title">Список задач:</div>
    <ul class="tasks__lists">
      <li>1</li>
    </ul>
  </div>

</template>

<style>
</style>