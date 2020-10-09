<template>
  <div class="navbar">
    <div class="main-menu">
      <h1>
        <a href="#">NETFLIX</a>
      </h1>
      <ul class="select">
        <li v-for="(item, i) in selectMenu" :key="i">
          <router-link :to="`${item.id}`">{{ item.content }}</router-link>
        </li>
      </ul>
    </div>
    <ul class="other-menu">
      <li v-for="(item, i) in otherMenu" :key="i">
        <router-link :to="`${item.id}`">{{ item.content }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      selectMenu: [
        { content: '首頁', id: '/' },
        { content: '節目', id: '/tv' },
        { content: '電影', id: '/movie' },
        { content: '最新上線', id: '/latest' },
        { content: '我的片單', id: '/mylist' },
      ],
      otherMenu: [
        { content: '搜尋', id: '/search' },
        { content: '兒童專區', id: '/kids' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 50px;
}
.main-menu {
  display: flex;
}
h1 {
  display: flex;
  margin-right: 40px;
  a {
    background-image: url(../assets/image/netflix_logo.png);
    background-size: cover;
    font-size: 30px;
    background-repeat: no-repeat;
    overflow: hidden;
    text-indent: 105%;
    white-space: nowrap;
  }
}
.select {
  font-size: 14px;
  display: flex;
  padding-top: 8px;
  li {
    margin: 0 10px;
    a {
      text-decoration: none;
    }
  }
}
.other-menu {
  font-size: 14px;
  display: flex;
  padding-top: 8px;
  li {
    margin: 0 10px;
    a {
      text-decoration: none;
    }
  }
}
</style>
