<template>
  <div class="banner">
    <img :src="`https://image.tmdb.org/t/p/original/${img}`" style="max-width: 100%">
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    img: String,
  },
};
</script>
