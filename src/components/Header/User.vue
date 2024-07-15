<script setup>
  import axiosApiInstanse from "@/api";
  import { useAuthStore } from "@/stores/auth";
  import { computed, ref, onMounted} from "vue";

  const authStore = useAuthStore();
  const listsUsers = ref(null); // записываем сюда юзеров  

  const getUsers = async () => {
      try {
        let response = await axiosApiInstanse.get('http://5.35.86.160:3000/users/');
        listsUsers.value = response.data;
      }
      catch {
        console.log('Что-то пошло не так');
      }
    }

  onMounted(() => {
    getUsers();
  })

  const activeUser = computed(() => {
    if (listsUsers.value && listsUsers.value.length > 0) {
      return listsUsers.value.filter(user => user.id == authStore.userInfo.userId)[0]
    }
  })

  const getRole = computed(() => {
    if (activeUser?.role === 1) {
      return 'Администратор'
    } else {
      return 'Сотрудник'
    }
  })

</script>

<template>
  <div class="user-head">
    <div v-if="activeUser?.photo" class="user-head__photo">
      <img src="" alt="not-photo">
    </div>
    <div v-else class="user-head__photo">
      <img src="@/assets/images/not-photo.jpg" alt="not-photo">
    </div>
    <div class="user-head__info">
      <div v-if="activeUser" class="user-head__name user-head__item"><span>Пользователь:</span>
        <!-- {{ activeUser }} -->
        {{ activeUser?.name + ' ' + activeUser?.surname }}
      </div>
      <div class="user-head__status user-head__item">
        <span>Должность:
          {{ getRole }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
  .user-head
    display: flex;
    gap: 20px;
    &__photo
      width 60px
      height: 60px
      border-radius: 50%
      display: flex
      justify-content: center
      align-items: center
      border: 1px solid #585399
      overflow hidden
    &__info
      display: flex
      flex-direction: column
      gap: 10px
    &__item
      display: flex
      gap: 4px
</style>