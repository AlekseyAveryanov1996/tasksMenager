import { ref } from 'vue'
import { defineStore } from 'pinia'
import axiosApiInstanse from '@/api';


export const useAuthStore = defineStore('auth', () => {
  const userInfo = ref({
    token: '',
    email: '',
    userId: '',
    refreshToken: '',
    nick: '',
    name: '',
    surname: ''
  })

  const error = ref('');

  //Регистрация
  const singup = async (payload, funcEmit) => {
    error.value = '';
    try {
      let response = await axiosApiInstanse.post(`http://5.35.86.160:3000/users/`, JSON.stringify(payload), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      userInfo.value = {
        token: response.data.token_acc,
        email: response.data.email,
        userId: response.data.id,
        refreshToken: response.data.token_ref,
        nick: response.data.nick,
        name: response.data.name,
        surname: response.data.surname,
      }
      localStorage.setItem('userTokens', JSON.stringify({token: userInfo.value.token, refreshToken: userInfo.value.refreshToken, userId: userInfo.value.userId})) // нужно для того, чтобы запомнить состояние пользователя
      funcEmit(); //вызываем функцию, переданную из компонента, для показа главной страницы после успешной регистрации/авторизации
    }
    catch (err) {
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
      let response = await axiosApiInstanse.post(`http://5.35.86.160:3000/users/auth`, JSON.stringify(payload), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      userInfo.value = {
        token: response.data.token_acc,
        email: response.data.email,
        userId: response.data.id,
        refreshToken: response.data.token_ref,
        nick: response.data.nick,
        name: response.data.name,
        surname: response.data.surname,
      }
      localStorage.setItem('userTokens', JSON.stringify({token: userInfo.value.token, refreshToken: userInfo.value.refreshToken, userId: userInfo.value.userId})) // нужно для того, чтобы запомнить состояние пользователя
      funcEmit(); //вызываем функцию, переданную из компонента, для показа главной страницы после успешной регистрации/авторизации
      console.log(userInfo);
    }
    catch (err) {
      if (err.response.status === 401) {
        error.value = 'Неправильный логин или пароль'
      }
    }
  }

  // переменная для переключения шаблонов авторизации динамически
  const currentComponentName = ref('LogIn');

  return { singup, singIn, userInfo, error, currentComponentName }
})
