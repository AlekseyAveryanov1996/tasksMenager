import { useAuthStore } from '@/stores/auth.js'
import axios from "axios";

axios.interceptors.request.use((config) => {
  const authStore = useAuthStore(); // получаем данные из стора
  config.headers.authorization = `Bearer ${authStore.userInfo.token}`; // добавляем в header токен
  return config; //возвращаем config
})