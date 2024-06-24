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

  //Регистрация
  const singup = async (payload, funcEmit) => {
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
    }
    catch (err) {
      console.log('Ошибка', err);
    }
  }

  //авторизация
  const singIn = async (payload, funcEmit) => {
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
      console.log(response);
      if (response.statusText === 'OK') {
        funcEmit(); //вызываем функцию, переданную из компонента, для показа главной страницы после успешной регистрации
      }
    }
    catch (err) {
      return console.log(err, "Неправильный логин и пароль");
    }
  }

  return { singup, singIn, userInfo, }
})
