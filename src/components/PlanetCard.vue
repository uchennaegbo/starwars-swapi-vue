<template>
  <div class="col-sm-6 col-md-6 col-lg-4 mb-5">
    <router-link class="read-more text-decoration-none" v-bind:to="{ name: 'planet', params: { id: planet.url.match(/\d+/)[0]}}">
      <div class="card shadow bg-dark text-white">
        <img
          :src="require(`@/assets/images/planet-${Math.ceil(Math.random() * 3)}.jpg`)"
          left
          alt="Star Wars Logo"
          class="card-img"
        />
        <div class="card-img-overlay card-text">
          <h5 class="text-lg-left">
            {{planet.name}}
            <br />
          </h5>
          <span>
            Climate: {{planet.climate}}
            <br />
          </span>
          <span>Population: {{planet.population}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PlanetCard",
  components: {
    // [Glide.name]: Glide,
    // [GlideSlide.name]: GlideSlide
  },
  props: ["planet"]
};
</script>


<style scoped>
.planet--image {
  width: 100%;
}

.card-text {
  position: relative;
  bottom: 100px;
  font-size: 1em;
}
</style>
