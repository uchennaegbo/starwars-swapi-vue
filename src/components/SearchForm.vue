<template>
  <b-form @keyup="onSearch">
    <div class="input-group mb-2 mr-sm-2">
      <b-form-input
        type="text"
        v-model="formInput"
        class="form-control form-control-lg text-center font-italic"
        placeholder="Looking for something?"
      ></b-form-input>
      <div class="input-group-append">
        <b-button
          type="submit"
          variant="primary"
          class="btn btn-primary pl-sm-4 pr-sm-4 pr-3 pl-3"
        >{{ searchButtonValue }}</b-button>
      </div>
    </div>
  </b-form>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      formInput: "",
      submitButton: "submit",
      searchButtonValue: "Search"
    };
  },
  methods: {
    onSearch(evt) {
      evt.preventDefault();
      this.$emit("searching", this.formInput);
    }
  }
};
</script>

<style>
</style>
