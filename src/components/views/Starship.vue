<template>
  <main>
    <div class="jumbotron justify-content-center align-items-center">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="col-auto mx-auto">
              <router-link to="/">
                <img :src="require(`@/assets/images/logo.png`)" alt="Star Wars Logo" id="logo" />
              </router-link>
            </div>
            <div class="row">
              <div class="col-auto mx-auto">
                <img
                  :src="require(`@/assets/images/starship-${Math.ceil(Math.random() * 6)}.jpg`)"
                  alt="Star Wars Logo"
                  width="700"
                  height="400"
                />
              </div>
            </div>
            <h2 class="card-title" id="img-text">&#8261; {{starship && starship.name}} &#8262;</h2>
          </div>
        </div>
      </div>
    </div>

    <Spinner v-if="starship === null" />
    
    <article id="starship-article" class="mb-5 mt-md-5">
      <div class="container" v-if="starship">
        <h2 class="card-title">{{starship && starship.name}}</h2>

        <p class="lead text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus aut cumque saepe labore cupiditate repudiandae officiis excepturi nesciunt ab vel repellat qui ad necessitatibus nostrum, magni inventore molestiae ut quas esse officia odit veritatis minus! Corrupti reiciendis vitae, quia accusantium laudantium possimus similique obcaecati. Earum accusantium dolorem sapiente dolorum maxime voluptate officiis, dignissimos expedita libero, temporibus, autem laudantium tempora iste.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus aut cumque saepe labore cupiditate repudiandae officiis excepturi nesciunt ab vel repellat qui ad necessitatibus nostrum, magni inventore molestiae ut quas esse officia odit veritatis minus! Corrupti reiciendis vitae, quia accusantium laudantium possimus similique obcaecati. Earum accusantium dolorem sapiente dolorum maxime voluptate officiis, dignissimos expedita libero, temporibus, autem laudantium tempora iste
        </p>
        <p class="lead text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi odit voluptatem dolor, eum quod nam sapiente aut, quisquam quis quos sequi doloremque impedit, quia praesentium repellat rem eos amet molestiae. Temporibus repudiandae alias laborum cupiditate, beatae illo inventore magnam rerum excepturi dicta tempore non itaque quis. Nostrum officia quae distinctio veritatis corrupti consectetur esse dolorem sint fuga voluptatem tempore, sapiente ipsam vitae dignissimos molestiae asperiores cum ab alias quisquam officiis aliquid. Alias ex dolor eaque consectetur fuga deserunt, non error eos molestiae, voluptatibus asperiores sed! Deserunt sit reprehenderit neque fugiat distinctio adipisci, assumenda hic quisquam minus architecto deleniti earum laborum.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus aut cumque saepe labore cupiditate repudiandae officiis excepturi nesciunt ab vel repellat qui ad necessitatibus nostrum, magni inventore molestiae ut quas esse officia odit veritatis minus! Corrupti reiciendis vitae, quia accusantium laudantium possimus similique obcaecati. Earum accusantium dolorem sapiente dolorum maxime voluptate officiis, dignissimos expedita libero, temporibus, autem laudantium tempora iste
        </p>
        <p
          class="lead text-justify"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio modi numquam et inventore reprehenderit veritatis. Dolore atque tenetur, itaque quo corporis nihil mollitia nemo quis iure impedit, doloremque eos repellendus?</p>
      </div>
    </article>
    <div class="container-fluid" v-if="starship">
      <div class="row">
        <div class="col-5 col-md-4 col-lg-3 mx-auto">
          <router-link to="/starships" class="text-decoration-none">
            <button class="btn btn-outline-secondary btn-lg btn-block">Recently Viewed Ships</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <hr class="my-5" v-if="starship" />
    </div>
  </main>
</template>


<script>
import axios from "axios";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "starship",
  components: {
    Spinner
  },
  data() {
    return {
      starship: null,
      errors: []
    };
  },
  mounted() {
    axios
      .get(`https://swapi.co/api/starships/${this.$route.params.id}`)
      .then(response => {
        this.starship = response.data;
      })
      .catch(error => {
        this.errors.push(error);
      });
  }
};
</script>


<style scoped>
.jumbotron {
  background-image: url("./../../assets/images/hero-banner.jpg");
  height: 700px;
  background-position: 65% 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

#logo {
  height: 48px;
}

#img-text {
  position: absolute;
  top: 28rem;
  left: 100px;
  color: white;
  text-transform: uppercase;
  margin: auto;
}

@media (min-width: 1200px) {
  /* .container {
    max-width: 750px;
  } */
}

@media only screen and (max-width: 400px) {
  /* img {
    width: 300px;
    height: 200px;
  } */
}
</style>
