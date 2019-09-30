<template>
  <main>
    <!-- Popular Starships -->
    <article id="popular-starships" class="mb-5 mt-md-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h2 class="font-weight-bolder">Popular Starships</h2>
          </div>
        </div>
        <div class="row mt-5">
          <div
            class="col-sm-6 col-md-6 col-lg-4 mb-5"
            v-for="(item, index) in starships"
            :key="index"
          >
            <div class="card bg-grey card-elevated">
              <img src="../../assets/images/starship-1.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title {{item}}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and
                  make up the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-outline-secondary float-right">
                  Read more
                  <i class="fas fa fa-angle-right ml-2" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-5 col-md-4 col-lg-3 mx-auto">
            <button class="btn btn-outline-secondary btn-block btn-lg">View More</button>
          </div>
        </div>
      </div>
    </article>
    <!-- Popular Characters -->
    <article id="popular-characters" class="mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h2 class="font-weight-bolder">Popular Characters</h2>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-sm-6 mb-5">
            <div class="card bg-grey">
              <div class="row no-gutters">
                <div class="col-lg-7">
                  <img src="../../assets/images/character-1.jpg" class="card-img" alt="..." />
                </div>
                <div class="col-lg-5">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is
                      a little bit longer.
                    </p>
                    <a href="#" class="btn btn-secondary">
                      Read more
                      <i class="fas fa fa-chevron-right ml-2" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-5 col-md-4 col-lg-3 mx-auto">
            <button class="btn btn-outline-secondary btn-block btn-lg">View More</button>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      starships: [1, 2, 3, 4, 5, 6],
      characters: [1, 2, 3, 4]
    };
  },
  components: {}
};
</script> 

<style scoped>
</style>