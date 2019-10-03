<template>
  <div id="app">
    <!-- <Header /> -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 360px;
}

#app .bg-grey {
  background-color: #eee;
}

#app .card-elevated {
  box-shadow: -15px 15px 15px 0px #444;
}

#app .card-elevated:hover {
  box-shadow: -5px 5px 15px 0px #444;
}

#app .borderless {
  border: unset;
}

#app .divider {
  border-bottom: 7px solid #000;
}
</style>
