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

#app .bg-grey {
  background-color: #eee;
}

#app .card-elevated {
  box-shadow: -15px 15px 15px 0px #444;
}
</style>
