<template>
  <div class="header">
    <div class="header-inner">
      <div class="left-side">
        <button
          :disabled="server.user === null"
          :class="[
            'btn',
            router.currentRoute.value.path === '/tables' ? 'active' : '',
          ]"
        >
          <RouterLink to="/tables">Все заказы</RouterLink>
        </button>
        <button
          :disabled="server.user === null"
          :class="[
            'btn',
            router.currentRoute.value.path === '/neworder' ? 'active' : '',
          ]"
        >
          <RouterLink to="/neworder">Добавить заказ</RouterLink>
        </button>
      </div>
      <div class="right-side">
        <div class="quantity" v-if="server.user !== null">
          Количество заказов: <span>{{ server.orderQuantity }}</span>
        </div>
        <div>{{ server.user === null ? "Гость" : server.user[0].name }}</div>
        <button :disabled="server.user === null" class="btn">
          <RouterLink @click="server.exitUser()" to="/">Выйти</RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useServerStore } from "../stores/server";
const router = useRouter();
const server = useServerStore();
</script>

<style lang="scss" scoped>
@import "Styles/_var.scss";
.header {
  width: 100%;
  background-color: $colorMattiseOpacity;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: $colorWhite;
  &-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: auto;
    padding: 20px 50px;
  }
  .left-side,
  .right-side {
    display: flex;
    align-items: center;
    gap: 10px;
    .quantity {
      font-weight: 700;
      span {
        color: $colorTorchRed;
      }
    }
  }
}
</style>
