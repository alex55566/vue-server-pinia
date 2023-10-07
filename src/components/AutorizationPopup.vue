<template>
  <form class="popup-wrapper">
    <div class="popup-inputs">
      <input
        @input="enterNameInput"
        v-model="nameInput"
        placeholder="Имя пользователя"
        type="text"
      />
      <input
        @input="enterPasswordInput"
        v-model="passwordInput"
        placeholder="Пароль"
        type="text"
      />
      <div class="error error-name" v-if="isErrorName">
        Имя должно быть не пустым
      </div>
      <div class="error error-password" v-if="isErrorPassword">
        Пароль должен содержать более 8 символов
      </div>
      <div class="error error-user" v-if="server.emptyUser">
        Такого пользователя не существует
      </div>
    </div>
    <button @click.prevent="checkInput" class="btn">Войти</button>
  </form>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { checkUser } from "../helpers/helpers";
import { useServerStore } from "../stores/server";
const router = useRouter();

const server = useServerStore();

const nameInput = ref("");
const passwordInput = ref("");

const isChecked = ref(false);
const isTouched = ref(false);

const isErrorName = ref(false);
const isErrorPassword = ref(false);

watch(
  () => server.user,
  () => {
    if (server.user) {
      router.push({ path: "tables" });
    }
  }
);

onMounted(() => {
  checkUser(server, router);
});

function checkInput() {
  if (nameInput.value.length && passwordInput.value.length > 8) {
    isChecked.value = true;
    server.getUsers(nameInput.value, passwordInput.value);
  } else {
    if (!nameInput.value.length) {
      isErrorName.value = true;
    }
    if (passwordInput.value.length <= 8) {
      isErrorPassword.value = true;
    }
    isTouched.value = true;
  }
}

function enterNameInput() {
  if (isTouched.value && isErrorName.value) {
    isErrorName.value = false;
  }
  if (server.emptyUser) {
    server.resetEmptyUser();
  }
}

function enterPasswordInput() {
  if (isTouched.value && isErrorPassword.value) {
    isErrorPassword.value = false;
  }
  if (server.emptyUser) {
    server.resetEmptyUser();
  }
}
</script>

<style lang="scss" scoped>
@import "Styles/_var.scss";
.popup-wrapper {
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 40px;
  width: 340px;
  background-color: $colorAlto;
  border-radius: 20px;
  border: 1px solid $colorGreyNurse;

  .popup-inputs {
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
  }

  .error {
    position: absolute;
    color: $colorTorchRed;
    font-weight: 700;
    text-align: center;
    &.error-name {
      bottom: 40px;
    }
    &.error-password,
    &.error-user {
      bottom: -45px;
    }
  }
  input {
    padding: 5px 10px;
    border-radius: 10px;
    border: unset;
  }
}
</style>
