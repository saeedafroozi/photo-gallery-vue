<template>
  <div :class="$style.title_holder">
    <span>
      <b>Title:</b>
    </span>
    <span v-if="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String
  }
};
</script>

<style module lang="scss">
@import "../../resources/styles/mixins.scss";
.title_holder {
  padding: 5px;
}
</style>
