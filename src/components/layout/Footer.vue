<template>
  <footer class="bg-dark text-white">
    <div class="container pt-3 pb-3">
      <div class="row text-center">
        <div class="col-12 small">
          &copy; {{ footerYear() }}
          <strong>{{ siteName }}</strong>. All rights
          reserved.
          <br />Site designed by
          <a
            :href="authorURL"
            target="_blank"
            class="text-decoration-none text-white author-credits font-weight-bold"
            rel="noopener noreferrer"
          >{{ authorName }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      siteName: "StarWars Directory",
      authorName: "Kingsley Okeke",
      authorURL: "https://kingsleyokeke.com"
    };
  },
  methods: {
    footerYear() {
      const currentYear = new Date().getFullYear();
      return currentYear <= "2019" ? "2019" : `2019 - ${currentYear}`;
    }
  }
};
</script>

<style scoped>
.author-credits:hover {
  color: gold !important;
}
</style>