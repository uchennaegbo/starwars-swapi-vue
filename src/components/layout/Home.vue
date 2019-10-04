<template>
  <main>
    <Header @searching="search($event)" />

    <!-- Popular Starships -->
    <article id="popular-starships" class="mb-5 mt-md-5">
      <Spinner v-if="starships === null" />

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
            <router-link to="/starships">
              <button class="btn btn-outline-secondary btn-block btn-lg">View More</button>
            </router-link>
          </div>
        </div>
      </div>
    </article>

    <!-- Popular Planets -->
    <article id="popular-starships" class="mb-5 mt-md-5">
      <Spinner v-if="planets === null" />

      <div class="container">
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h2 class="font-weight-bolder">Popular Planets</h2>
          </div>
          <div class="col-lg-1 mt-1 mx-auto divider"></div>
        </div>
        <div class="row mt-5">
          <PlanetCard
            v-for="(planet, index) in planets"
            :key="index"
            :index="index + 1"
            :planet="planet"
          ></PlanetCard>
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
      <Spinner v-if="characters === null" />

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
            <router-link to="/characters">
              <button class="btn btn-outline-secondary btn-block btn-lg">View More</button>
            </router-link>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import getCharacters from "../../utils/get.characters.js";
import CharacterCard from "../CharacterCard.vue";
import StarshipCard from "../StarshipCard.vue";
import PlanetCard from "../PlanetCard.vue";
import Spinner from "../Spinner.vue";
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "Home",
  methods: {
    search(input) {
      if (input.trim() === "") {
        this.starships = this.starships2;
        this.planets = this.planets2;
        this.characters = this.characters2;
        return;
      }

      axios
        .get(`https://swapi.co/api/people/?search=${input}`)
        .then(res => (this.characters = res.data.results))
        .catch(error => this.errors.push(error));

      axios
        .get(`https://swapi.co/api/starships/?search=${input}`)
        .then(res => (this.starships = res.data.results))
        .catch(error => this.errors.push(error));
    }
  },
  mounted() {
    getCharacters()
      .then(res => {
        this.characters = res.slice(0, 4);
        this.characters2 = res.slice(0, 4);
      })
      .catch(error => this.errors.push(error));

    axios
      .get(`https://swapi.co/api/planets`)
      .then(response => {
        this.planets = response.data.results.slice(0, 3);
        this.planets2 = response.data.results.slice(0, 3);
      })
      .catch(error => {
        this.errors.push(error);
      });

    axios
      .get(`https://swapi.co/api/starships`)
      .then(response => {
        this.starships = response.data.results.slice(0, 6);
        this.starships2 = response.data.results.slice(0, 6);
      })
      .catch(error => this.errors.push(error));
  },
  data() {
    return {
      starships: null,
      starships2: null,
      planets: null,
      planets2: null,
      characters: null,
      characters2: null,
      errors: []
    };
  },
  components: {
    StarshipCard,
    PlanetCard,
    CharacterCard,
    Header,
    Spinner
  }
};
</script>

<style scoped>
</style>
