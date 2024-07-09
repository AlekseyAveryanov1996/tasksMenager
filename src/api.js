import { useAuthStore } from '@/stores/auth.js'
import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    // если не авторизация и не регистрация
    if (config.url !== 'http://5.35.86.160:3000/users/' || config.url !== 'http://5.35.86.160:3000/users/auth/') {
      const authStore = useAuthStore(); // получаем данные из стора
      config.headers.authorization = `Bearer ${authStore.userInfo.token}`; // добавляем в header токен
    }
    return config; //возвращаем config
  }, 
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // если не авторизация и не регистрация
    if (error.request.responseURL !== 'http://5.35.86.160:3000/users/' || error.request.responseURL !== 'http://5.35.86.160:3000/users/auth/') {
      //Проверяем авторизован ли пользователь, если нет показываем компонент авторизации
      if (error.response.status === 401) {
        const authStore = useAuthStore(); // получаем данные из стора
        authStore.currentComponentName = 'LogIn';
      }
    }
    return Promise.reject(error);
  }
)