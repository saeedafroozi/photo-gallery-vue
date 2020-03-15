<template>
  <div :class="$style.description">
        <span>
          <b>Description:</b>
        </span>
        <span v-if="description">{{ description }}</span>
      </div>
</template>

<script>
export default {
  name: "Description",
  props: {
    description: String
  }
};
</script>

<style module lang="scss">
@import "../../resources/styles/mixins.scss";
.description {
    padding: 0 10px;
  }
</style>
