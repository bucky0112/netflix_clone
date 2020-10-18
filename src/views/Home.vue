<template>
  <div class="home">
    <Loading :active.sync="isLoading" />
    <Banner></Banner>
    <div class="main">
      <!-- <div class="my-list"></div> -->
      <div class="tv">
      </div>
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
import Banner from '@/components/Banner.vue';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    Banner,
  },
  data() {
    return {
    };
  },
  methods: {
    getDiscover() {
      this.$store.dispatch('getDiscover');
    },
  },
  computed: {
    ...mapState(['isLoading', 'movieData']),
  },
  created() {
    this.getDiscover();
  },
};
</script>
