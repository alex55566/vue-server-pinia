<template>
  <div class="thanx">
    <h3>Спасибо за заказ!</h3>
    <div>Мы свяжемся с Вами в ближайшее время!</div>
    <RouterLink class="link" to="/tables">Перейти ко всем заказам</RouterLink>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { checkUser } from "../helpers/helpers";
import { useServerStore } from "../stores/server";
const router = useRouter();

const server = useServerStore();
onMounted(() => {
  checkUser(server, router);
});
</script>

<style lang="scss" scoped>
@import "Styles/_var.scss";
.thanx {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding: 40px;
  width: 340px;
  background-color: $colorAlto;
  border-radius: 20px;
  border: 1px solid $colorGreyNurse;
  text-align: center;
  font-weight: 700;
  .link {
    border-bottom: 1px solid $colorToryBlue;
  }
}
</style>
