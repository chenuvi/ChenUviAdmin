<script setup lang="ts">
import useLoading from "./hooks/useLoading";
import useVisible from "./hooks/useVisible";
const { isLoading, loadingWrapper } = useLoading();
const { visible, toggleVisible } = useVisible();
const getData = () => {
  loadingWrapper(
    new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    })
  );
};
</script>

<template>
  <a-row type="flex" align="middle" style="min-width: 800px">
    <a-col :span="8">
      <a-button size="large" :loading="isLoading" v-if="visible"
        >a button</a-button
      >
    </a-col>
    <a-col :span="4">
      <a-button shape="round" size="small" @click="getData">enter loading</a-button>
    </a-col>
    <a-col :span="2">
      <a-switch :checked="visible" @click="toggleVisible" />
    </a-col>
  </a-row>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
