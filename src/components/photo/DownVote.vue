<template>
  <ul>
    <li :class="$style.command">
      <font-awesome-icon icon="arrow-alt-circle-down" />
    </li>
    <li>
      <span v-if="downVotes">{{ downVotes }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "DownVote",
  props: {
    downVotes: Number
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
