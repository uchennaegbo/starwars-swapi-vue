<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.bg-grey {
  background-color: #eee;
}
</style>
