<template>
  <main>
    <!-- Popular Characters -->
    <article id="popular-characters" class="mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h2 class="font-weight-bolder">StarWars Characters</h2>
          </div>
          <div class="col-lg-1 mt-1 mx-auto divider"></div>
        </div>
        <div class="row mt-5">
          <CharacterCard
            v-for="(character, index) in characters"
            :key="index"
            :character="character"
          ></CharacterCard>
        </div>
        <!-- Pagination -->
        <div class="row">
          <div class="col-4 mx-auto pt-5">
            <nav aria-label="Page navigation example">
              <ul class="pagination pagination-lg justify-content-center">
                <li class="page-item">
                  <a class="page-link text-dark" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link text-dark" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link text-dark" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link text-dark" href="#">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link text-dark" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import CharacterCard from "../CharacterCard.vue";

export default {
  name: "Characters",
  data() {
    return {
      characters: [
        {
          name: "Luke Skywalker",
          url: "../../assets/images/character-1.jpg",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"
        },
        {
          name: "Darth Vader",
          url: "../../assets/images/character-1.jpg",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"
        },
        {
          name: "Princess Leia",
          url: "../../assets/images/character-1.jpg",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"
        },
        {
          name: "Han Solo",
          url: "../../assets/images/character-1.jpg",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"
        }
      ]
    };
  },
  components: {
    CharacterCard
  }
};
</script> 

<style scoped>
</style>