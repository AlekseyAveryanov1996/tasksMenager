<script setup>
  import Input from '@/components/customComponents/Input.vue';
  import Button from '@/components/customComponents/Button.vue';
  
  import { ref} from "vue";
  import { useAuthStore } from '../stores/auth.js'


  const emit = defineEmits(['toggleCurrentComponent']) // получаем родительские функции
  const user = ref('');
  const password = ref('');
  const changeForm = ref(true); //переменная отвечающая за смену форм авторизации

  const emailReg = ref();
  const passwordReg = ref();
  const nameReg = ref();
  const surNameReg = ref();
  const nickNameReg = ref();

  const authStore = useAuthStore();

  // Запрос регистрации
  const singup = async () => {
    await authStore.singup({name: nameReg.value, surname: surNameReg.value, nick: nickNameReg.value, email: emailReg.value, password: passwordReg.value}, () => {emit('toggleCurrentComponent')}) // передаем данные для отправки запроса из формы
  };

  //запрос авторизации
  const singin = async() => {
    await authStore.singIn({nick: user.value, password: password.value}, () => {emit('toggleCurrentComponent')});
  }

  //смена авторизации/регистрации
  function changeLogInLogOut() {
    authStore.error = ''; // стираем сообщение об ошибке при переключении
    changeForm.value = !changeForm.value;
  }

</script>

<template>
  <div class="inner">
    <div class="wrapper-form">
      <section v-if="changeForm" class="log"> <!-- Авторизация -->
        <div class="log__title">Авторизация в системе</div>
        <div class="error-message flex gap-[10px] items-center text-red-600 font-bold" v-if="authStore.error">
          <div class="error-message__icon text-[24px]">
            <i class="pi pi-exclamation-triangle"></i>
          </div>
          <div class="error-message__text">
            {{ authStore.error }}
          </div>
        </div>
        <form class="log__form log-form">
          <div class="log-form__header">
            <Input typeValue="text" title="Имя пользователя" v-model="user" colorTextClass="text-gray-50" icon="pi pi-user" />
            <Input typeValue="password"  title="Пароль" v-model="password" colorTextClass="text-gray-50" icon="pi pi-unlock"/>
          </div>
          <div class="log-form__bottom flex justify-center mt-[20px]">
            <div class="log-form__btns flex flex-col md:flex-row items-center gap-[10px]">
              <!-- <Button :click="() => logIn(user, password)" textBtn="Войти в систему"/> -->
              <Button :click="singin" textBtn="Войти в систему"/>
              <Button :click="changeLogInLogOut" textBtn="Регистрация в системе"/>
            </div>
          </div>
        </form>
      </section>
      <section v-else class="log"> <!-- Регистрация -->
        <div class="log__title">Регистрация в системе</div>
        <div class="error-message flex gap-[10px] items-center text-red-600 font-bold" v-if="authStore.error">
          <div class="error-message__icon text-[24px]">
            <i class="pi pi-exclamation-triangle"></i>
          </div>
          <div class="error-message__text">
            {{ authStore.error }}
          </div>
        </div>
        <form class="log__form log-form">
          <div class="log-form__header">
            <Input typeValue="text" title="Ваше Имя пользователя" v-model="nickNameReg" colorTextClass="text-gray-50" icon="pi pi-user" />
            <Input typeValue="e-mail" title="Ваш E-mail" v-model="emailReg" colorTextClass="text-gray-50" icon="pi pi-at" />
            <Input typeValue="text" title="Ваше Имя" v-model="nameReg" colorTextClass="text-gray-50" icon="pi pi-id-card" />
            <Input typeValue="text" title="Ваша Фамилия" v-model="surNameReg" colorTextClass="text-gray-50" icon="pi pi-id-card" />
            <Input typeValue="password" title="Ваш Пароль" v-model="passwordReg" colorTextClass="text-gray-50" icon="pi pi-unlock" />
          </div>
          <div class="log-form__bottom flex justify-center mt-[20px]">
            <div class="log-form__btns flex flex-col md:flex-row items-center gap-[10px]">
              <Button :click="singup" textBtn="Зарегистрироваться"/>
              <Button :click="changeLogInLogOut" textBtn="Авторизация в системе"/>
            </div>
            <div class="log-form__subscibe"></div>
          </div>
        </form>
      </section>
    </div>
  </div>
  
</template>

<style lang="stylus" scoped>
  .inner
    background: linear-gradient(92.28deg, #0b0a2c 0%, #453bb4 100%)
    display: flex
    justify-content: center
    align-items: center
    height: 100vh
  .wrapper-form
    margin-left: auto
    margin-right: auto
    max-width: 1920px
    padding: 0 20px
    width 100%
  .log
    display: flex
    justify-content: center
    max-width: 600px
    margin: 0 auto
    display: flex
    flex-direction: column
    gap: 20px
    &__title
      font-size: clamp(1.8rem, 3.3vw, 2.8rem);
      line-height 120%
      color: var(--colorText)
      text-align: center
  .log-form
    &__header
      display: flex
      flex-direction: column
      gap: 20px
</style>