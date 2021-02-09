<!-- @format -->

<template>
  <div id="app">
    <div v-for="post in allPosts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <button @click="changeTheme">Change Theme</button>
      <p>{{ getTheme }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'App',
  // computed: {
  //   allPosts() {
  //     return this.$store.getters.allPosts;
  //   },
  //   getTheme() {
  //     return this.$store.getters.getTheme;
  //   },
  // },
  computed: mapGetters(['allPosts', 'getTheme']),
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    // const res = await fetch(
    //   'https://jsonplaceholder.typicode.com/posts?_limit=3',
    // );
    // const json = await res.json();
    // this.posts = json;
    //*****************
    this.$store.dispatch('fetchPosts');
    // this.fetchPosts()
  },
  components: {},
  methods: {
    changeTheme() {
      this.$store.dispatch('themeAction');
    },
  },

  // mapActions(['fetchPosts', 'themeAction']),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
