<template>
  <ul>
    <li :class="$style.command">
      <font-awesome-icon icon="star" />
    </li>
    <li>
      <span v-if="score">{{ score }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Score",
  props: {
    score: Number
  }
};
</script>

<style module lang="scss">
@import "../../resources/styles/mixins.scss";
.command {
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
</style>
