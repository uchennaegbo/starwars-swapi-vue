<template>
  <div class="col-sm-6 col-md-6 col-lg-4 mb-5">
    <div class="card bg-grey shadow">
      <img
        :src="require(`@/assets/images/starship-${Math.floor(Math.random()  * ( 7 - 1 ) + 1 )}.jpg`)"
        class="card-img-top"
        :alt="`Picture of ${starship.name} starship`"
      />
      <div class="card-body">
        <h5 class="card-title font-weight-normal">{{starship.name}}</h5>
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
  props: ["starship"]
};
</script>

<style scoped>
img {
  max-height: 200px;
}
.card {
  height: 22rem;
  width: 22rem;
}
</style>
