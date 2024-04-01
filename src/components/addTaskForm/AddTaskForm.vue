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
    // console.log(inputTasks.value);
    // console.log(inputDescription.value);
    // console.log(directorTask.value);
    // console.log(responsibleTask.value);
    // console.log(startDate.value.getTime());
    // console.log(endDate.value.getTime());
    let task = {
      titleTask: inputTasks.value, //Заголовок
      descriptionTask: inputDescription.value, // Описание
      directorTask: directorTask.value, // Постановщик
      responsibleTask: responsibleTask.value, // Ответственный
      startDate: startDate.value.getTime(), // Дата начала работ
      endDate: endDate.value.getTime(), // Дата окончания работ
    }

    console.log(task)
    // fetch(http://localhost/tasks/, {method:”post”, body:{title:”t1”, description:”d1”}})

    let response = fetch('http://localhost/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(task)
    }).then(res=>res.status);

    // let result = response.json();
    console.log(response.message);
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