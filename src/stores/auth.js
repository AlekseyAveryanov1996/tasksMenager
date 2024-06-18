import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

// const API_KEY = 'AIzaSyBXAj6sWKSNP0LBNjWDj9bL2a0r9MzrzRg'

export const useAuthStore = defineStore('auth', () => {
  const userInfo = ref({
    token: '',
    email: '',
    userId: '',
    refreshToken: '',
  })

  // const error = ref('');
  // const loader = ref(false);

  const singup = async (payload) => {
    // error.value = '';
    // loader.value = true;
    console.log(payload);
    console.log(JSON.stringify(payload));
    try {
      let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, JSON.stringify(payload));
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
