import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    movieData: {},
    page: 0,
    bannerImg: {
      url: '',
    },
  },
  mutations: {
    CHANGELOADING(state, status) {
      state.isLoading = status;
    },
    MOVIEDATA(state, payload) {
      state.movieData = payload;
    },
    BANNERING(state, payload) {
      state.bannerImg.url = payload;
    },
  },
  actions: {
    changeStateLoading(context, status) {
      context.commit('CHANGELOADING', status);
    },
    getDiscover(context) {
      context.commit('CHANGELOADING', true);
      this.page = Math.floor(Math.random() * 500) + 1; // everytime refresh random data
      const api = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.page}`;
      axios.get(api).then((res) => {
        context.commit('MOVIEDATA', res.data);
        context.commit('BANNERING', res.data.results[0].backdrop_path);// image for banner
        context.commit('CHANGELOADING', false);
      });
    },
  },
  modules: {
  },
});
