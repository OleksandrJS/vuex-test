<!-- @format -->

<template>
  <div id="app">
    <div v-for="post in allPosts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <button @click="changeTheme">Change Theme</button>
      <p>{{ getTheme }}</p>
    </div>
    <div class="checkbox-wrapper">
      <input type="checkbox" id="check" v-model="checkData" />
      <label for="check" class="checkmark"></label>
      <input type="checkbox" id="check2" />
      <label for="check2" class="checkmark"></label>
      <input type="checkbox" id="check3" />
      <label for="check3" class="checkmark"></label>
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
      checkData: '',
    };
  },
  async mounted() {
    this.$store.dispatch('fetchPosts');
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
.checkbox-wrapper {
  display: flex;
  justify-content: center;
}
.checkmark {
  display: block;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 3px;
  position: relative;
  border: 1px solid grey;
  transition: background-color 0.5s;
  cursor: pointer;
}

.checkmark:hover {
  border: 1px solid black;
}

#check:checked + .checkmark,
#check2:checked + .checkmark,
#check3:checked + .checkmark {
  background-color: #08bb68;
}

.checkmark::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 7px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) rotateZ(40deg);
  opacity: 0;
  transition: opacity 0.5s;
}
#check:checked + .checkmark::after,
#check2:checked + .checkmark::after,
#check3:checked + .checkmark::after {
  opacity: 1;
}
#check,
#check2,
#check3 {
  opacity: 0;
}
</style>
