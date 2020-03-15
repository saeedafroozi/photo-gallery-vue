
import ImageService from '../services/ImageService'

const ACTION_TYPES = {
    SEARCH_IMAGES: 'SEARCH_IMAGES',
    SET_ISLOADING: 'SET_ISLOADING',
    CHANGE_SECTION: 'CHANGE_SECTION',
    CHANGE_WINDOW: 'CHANGE_WINDOW',
    CHANGE_SORT: 'CHANGE_SORT',
    CHANGE_VIRAL: 'CHANGE_VIRAL',
    FETCH_FAIL:'FETCH_FAIL'
}

const actions = {

    searchImage({ commit, dispatch }, url) {
        commit(ACTION_TYPES.SET_ISLOADING, true);
        ImageService
            .getImages(url)
            .then(res => {
                const responseData = res.data;
                commit(ACTION_TYPES.SEARCH_IMAGES, responseData);
            }).catch(ex => dispatch('fetchFailure',ex));
    },

    changeSection({ commit }, selectedSection) {
        commit(ACTION_TYPES.CHANGE_SECTION, Number(selectedSection));
    },

    changeWindow({ commit }, selectedWindow) {
        commit(ACTION_TYPES.CHANGE_WINDOW, Number(selectedWindow));
    },

    changeSort({ commit }, selectedSort) {
        commit(ACTION_TYPES.CHANGE_SORT, Number(selectedSort));
    },

    changeViral({ commit }, includeViral) {
        commit(ACTION_TYPES.CHANGE_VIRAL, includeViral);
    },

    setIsLoading({ commit }, isLoading) {
        return commit(ACTION_TYPES.SET_ISLOADING, isLoading)
    },

    fetchFailure({ commit },ex) {
        commit(ACTION_TYPES.FETCH_FAIL,ex)
    }
}
export { actions, ACTION_TYPES }





