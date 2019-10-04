<template>
  <div class="col-sm-6 col-md-6 col-lg-4 mb-5">
    <div class="card bg-grey shadow">
      <img
        :src="require(`@/assets/images/starship-${Math.floor(Math.random()  * ( 7 - 1 ) + 1 )}.jpg`)"
        class="card-img-top"
        :alt="`Picture of ${starship.name} starship`"
      />
      <div class="card-body">
        <div class="mt-0">
          <h5 class="card-title font-weight-normal">{{starship.name}}</h5>
          <h6 class="card-text">{{ starship.model }}</h6>
          <span class="card-text">
            <b>Manufacturer :</b>
            {{starship.manufacturer}}
          </span>
        </div>
        <div class="mt-2 float-right read">
          <a href="#" class="btn btn-outline-secondary ">
            {{ readMoreText }}
            <i class="fas fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
          </a>
        </div>
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
  height: 23rem;
  width: 23rem;
}
.card-body{
  position: relative;
}

.card-text {
  font-size: 12px;
  color: rgb(124, 124, 124);
}

.read {
  position: absolute;
  bottom: 10px;
  right: 20px;
}
</style>
