<template>
  <!-- Pagination -->
  <div class="row">
    <div class="col-4 mx-auto pt-5">
      <nav aria-label="Page navigation">
        <ul class="pagination pagination-lg justify-content-center">
          <li class="page-item">
            <a class="page-link text-dark" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" v-for="(link, index) in links" :key="index">
            <a class="page-link text-dark" :href="link.href">{{link.page}}</a>
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
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      links: [
        { href: "#", page: "1" },
        { href: "#", page: "2" },
        { href: "#", page: "3" }
      ]
    };
  }
};
</script>

<style>
</style>