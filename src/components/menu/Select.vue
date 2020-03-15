<template>
  <fragment>
    <label for="select-drowdown">{{labelValue}}</label>
    <select v-on:change.prevent="handleSelect" :class="$style.select" v-bind:value="selectedOption">
      <option
        v-for="option in options"
        :key="option.value"
        v-bind:value="option.value"
      >{{ option.text }}</option>
    </select>
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
export default {
  name: "Select",
  components: {
    Fragment
  },
  props: {
    options: {
      text: String,
      value: Number
    },
    selectedOption: Number,
    labelValue: String,
    type: Symbol
  },
  methods: {
    handleSelect(e) {
      const value = e.target.value;
      this.$emit("selectOption", { id: value, type: this.type });
    }
  }
};
</script>
<style module lang="scss">
@import "../../resources/styles/mixins.scss";
@import "../../resources/styles/constants.scss";

.select {
  display: block;
  font-size: $font-size-base;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: $white-color;
  background-image: url("../../resources/icons/download.svg"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  margin-bottom: 25px;
  & ::-ms-expand {
    display: none;
  }
  & :hover {
    border-color: #888;
  }
  & :focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
  & option {
    font-weight: normal;
  }
}
</style>

