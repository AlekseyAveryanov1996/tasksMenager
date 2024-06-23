import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter, useRoute } from 'vue-router'


export const useRoterStore = defineStore('routerStore', () => {
  let thisRoute = ref('/');
  const router = useRouter()
  const route = useRoute()

  router.afterEach((to, from, failure) => {
    thisRoute = route.fullPath;
    // console.log(thisRoute);
  })

  return { thisRoute }
})