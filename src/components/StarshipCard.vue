<template>
  <div class="col-sm-6 col-md-6 col-lg-4 mb-5">
    <div class="card bg-grey card-elevated">
      <img
        :src="require(`@/assets/images/starship-${index}.jpg`)"
        class="card-img-top"
        :alt="`Picture of ${starship.name} starship`"
      />
      <div class="card-body">
        <h3 class="card-title font-weight-normal">{{starship.name}}</h3>
        <p class="card-text">{{ starship.description }}</p>
        <a href="#" class="btn btn-outline-secondary float-right">
          {{ readMoreText }}
          <i class="fas fa fa-angle-right ml-2" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarshipCard",
  data() {
    return {
      readMoreText: "Read more"
    };
  },
  props: ["starship", "index"]
};
</script>

<style scoped>
img {
  height: 250px;
}
</style>