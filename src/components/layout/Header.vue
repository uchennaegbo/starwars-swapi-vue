<template>
  <header>
    <div class="overlay">
      <div class="container-fluid">
        <div class="row">
          <div id="site-logo" class="m-5">
            <a href="/">
              <img :src="logo" alt="Star Wars Logo" class />
            </a>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row text-center text-white" v-if="genericHeader">
          <div class="col-auto mx-auto" id="header-title">
            <h1 class>
              <img id="starwars-image-title" :src="logo" alt="Star Wars" class="pb-2" />
              Directory
            </h1>
          </div>
          <div class="col-12 mx-auto mb-5">
            <p id="header-title-tagline" class="mt-3">{{ tagline }}</p>
          </div>
          <div class="col-md-8 mx-auto">
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import logo from "../../assets/images/logo.png";

import SearchForm from "../SearchForm.vue";
export default {
  name: "Header",
  data() {
    return {
      tagline: "Your one stop shop for all things STAR WARS!!!",
      logo: logo,
      genericHeader: true
    };
  },
  components: {
    SearchForm
  }
};
</script> 

<style scoped>
header {
  background-image: url("../../assets/images/vortex.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 65% 100%;
  height: 700px;
}
h1 {
  font-size: 4rem;
  font-weight: 900;
  border-bottom: 5px solid #fff;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
}
#site-logo {
  height: 50px;
}
#site-logo img {
  height: 100%;
}
#starwars-image-title {
  height: 70px;
}
#header-title-tagline {
  font-size: 1.5rem;
}

@media only screen and (min-width: 960px) {
  #header-title {
    margin-top: 200px;
  }
}
</style>