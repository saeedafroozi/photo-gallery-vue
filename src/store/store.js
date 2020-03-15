import Vuex from 'vuex'
import Vue from 'vue'
import { ACTION_TYPES } from '../action/action'
import { actions } from '../action/action'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        images: [],
        selectedSection: 0,
        includeViral: true,
        selectedWindow: 0,
        selectedSort: 0,
        isLoading: false,
        fetchFail:false
    },

    getters: {
        // Here we will create a getter
    },

    mutations:
    {
        [ACTION_TYPES.SEARCH_IMAGES]: (state, payload) => handleSearchImages(state, payload),
        [ACTION_TYPES.SET_ISLOADING]: (state) => handleSetIsLoading(state),
        [ACTION_TYPES.CHANGE_SECTION]: (state, payload) => handleChangeSection(state, payload),
        [ACTION_TYPES.CHANGE_WINDOW]: (state, payload) => handleChangeWindow(state, payload),
        [ACTION_TYPES.CHANGE_SORT]: (state, payload) => handleChangeSort(state, payload),
        [ACTION_TYPES.CHANGE_VIRAL]: (state, payload) => handleChangeViral(state, payload),
        [ACTION_TYPES.FETCH_FAIL]: (state) => handleFetchFail(state)
    },
    actions: actions
});

function handleSearchImages(state, payload) {
    state.images = payload;
    state.isLoading = false;
    state.failFetch=false;
}
function handleChangeSection(state, payload) {
    state.selectedSection = payload;
}
function handleChangeWindow(state, payload) {
    state.selectedWindow = payload;
}
function handleSetIsLoading(state) {
    state.isLoading = true;
}
function handleChangeSort(state, payload) {
    state.selectedSort = payload;
}
function handleChangeViral(state, payload) {
    state.includeViral = payload;
}
function handleFetchFail(state) {
    state.fetchFail = true;
}