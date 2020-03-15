<template>
  <div :class="$style.photo_holder">
    <div :class="$style.image_wrapper">
      <img :src="url" :alt="title" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BigPhoto",
  created(){
      console.log('hi')
  },
  props: {
    url: String,
    title: String
  }
}
</script>

<style module lang="scss">
@import "../../resources/styles/mixins.scss";
   .photo_holder {
      max-height: 80vh;
      overflow-y: auto;
      .image_wrapper {
        overflow-y: hidden;
        height: 100%;
        img {
          width: 100%;
        }
      }
    }
</style>
