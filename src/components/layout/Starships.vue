<template>
  <main>
    <Header @searching="search($event)" />

    <article id class="mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h2 class="font-weight-bolder">StarWars Starships</h2>
          </div>

        </div>
          <div class="col-lg-1 col-sm-3 col-md-2 col-4 mt-1 mb-4 mx-auto divider"></div>
        <Spinner v-if="starships === null" />
        <div class="row mt-5">
          <StarshipCard
            v-for="(starship, index) in starships"
            :key="index"
            :index="index + 1"
            :starship="starship"
          ></StarshipCard>
        </div>
        <Pagination />
      </div>
    </article>
  </main>
</template>

<script>
import StarshipCard from "../StarshipCard.vue";
import Pagination from "../Pagination.vue";
import Spinner from "../Spinner.vue";
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "Starships",
  data() {
    return {
      starships: null
    };
  },
  mounted() {
    axios
      .get(`https://swapi.co/api/starships`)
      .then(response => {
        console.log(response.data.results);

        this.starships = response.data.results.slice(0, 6);
        this.starships2 = response.data.results.slice(0, 6);
      })
      .catch(error => this.errors.push(error));
  },
  components: {
    StarshipCard,
    Pagination,
    Spinner,
    Header
  }
};
</script>

<style scoped>
</style>
