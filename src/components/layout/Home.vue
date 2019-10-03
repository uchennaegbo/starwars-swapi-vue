<template>
  <main>
    <Header @searching="search($event)" />

    <!-- Popular Starships -->
    <article id="popular-starships" class="mb-5 mt-md-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h2 class="font-weight-bolder">Popular Starships</h2>
          </div>
          <div class="col-lg-1 mt-1 mx-auto divider"></div>
        </div>
        <div class="row mt-5">
          <StarshipCard
            v-for="(starship, index) in starships"
            :key="index"
            :index="index + 1"
            :starship="starship"
          ></StarshipCard>
        </div>
        <div class="row">
          <div class="col-5 col-md-4 col-lg-3 mx-auto">
            <button class="btn btn-outline-secondary btn-block btn-lg">View More</button>
          </div>
        </div>
      </div>
    </article>
    <!-- Popular Characters -->
    <article id="popular-characters" class="mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h2 class="font-weight-bolder">Popular Characters</h2>
          </div>
          <div class="col-lg-1 mt-1 mx-auto divider"></div>
        </div>
        <div class="row mt-5">
          <CharacterCard
            v-for="(character, index) in characters"
            :key="index"
            :index="index + 1"
            :character="character"
          ></CharacterCard>
        </div>
        <div class="row">
          <div class="col-5 col-md-4 col-lg-3 mx-auto">
            <button class="btn btn-outline-secondary btn-block btn-lg">View More</button>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import StarshipCard from "../StarshipCard.vue";
import CharacterCard from "../CharacterCard.vue";
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "Home",
  methods: {
    search(input) {
      if (input.trim() === "") {
        this.starships = this.starshipsCopy;
        this.characters = this.characters2;
        return;
      }
      axios
        .get(`https://swapi.co/api/people?search=${input}`)
        .then(res => (this.characters = res.data.results));
    }
  },
  mounted() {
    axios.get("https://swapi.co/api/people").then(res => {
      this.characters = res.data.results.slice(0, 4);
      this.characters2 = res.data.results.slice(0, 4);
    });
  },
  data() {
    return {
      starships: null,
      starshipsCopy: null,
      characters: null,
      characters2: null,
    };
  },
  components: {
    StarshipCard,
    CharacterCard,
    Header
  }
};
</script>

<style scoped>
</style>
