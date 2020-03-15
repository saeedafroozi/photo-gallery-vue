
<template>

    <div :class="$style.card" v-on:click="handleClick">
      <img
        v-bind:alt="description ? description : 'no description provided'"
        v-bind:src="!invalidUrl ? url: require('../../resources/icons/noimage.png')"
        @error="handleError"
      />
      <div :class="$style.description">
        <div>{{description}}</div>
      </div>
    </div>

</template>
<script>

export default {
  name: "Card",
  data() {
    return {
      invalidUrl: false
    };
  },
  props: {
    url: String,
    description: String,
    id: String
  },
  methods: {
    handleError() {
      this.invalidUrl = true;
    },
    handleClick() {
      if (!this.invalidUrl) {
        this.$emit("previewImage", this.id);
      }
    }
  }
};
</script>

<style module lang="scss">
@import "../../resources/styles/mixins.scss";
@import "../../resources/styles/constants.scss";
.card {
  border: 1px solid $primary-color-boarder;
  border-radius: 10px;
  display: inline-block;
  width: 100%;
  margin: 5px;
  position: relative;
  overflow: hidden;
  img {
    border-radius: 10px;
    height: auto;
    display: block;
    width: 100%;
    opacity: 1;
    transition: opacity 0.25s ease-in-out;
  }
  .description {
    position: absolute;
    word-wrap: break-word;
    font-family: $secondary-font-family;
    text-align: justify;
    padding: 10px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: $primary-color;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
    overflow-y: auto;
  }
  &:hover {
    .description {
      visibility: visible;
      opacity: 1;
    }
    img {
      opacity: 0.1;
    }
  }
}
</style>
