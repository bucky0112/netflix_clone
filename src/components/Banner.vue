<template>
  <div class="banner">
  <img :src="`https://image.tmdb.org/t/p/original${bannerImg}`" style="max-width: 100%">
  </div>
</template>

<script>
export default {
  name: 'Banner',
  computed: {
    bannerImg() {
      return this.$store.state.bannerImg.url;
    },
  },
};
</script>
