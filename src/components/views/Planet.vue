<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mt-5">
          <h2 class="font-weight-bolder">planet</h2>
        </div>
        <div class="col-lg-1 mt-1 mx-auto divider"></div>
        <div class="container">
          <Spinner v-if="planet === null" />
        </div>
      </div>

      <div class="container" v-if="planet">
        <div class="card mt-5" style="width: 23rem;">
          <img
            :src="require(`@/assets/images/planet-${Math.floor(Math.random()  * ( 5 - 1 ) + 1 )}.jpg`)"
            class="card-img-top"
            :alt="`Picture of ${planet && planet.name} planet`"
          />
          <div class="card-body" style="text-align:center">
            <h1 class="card-title lead">{{planet && planet.name}}</h1>

            <p class="text-muted">
              Climate:
              <small class="text-muted">{{planet && planet.climate }}</small>
            </p>
            <p class="text-muted">
              Population:
              <small class="text-muted">{{planet && planet.population }}</small>
            </p>

            <p class="text-muted">
              Diameter:
              <small class="text-muted">{{planet && planet.diameter}}</small>
            </p>

            <p class="text-muted">
              Orbital Period:
              <small class="text-muted">{{planet && planet.orbital_period}}</small>
            </p>

            <p class="text-muted">
              Terrain:
              <small class="text-muted">{{planet && planet.terrain}}</small>
            </p>

            <p class="text-muted">
              Rotation Period:
              <small class="text-muted">{{planet && planet.rotation_period}}</small>
            </p>
          </div>
        </div>
      </div>
      <div class="container mb-4">
        <router-link to="/planets">
          <button type="button" class="btn btn-secondary mt-4">back</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import axios from "axios";

export default {
  components: {
    Spinner
  },
  data() {
    return {
      planet: null,
      errors: []
    };
  },
  mounted() {
    axios
      .get(`https://swapi.co/api/planets/${this.$route.params.id}/`)
      .then(response => {
        this.planet = response.data;
      })
      .catch(error => {
        this.errors.push(error);
      });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
