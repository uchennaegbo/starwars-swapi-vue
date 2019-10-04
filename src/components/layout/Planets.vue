<template>
  <main>
    <Header @searching="search($event)" />

    <article id class="mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h2 class="font-weight-bolder">StarWars Planets</h2>
          </div>
        </div>
        <div class="col-lg-1 col-sm-3 col-md-2 col-4 mt-1 mb-4 mx-auto divider"></div>
        <Spinner v-if="planets === null" />
        <div class="row mt-5">
          <PlanetCard
            v-for="(planet, index) in planets"
            :key="index"
            :index="index + 1"
            :planet="planet"
          ></PlanetCard>
        </div>
        <Pagination />
      </div>
    </article>
  </main>
</template>

<script>
import PlanetCard from "../PlanetCard.vue";
import Pagination from "../Pagination.vue";
import Spinner from "../Spinner.vue";
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "Planets",
  data() {
    return {
      planets: null,
      planets2: null,
      errors: []
    };
  },
  mounted() {
    axios
      .get(`https://swapi.co/api/planets`)
      .then(response => {
        this.planets = response.data.results.slice(0, 6);
        this.planets2 = response.data.results.slice(0, 6);
      })
      .catch(error => this.errors.push(error));
  },
  methods: {
    search(search) {
      if (search.trim() === "") {
        this.planets = this.planets2;
        return;
      }

      axios
        .get(`https://swapi.co/api/planets/?search=${search}`)
        .then(response => {
          this.planets = response.data.results;
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  },
  components: {
    PlanetCard,
    Pagination,
    Spinner,
    Header
  }
};
</script>

<style scoped>
</style>
