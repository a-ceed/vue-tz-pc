<template>
  <header-site></header-site>
  <voite-form></voite-form>
  <div v-if="currentArticle" class="post">
    <div class="post__img-container">
      <img class="post__img" :src="currentArticle.imgUrl" alt="Article Image">
    </div>

    <div class="post__article-bar">
      <div class="post__title">
        <h1>{{ currentArticle.title }}</h1>
      </div>
      <div class="post__likes">Лайки: {{ currentArticle.lois }}
        <button class="post__btn" @click="incrementLois"> +</button>
        <button class="post__btn" @click="decrementLois"> −</button>
      </div>
    </div>

    <div class="post__description">{{ currentArticle.description }}</div>

    <user-comments v-if="currentArticle.comments" :comments="currentArticle.comments"></user-comments>

  </div>
</template>

<script>
import { mapState } from "vuex";
import UserComments from "@/components/UserComments";
import HeaderSite from "@/components/HeaderSite";
import VoiteForm from "@/components/VoiteForm";

export default {
  components: {VoiteForm, HeaderSite, UserComments},
  data() {
    return {
      currentArticle: null
    };
  },

  computed: {
    ...mapState({
      articles: "articles"
    })
  },

  mounted() {
    const articlesId = this.$route.query.watch;
    if (this.articles) {
      this.currentArticle = this.articles.find(item => item.id === parseInt(articlesId))
    }
  },

  methods: {
    incrementLois() {
      this.$store.commit('increment', parseInt(this.$route.query.watch));
    },
    decrementLois() {
      this.$store.commit('decrement', parseInt(this.$route.query.watch));
    }
  }
}
</script>
<style scoped>

.post {
  max-width: 1024px;
}

.post__article-bar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
}

.post__title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  min-width: 230px;
  color: #2c3e50;
}

.post__likes {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 230px;
  text-align: left;
  font-size: 32px;
  font-weight: 700;
  color: #2c3e50;
}

.post__btn {
  font-size: 32px;
  font-weight: 700;
  color: #2c3e50;
  background-color: #fff;
}

.post__description {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
}

.post__img-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1024px;
  max-height: 640px;
  overflow: hidden;
}

.post__img {
  max-width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 800px) {
  .post__article-bar {
    display: block;
    justify-content: normal;
    height: 100%;
    align-items: center;
  }
}
</style>