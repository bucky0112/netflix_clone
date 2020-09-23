<template>
  <div class="home">
    <Banner ></Banner>
    <b-container>
      <ul v-for="(item, i) in movieData.results" :key="i">
      <li>
        <b-img :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`">
        </b-img>
      </li>
    </ul>
    </b-container>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';

export default {
  name: 'Home',
  components: {
    Banner,
  },
  data() {
    return {
      movieData: {},
      page: 0,
    };
  },
  methods: {
    getRandom() {
      this.page = Math.floor(Math.random() * 500) + 1;
    },
    getDiscover() {
      const api = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.page}`;
      this.axios.get(api).then((res) => {
        this.movieData = res.data;
      });
    },
  },
  created() {
    this.getRandom();
    this.getDiscover();
  },
};
</script>
