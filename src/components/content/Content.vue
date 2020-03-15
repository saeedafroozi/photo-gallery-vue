
<template>
  <fragment>
    <div :class="$style.sidebar">
      <Select
        v-bind:labelValue="'ChooseSection:'"
        v-bind:options="sectionOptions"
        v-bind:selectedOption="selectedSection"
        v-bind:type="SelectType.Section"
        v-on:selectOption="({id,type})=>handleSelectOption(id,type)"
      />
      <Select
        v-bind:labelValue="'ChooseWindow:'"
        v-bind:options="windowOptions"
        v-bind:selectedOption="selectedWindow"
        v-bind:type="SelectType.Window"
        v-on:selectOption="({id,type})=>handleSelectOption(id,type)"
        v-if="this.selectedSection === sectionOptions[1].value"
      />
      <Select
        v-bind:labelValue="'ChooseSort:'"
        v-bind:options="sortOptions"
        v-bind:selectedOption="selectedSort"
        v-bind:type="SelectType.Sort"
        v-on:selectOption="({id,type})=>handleSelectOption(id,type)"
      />
      <Viral
        v-bind:includeViral="includeViral"
        v-on:changeViral="(includeViral)=>handleChangeViral(includeViral)"
      />
      <SearchButton v-on:search="handleSearch" />
    </div>
    <div :class="$style.container">
      <Card
        v-for="item in images"
        :key="item.id"
        v-bind:url="item.url"
        v-bind:description="item.description"
        v-bind:id="item.id"
        v-on:previewImage="(id)=>handlePreviewImage(id)"
      />
      <Photo
        v-on:closeLightbox="handleCloseLightbox"
        v-if="selectedImage"
        v-bind:id="selectedImage"
      />
    </div>
    <Spinner v-show="isLoading" />
  </fragment>
</template>
<script>
import Select from "../menu/Select";
import Viral from "../menu/Viral";
import Card from "../card/Card";
import { mapState } from "vuex";
import Spinner from "../../components/general/Spinner";
import { SelectType } from "../../contansts/config/enum";
import { Fragment } from "vue-fragment";
import { Sections, Windows, Sorts } from "../../contansts/config/const";
import Photo from "../photo/Photo";
import SearchButton from "./SearchButton";

export default {
  name: "Content",
  data() {
    return {
      selectedImage: null
    };
  },
  mounted() {
    const url = generateUrl.bind(this)();
    this.$store.dispatch("searchImage", url);
  },
  components: {
    Spinner,
    Fragment,
    Card,
    Select,
    Viral,
    Photo,
    SearchButton
  },
  created() {
    this.sectionOptions = Sections;
    this.windowOptions = Windows;
    this.sortOptions = Sorts;
    this.SelectType = SelectType;
  },
  computed: mapState({
    selectedSection: state => state.selectedSection,
    selectedWindow: state => state.selectedWindow,
    selectedSort: state => state.selectedSort,
    includeViral: state => state.includeViral,
    isLoading: state => state.isLoading,
    images: state => state.images,
  }),
  methods: {
    handleSelectOption(id, type) {
      if (type === this.SelectType.Section) {
        this.$store.dispatch("changeSection", id);
      } else if (type === this.SelectType.Sort) {
        this.$store.dispatch("changeSort", id);
      } else {
        this.$store.dispatch("changeWindow", id);
      }
    },
    handleChangeViral(includeViral) {
      this.$store.dispatch("changeViral", includeViral);
    },
    handleSearch() {
      const url = generateUrl.bind(this)();
      this.$store.dispatch("searchImage", url);
    },
    handlePreviewImage(id) {
      this.selectedImage = id;
    },
    handleCloseLightbox() {
      this.selectedImage = null;
    }
  }
};
function generateUrl() {
  const sectionIndex = this.sectionOptions.findIndex(
    x => x.value == this.selectedSection
  );
  const section = this.sectionOptions[sectionIndex].text;

  let window = null;
  if (this.selectedSection === this.sectionOptions[1].value) {
    const windowIndex = this.windowOptions.findIndex(
      x => x.value == this.selectedWindow
    );
    window = this.windowOptions[windowIndex].text;
  }

  const sortIndex = this.sortOptions.findIndex(
    x => x.value == this.selectedSort
  );
  const sort = this.sortOptions[sortIndex].text;

  const BOOKMARK = "__WINODW__";
  const url = `${section}/${sort}${BOOKMARK}/${1}?showViral=${
    this.includeViral
  }`;
  return url.replace(BOOKMARK, window ? `/${window}` : "");
}
</script>
<style module lang="scss">
@import "../../resources/styles/mixins.scss";
@import "../../resources/styles/constants.scss";

.container {
  @include for-phone-only {
    -webkit-column-count: 1;
    -webkit-column-gap: 1.25rem;
    column-count: 1;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 15px;
  }

  @include for-tablet-portrait-up {
    -webkit-column-count: 2;
    -webkit-column-gap: 1.25rem;
    column-count: 2;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 15px;
  }

  @include for-tablet-landscape-up {
    -webkit-column-count: 3;
    -webkit-column-gap: 1.25rem;
    column-count: 3;
  }

  @include for-desktop-up {
    -webkit-column-count: 4;
    -webkit-column-gap: 1.25rem;
    column-count: 4;
  }

  @include for-big-desktop-up {
    -webkit-column-count: 4;
    -webkit-column-gap: 1.25rem;
    column-count: 4;
  }
}

.sidebar {
  border-color: rgb(255, 255, 255);
  border: 1px #fbfbfb;
  border-radius: 5px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.927608543417367) 0%,
    rgba(232, 232, 232, 0.8995973389355743) 100%
  );
  padding: 10px;
  min-width: 200px;

  @include for-phone-only {
    min-width: 50px;
  }
}
</style>

