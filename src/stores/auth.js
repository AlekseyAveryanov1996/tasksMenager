import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useAuthStore = defineStore('auth', () => {
  const userInfo = ref({
    token: '',
    email: '',
    userId: '',
    refreshToken: '',
  })

  const error = ref('');

  //Регистрация
  const singup = async (payload, funcEmit) => {
    error.value = '';
    try {
      let response = await axios.post(`http://5.35.86.160:3000/users/`, JSON.stringify(payload), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // userInfo.value = {
      //   token: response.idToken,
      //   email: response.email,
      //   userId: response.localId,
      //   refreshToken: response.refreshToken,
      // }
      console.log(response);
      funcEmit(); //вызываем функцию, переданную из компонента, для показа главной страницы после успешной регистрации/авторизации
    }
    catch (err) {
      console.log(err);
      if (err.response.data.message === 'Bad Request') {
        error.value = 'Заполните все поля для регистрации'
      } else if (err.response.data.message === 'User with email or nick exist') {
        error.value = 'Данный пользователь уже зарегистрирован'
      }
    }
  }

  //авторизация
  const singIn = async (payload, funcEmit) => {
    error.value = '';
    try {
      let response = await axios.post(`http://5.35.86.160:3000/users/auth`, JSON.stringify(payload), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // userInfo.value = {
      //   token: response.idToken,
      //   email: response.email,
      //   userId: response.localId,
      //   refreshToken: response.refreshToken,
      // }
      funcEmit(); //вызываем функцию, переданную из компонента, для показа главной страницы после успешной регистрации/авторизации
    }
    catch (err) {
      console.log(err.response);
      if (err.response.status === 401) {
        error.value = 'Неправильный логин или пароль'
      }
    }
  }

  return { singup, singIn, userInfo, error }
})
