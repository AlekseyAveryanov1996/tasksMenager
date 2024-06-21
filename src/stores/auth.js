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

  const singup = async (payload) => {
    try {
      let response = await axios.post(`http://5.35.86.160:3000/users/`, JSON.stringify(payload), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      userInfo.value = {
        token: response.idToken,
        email: response.email,
        userId: response.localId,
        refreshToken: response.refreshToken,
      }
      console.log(response);
    }
    catch (err) {
      console.log('Ошибка', err);
    }
    // loader.value = false;
  }

  return { singup, userInfo, }
})
