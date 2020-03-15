<template>
  <ul>
    <li :class="$style.command">
      <font-awesome-icon icon="arrow-alt-circle-up" />
    </li>
    <li>
      <span v-if="upVotes">{{ upVotes }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "UpVotes",
  props: {
    upVotes: Number
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
