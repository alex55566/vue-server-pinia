<template>
  <div class="container">
    <div class="block">
      <Header></Header>
      <div class="main">
        <router-view />
        <div v-if="server.showLoader" class="loader">
          <Loader />
        </div>
        <div v-if="server.showError" class="error">
          <Error />
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script setup>
import Error from "./components/Error.vue";
import Header from "./components/Header.vue";
import Loader from "./components/Loader.vue";
import { useServerStore } from "./stores/server";
const server = useServerStore();
</script>

<style lang="scss" scoped>
@import "Styles/_var.scss";

.container {
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: $colorMercury;
}

.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;
  min-height: 100%;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  position: relative;
  max-width: 1440px;
  gap: 10px;
  padding: 0 50px;
}

.footer {
  height: 50px;
  width: 100%;
  background-color: $colorMattiseOpacity;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.loader {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
}

.error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  padding: 20px;
  text-align: center;
  z-index: 5;
  font-weight: 700;
  background-color: $colorTorchRed;
  color: $colorWhite;
  border-radius: 20px;
}
</style>
