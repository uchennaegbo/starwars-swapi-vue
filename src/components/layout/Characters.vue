<template>
  <main>
    <!-- Popular Characters -->
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
              class="mb-2 mr-sm-2 mb-sm-0"
              :value="2"
              :options="{ '1': 'Male', '2': 'Female', '3': 'Robot' }"
              id
            ></b-form-select>

            <label class="mr-sm-3 ml-sm-5 text-uppercase" for="inline-form-custom-select-pref">View:</label>
            <b-form-select
              class="mb-2 mr-sm-2 mb-sm-0"
              :value="1"
              :options="{ '1': 'Grid', '2': 'List'}"
              id
            ></b-form-select>
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
        <Pagination />
      </div>
    </article>
  </main>
</template>

<script>
import CharacterCard from "../CharacterCard.vue";
import Pagination from "../Pagination.vue";
import axios from "axios";

export default {
  name: "Characters",
  created() {
    axios
      .get(`https://swapi.co/api/people?page=1`)
      .then(res => {
        this.characters = res.data.results.map(character => {
          const slug = character.name.toLowerCase().replace(" ", "-");
          const gender =
            character.gender === "n/a" ? "robot" : character.gender;
          return {
            name: character.name,
            slug: slug,
            birth_year: character.birth_year,
            gender: gender
          };
        });
      })
      .catch();
  },
  data() {
    return {
      characters: []
    };
  },
  components: {
    CharacterCard,
    Pagination
  }
};
</script> 

<style scoped>
</style>