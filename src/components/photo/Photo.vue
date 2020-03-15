<template>
  <div :class="$style.lightbox" @click="handleClick">
    <div :class="$style.preview">
      <Title v-bind:title="photo.title" />
      <BigPhoto v-bind:url="photo.url" v-bind:title="photo.title" />
      <!-- <div :class="$style.photo_holder">
        <div :class="$style.image_wrapper">
          <img :src="photo.url" :alt="photo.title" />
        </div>
      </div> -->
      <Description v-bind:description="photo.description" />
      <div :class="$style.vote">
        <UpVote v-bind:upVotes="photo.upVotes" />
        <DownVotes v-bind:downVotes="photo.downVotes" />
        <Score v-bind:score="photo.score" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UpVote from "./UpVote";
import DownVotes from "./DownVote";
import Score from "./Score";
import Title from "./Title";
import Description from "./Description";
import BigPhoto from "./BigPhoto";
export default {
  name: "Photo",
  computed: mapState({
    photo(state) {
      return state.images.find(image => image.id == this.id);
    }
  }),
  components: {
    UpVote,
    DownVotes,
    Score,
    Title,
    Description,
    BigPhoto
  },
  methods: {
    handleClick() {
      this.$emit("closeLightbox");
    }
  },
  props: {
    id: String
  }
};
</script>

<style module lang="scss">
@import "../../resources/styles/mixins.scss";
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  grid-gap: 2rem;
  word-wrap: wrap;

  .preview {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.9276085434) 0%,
      rgba(232, 232, 232, 0.8995973389) 100%
    );
    width: 50%;
    margin: 0 auto;
    height: fit-content;
    text-align: justify;
    margin-top: 25px;
    word-wrap: break-word;

    .vote {
      display: flex;
      ul {
        list-style-type: none;
      }
      svg {
        color: #1bb76e;
        font-size: 30px;
      }
    }
  }
}
</style>
