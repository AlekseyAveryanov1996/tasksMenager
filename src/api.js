import { useAuthStore } from '@/stores/auth.js'
import axios from "axios";

const axiosApiInstanse = axios.create();

axiosApiInstanse.interceptors.request.use(
  (config) => {
    // если не авторизация
    if (config.url !== 'http://5.35.86.160:3000/users/auth' && config.url !== 'http://5.35.86.160:3000/users/refresh/') {
      const authStore = useAuthStore(); // получаем данные из стора
      config.headers.authorization = `Bearer ${authStore.userInfo.token}`; // добавляем в header токен
    }
    return config; //возвращаем config
  }, 
);

axiosApiInstanse.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // если не авторизация
    if (error.request.responseURL !== 'http://5.35.86.160:3000/users/auth/') {
      //Проверяем авторизован ли пользователь, если нет показываем компонент авторизации
      if (error.response.status === 500) {
        const authStore = useAuthStore(); // получаем данные из стора
        try {
          //делаем новый запрос для обновления токенов
          const newTokens = await axios.get('http://5.35.86.160:3000/users/refresh/', {
            headers: {
              'authorization': `Bearer ${JSON.parse(localStorage.getItem('userTokens')).refreshToken}` // передаем refresh токент
            }
          })
          // обновляем сторе новыми токенами
          authStore.userInfo.token = newTokens.data.token_acc;
          authStore.userInfo.refreshToken = newTokens.data.token_ref;
          localStorage.setItem('userTokens', JSON.stringify({token: newTokens.data.token_acc, refreshToken: newTokens.data.token_ref}))
          return axiosApiInstanse.request(error.config); // делаем еще раз запрос с новыми токенами в случае ошибки
        } 
        catch(error) {
          authStore.currentComponentName = 'LogIn'; // если refresh тоже закончился, то выкидываем на авторизацию.
        }
      }
    }
    return Promise.reject(error);
  }
)

export default axiosApiInstanse;