<template>
  <main>
    <article id class="mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h2 class="font-weight-bolder">StarWars Starships</h2>
          </div>
          <div class="col-lg-1 col-sm-3 col-md-2 col-4 mt-1 mx-auto divider"></div>
        </div>
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

export default {
  name: "Starships",
  data() {
    return {
      starships: [
        {
          name: "Ghost",
          url: "../../assets/images/starship-1.jpg",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          name: "Correllian Scout",
          url: "../../assets/images/starship-1.jpg",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          name: "Raven's Claw",
          url: "../../assets/images/starship-1.jpg",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          name: "Loronar E-9 Explorer",
          url: "../../assets/images/starship-1.jpg",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          name: "Outrider",
          url: "../../assets/images/starship-1.jpg",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          name: "Hellbringer",
          url: "../../assets/images/starship-1.jpg",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        }
      ]
    };
  },
  components: {
    StarshipCard,
    Pagination
  }
};
</script> 

<style scoped>
</style>