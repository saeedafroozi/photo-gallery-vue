<template>
  <fragment>
    <input type="checkbox" id="checkbox" v-on:change="handleChange" v-bind:checked="includeViral" />
    <label for="checkbox">Include Viral</label>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
export default {
  name: "Viral",
  components: {
    Fragment
  },
  props: {
    includeViral: Boolean
  },
  methods: {
    handleChange(e) {
      const value = e.currentTarget.checked;
      this.$emit("changeViral", value);
    }
  }
};
</script>
<style module lang="scss">
@import "../../resources/styles/mixins.scss";
</style>

