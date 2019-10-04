<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mt-5">
          <h2 class="font-weight-bolder">Character</h2>
        </div>
        <div class="col-lg-1 mt-1 mx-auto divider"></div>
        <div class="container">
          <Spinner v-if="character === null" />
        </div>
      </div>

      <div class="container" v-if="character">
        <div class="card mt-5" style="width: 23rem;">
          <img
            :src="require(`@/assets/images/character-${Math.floor(Math.random()  * ( 5 - 1 ) + 1 )}.jpg`)"
            class="card-img-top"
            :alt="`Picture of ${character && character.name} character`"
          />
          <div class="card-body" style="text-align:center">
            <h1 class="card-title lead">{{character && character.name}}</h1>

            <p class="text-muted">
              Gender:
              <small class="text-muted">{{character && character.gender }}</small>
            </p>
            <p class="text-muted">
              D.O.B:
              <small class="text-muted">{{character && character.birth_year }}</small>
            </p>

            <p class="text-muted">
              Complexion:
              <small class="text-muted">{{character && character.skin_color}}</small>
            </p>

            <p class="text-muted">
              Eye color:
              <small class="text-muted">{{character && character.eye_color}}</small>
            </p>

            <p class="text-muted">
              Height:
              <small class="text-muted">{{character && character.height}}cm</small>
            </p>

            <p class="text-muted">
              Weight:
              <small class="text-muted">{{character && character.mass}}kg</small>
            </p>
          </div>
        </div>
      </div>
      <div class="container mb-4">
        <router-link to="/characters">
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
      character: null,
      errors: []
    };
  },
  mounted() {
    axios
      .get(`https://swapi.co/api/people/${this.$route.params.id}/`)
      .then(response => {
        this.character = response.data;
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
