<template>
  <div id="app" :class="$style.app">
    <Content />
  </div>
</template>
<script>
import Content from "../src/components/content/Content";
export default {
  name: "app",
  components: {
    Content
  }
};
</script>

<style module lang="scss">
@import "resources/styles/mixins.scss";
@import "resources/styles/constants.scss";
.app {
  display: flex;
  font-family: $font-family-base;
  @include for-phone-only {
    flex-direction: column;
  }
}
</style>
