<template>
  <div>
    <button v-on:click="handleSearch" :class="$style.button">Search</button>
  </div>
</template>

<script>
export default {
  name: "SearchButton",
  methods: {
    handleSearch() {
      this.$emit("search");
    }
  }
};
</script>

<style module lang="scss">
@import "../../resources/styles/mixins.scss";
@import "../../resources/styles/constants.scss";
.button {
  background-color: $white-color;
  color: $primary-color;
  border: 2px solid #555555;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: $font-size-base;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
  width: 100%;
  border-radius: 11px;
  &:hover {
    opacity: 0.5;
  }
  @include for-phone-only {
    padding: 16px 12px;
  }
}
</style>
