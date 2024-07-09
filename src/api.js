import { useAuthStore } from '@/stores/auth.js'
import axios from "axios";

axios.interceptors.request.use((config) => {
  if (config.url !== 'http://5.35.86.160:3000/users/' || config.url !== 'http://5.35.86.160:3000/users/auth/') {
    const authStore = useAuthStore(); // получаем данные из стора
    config.headers.authorization = `Bearer ${authStore.userInfo.token}`; // добавляем в header токен
  }
  return config; //возвращаем config
})