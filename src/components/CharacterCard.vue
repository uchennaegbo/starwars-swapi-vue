<template>
  <div class="col-sm-6 mb-5">
    <div class="card bg-grey shadow-lg">
      <div class="row no-gutters">
        <div class="col-lg-7">
          <img :src="characterAvatar" class="card-img" :alt="character.name" />
        </div>
        <div class="col-lg-5">
          <div class="card-body">
            <h3 class="card-title font-weight-bold">{{ character.name }}</h3>
            <p class="card-text">Gender: {{ character.gender }}</p>
            <p class="card-text">Year of Birth: {{ character.birth_year }}</p>

            <router-link :to="{ name: 'character', params: { id: character.url.match(/\d+/)[0]}}">
              <a class="read-more-link text-dark text-decoration-none font-weight-bold mr-2 mb-3">{{ readMoreText }}</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterCard",
  data() {
    return {
      readMoreText: "Read more"
    };
  },
  computed: {
    characterAvatar() {
      try {
        return require(`@/assets/images/character-${this.character.slug}.jpg`);
      } catch (err) {
        return require(`@/assets/images/character-${Math.ceil(
          Math.random() * 4
        )}.jpg`);
      }
    }
  },
  props: ["character", "index"]
};
</script>

<style scoped>
.read-more-link {
  border-bottom: 2px solid #333;
  display: inline-block;
}

img {
  height: 18rem;
  width: 18rem;
}
</style>
