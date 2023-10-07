<template>
  <form class="order-wrapper">
    <h3>Форма добавления заказа</h3>
    <div class="order-inputs">
      <input
        @input="enterNameInput"
        v-model="nameInput"
        placeholder="Введите ваше имя"
        type="text"
      />
      <input
        @input="enterAddressInput"
        v-model="addressInput"
        placeholder="Введите ваш адрес"
        type="text"
      />
      <input v-model="commentsInput" placeholder="Комментарий" type="text" />
      <div class="error error-name" v-if="isErrorName">
        Имя должно быть не пустым
      </div>
      <div class="error error-password" v-if="isErrorAddress">
        Адрес должен быть не пустым
      </div>
    </div>
    <button @click.prevent="checkInput" class="btn">Добавить заказ</button>
  </form>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { checkUser } from "../helpers/helpers";
import { useServerStore } from "../stores/server";
const router = useRouter();

const server = useServerStore();

const nameInput = ref("");
const addressInput = ref("");
const commentsInput = ref("");

const isChecked = ref(false);
const isTouched = ref(false);

const isErrorName = ref(false);
const isErrorAddress = ref(false);

onMounted(() => {
  checkUser(server, router);
  server.user !== null
    ? (nameInput.value = server.user[0].name)
    : (nameInput.value = "");
});

function checkInput() {
  if (nameInput.value.length && addressInput.value.length) {
    isChecked.value = true;
    server.addOrder(nameInput.value, addressInput.value, commentsInput.value);
    router.push({ path: "/thanx" });
  } else {
    if (!nameInput.value.length) {
      isErrorName.value = true;
    }
    if (!addressInput.value.length) {
      isErrorAddress.value = true;
    }
    isTouched.value = true;
  }
}

function enterNameInput() {
  if (isTouched.value && isErrorName.value) {
    isErrorName.value = false;
  }
}

function enterAddressInput() {
  if (isTouched.value && isErrorAddress.value) {
    isErrorAddress.value = false;
  }
}
</script>

<style lang="scss" scoped>
@import "Styles/_var.scss";
.order-wrapper {
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 40px;
  width: 340px;
  background-color: $colorAlto;
  border-radius: 20px;
  border: 1px solid $colorGreyNurse;

  .order-inputs {
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
