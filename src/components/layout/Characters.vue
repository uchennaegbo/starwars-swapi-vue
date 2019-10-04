<template>
  <main>
    <!-- Popular Characters -->
    <Header @searching="search($event)" />

    <article id="popular-characters" class="mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h2 class="font-weight-bolder">StarWars Characters</h2>
          </div>
          <div class="col-lg-1 col-sm-3 col-md-2 col-4 mt-1 mx-auto divider"></div>
        </div>

        <div class="mt-5">
          <b-form inline>
            <label class="mr-sm-3 text-uppercase" for="inline-form-custom-select-pref">Filter:</label>
            <b-form-select
              :isSelected="isGenderSelected"
              class="mb-2 mr-sm-2 mb-sm-0"
              :value="2"
              :options="genderOptions"
              id
            ></b-form-select>

            <label class="mr-sm-3 ml-sm-5 text-uppercase" for="inline-form-custom-select-pref">View:</label>
            <b-form-select class="mb-2 mr-sm-2 mb-sm-0" :value="1" :options="displayOptions" id></b-form-select>
          </b-form>
        </div>
        <div class="row mt-5">
          <CharacterCard
            v-for="(character, index) in characters"
            :key="index"
            :index="index + 1"
            :character="character"
          ></CharacterCard>
        </div>
        <Spinner v-if="characters === null" />
        <Pagination :meta="meta" :navigate="navigate" v-if="characters" />
        <!-- <Pagination /> -->
      </div>
    </article>
  </main>
</template>

<script>
import getCharacters from "../../utils/get.characters.js";
import CharacterCard from "../CharacterCard.vue";
import Spinner from "../Spinner.vue";
import Pagination from "../Pagination.vue";
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "Characters",
  created() {
    getCharacters().then(characters => (this.characters = characters));
  },
  data() {
    return {
      characters: null,
      characters2: null,
      meta: null,
      errors: [],
      genderOptions: ["Male", "Female", "N/A"],
      displayOptions: ["Grid", "Flex"],
      isGenderSelected: true
    };
  },
  methods: {
    search(search) {
      if (search.trim() === "") {
        this.characters = this.characters2;
        return;
      }
      axios
        .get(`https://swapi.co/api/people/?search=${search}`)
        .then(response => {
          this.characters = response.data.results;
        })
        .catch(error => {
          this.errors.push(error);
        });
    },
    navigate(url) {
      axios
        .get(url)
        .then(response => {
          this.characters = response.data.results;
          this.charactersCopy = response.data.results;
          this.meta = {
            next: response.data.next,
            previous: response.data.previous,
            count: response.data.count,
            current: response.config.url[response.config.url.length - 1]
          };
        })
        .catch(error => {
          this.errors.push(error);
        });

      this.isGenderSelected = true;
    },
    select($event) {
      let selected = JSON.stringify($event.target.value);

      if ($event.target.value == "Select...") {
        this.characters = this.charactersCopy;
        return;
      }

      if ($event.target.value !== "Select...") {
        this.isGenderSelected = false;
      }

      this.characters = this.charactersCopy.filter(
        character => JSON.stringify(character.gender) === selected
      );
    }
  },
  mounted() {
    axios
      .get(`https://swapi.co/api/people`)
      .then(response => {
        this.characters = response.data.results;
        this.characters2 = response.data.results;
        this.meta = {
          next: response.data.next,
          previous: response.data.previous,
          count: response.data.count,
          current: "1"
        };
      })
      .catch(error => {
        this.errors.push(error);
      });
  },
  components: {
    CharacterCard,
    Pagination,
    Header,
    Spinner
  }
};
</script>

<style scoped>
</style>
