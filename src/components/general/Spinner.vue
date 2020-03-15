<template>
  <img :class="$style.loader" :src="require('../../resources/icons/spinner.svg')" />
</template>

<script>
export default {
  name: "Spinner"
};
</script>
<style module lang="scss">
@import "../../resources/styles/mixins.scss";
.loader {
  position: fixed;
  left: 50%;
  top: 0px;
  width: 100px;
  z-index: 9999;
}
</style>