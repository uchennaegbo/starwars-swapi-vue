<template>
  <div class="col-sm-6 mb-5">
    <div class="card bg-grey card-elevated">
      <div class="row no-gutters">
        <div class="col-lg-7">
          <img src="../assets/images/character-1.jpg" class="card-img" alt="..." />
        </div>
        <div class="col-lg-5">
          <div class="card-body">
            <h3 class="card-title font-weight-bold">{{ character.name }}</h3>
            <p class="small font-italic">Son of Anakin</p>
            <p class="card-text">
              {{ character.description }}...
              <a
                class="read-more-link text-dark text-decoration-none font-weight-bold"
                href="#"
              >{{ readMoreText }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Character Card",
  data() {
    return {
      readMoreText: "Read more"
    };
  },
  props: ["character"]
};
</script>

<style scoped>
.read-more-link {
  border-bottom: 2px solid #333;
  display: inline-block;
}
</style>