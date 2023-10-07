<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Номер(id)</th>
          <th>Имя клиента</th>
          <th>
            <button class="btn sort" @click="server.sortData('address')">
              Адрес
            </button>
          </th>
          <th>
            <button class="btn sort" @click="server.sortData('date')">
              Дата заказа
            </button>
          </th>
          <th>Статус</th>
          <th>Комментарий</th>
          <th v-if="typeUser === 'ADMIN'">Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in server.orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.name }}</td>
          <td>{{ order.address }}</td>
          <td>{{ order.date }}</td>
          <td>{{ order.status }}</td>
          <td>{{ order.comment }}</td>
          <td class="btn-wrapper" v-if="typeUser === 'ADMIN'">
            <button
              :disabled="order.status === 'Выполнен'"
              @click="server.updateOrder(order.id)"
              class="btn"
            >
              Изменить статус
            </button>
            <button @click="confirmDelete(order.id)" class="btn">
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <Teleport to="body">
      <div v-if="showPopup" class="wrapper-popup">
        <div class="popup">
          <h3>Вы действительно хотите удалить данный заказ?</h3>
          <div class="btn-wrapper">
            <button class="btn" @click="deleteOrder">Да</button>
            <button class="btn" @click="deleteCancel">Нет</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { checkUser } from "../helpers/helpers";
import { useServerStore } from "../stores/server";
const router = useRouter();

const typeUser = ref(null);

const showPopup = ref(false);
const currentId = ref(null);

const server = useServerStore();

function confirmDelete(id) {
  showPopup.value = true;
  currentId.value = id;
}

function deleteOrder() {
  server.deleteOrder(currentId.value);
  currentId.value = null;
  showPopup.value = false;
}

function deleteCancel() {
  showPopup.value = false;
  currentId.value = null;
}

onMounted(() => {
  checkUser(server, router);
  typeUser.value =
    server.user !== null && server.user[0].role === "ADMIN" ? "ADMIN" : "USER";
  server.getOrders();
});
</script>

<style lang="scss" scoped>
@import "Styles/_var.scss";
table {
  border-collapse: collapse;
  border: 1px solid grey;
  .sort {
    width: 80%;
  }
  .btn-wrapper {
    display: flex;
    gap: 15px;
  }
}

th,
td {
  border: 1px solid grey;
}

table {
  border: 3px solid grey;
}

th,
td {
  padding: 10px 15px;
}

.wrapper-popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 100;
}

.popup {
  display: flex;
  flex-direction: column;
  gap: 30px;
  gap: 60px;
  padding: 40px;
  width: 340px;
  background-color: $colorAlto;
  border-radius: 20px;
  border: 1px solid $colorGreyNurse;
  z-index: 200;
  .btn-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      min-width: 100px;
    }
  }
}
</style>
