<script setup>

</script>

<template>
  <div class="user-head">
    <div class="user-head__photo">
      <img src="@/assets/images/not-photo.jpg" alt="not-photo">
    </div>
    <div class="user-head__info">
      <div class="user-head__name user-head__item"><span>Пользователь:</span>Аверьянов Алексей Андреевич</div>
      <div class="user-head__status user-head__item"><span>Должность:</span>Администратор</div>
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