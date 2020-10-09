<template>
  <div class="home">
    <div class="head">
      <!-- <Navbar></Navbar> -->
      <Banner :img="bannerImg.url"></Banner>
    </div>
    <div class="main">
      <div class="my-list"></div>
      <div class="tv"></div>
      <div class="movie"></div>
    </div>
    <div class="footer"></div>
    <!-- <b-container>
      <ul v-for="(item, i) in movieData.results" :key="i">
      <li>
        <b-img :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`">
        </b-img>
      </li>
    </ul>
    </b-container> -->
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';

export default {
  name: 'Home',
  components: {
    // Navbar,
    Banner,
  },
  data() {
    return {
      movieData: {},
      page: 0,
      // imgUrl: {},
      bannerImg: {
        url: '',
      },
    };
  },
  methods: {
    getRandom() {
      this.page = Math.floor(Math.random() * 500) + 1; // everytime refresh random data
    },
    getDiscover() {
      const api = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.page}`;
      this.axios.get(api).then((res) => {
        this.movieData = res.data;
        this.$set(this.bannerImg, 'url', this.movieData.results[0].backdrop_path); // image for banner
      });
    },
  },
  created() {
    this.getRandom();
    this.getDiscover();
  },
};
</script>
