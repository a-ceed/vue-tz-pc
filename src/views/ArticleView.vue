<template>
  <div class="post">
    <div class="img-conteiner">
      <img class="img" v-if="currentArticle" :src="currentArticle.imgUrl" alt="Article Image">
    </div>

    <div class="title-container">
      <div class="title">
        <h1 v-if="currentArticle">{{ currentArticle.title }}</h1>
      </div>
      <div class="lois" v-if="currentArticle">Лайки: {{ currentArticle.lois }}
        <button class="btn" @click="incrementLois"> +</button>
        <button class="btn" @click="decrementLois"> −</button>
      </div>
    </div>

    <div class="description" v-if="currentArticle">{{ currentArticle.description }}</div>

    <user-comments v-if="currentArticle && currentArticle.comments" :comments="currentArticle.comments" ></user-comments>
    <div v-if="currentArticle && currentArticle.comments && currentArticle.comments.length > 0">
      <div class="title"><h1>Комментарии:</h1></div>

      <div v-for="comment in currentArticle.comments" :key="comment.id">
        <h3 class="title-comment">Username</h3>
        <div class="title-comment">
          {{ comment.commentBody }}
        </div>
      </div>
    </div>
    <div v-else>
      <p>Без комментариев</p>
    </div>

    <div class="input-block">
      <p>Введите комментарий</p>
      <input type="text" v-model="textComment">
      <button @click="addNewComment">Submit</button>
    </div>

  </div>
</template>

<script>
import {mapState} from "vuex";
import UserComments from "@/components/UserComments";

export default {
  components: {UserComments},
  data() {
    return {
      currentArticle: null,
      textComment: null
    };
  },

  computed: {
    ...mapState({
      articles: "articles"
    })
  },

  mounted() {
    const articlesId = this.$route.query.watch;
    console.log("articlesId", articlesId)

    this.currentArticle = this.articles.find(item => item.id === parseInt(articlesId))
    console.log('currentArticle.comments', this.currentArticle.comments);
  },

  methods: {
    incrementLois() {
      this.$store.commit('increment', parseInt(this.$route.query.watch));
    },
    decrementLois() {
      this.$store.commit('decrement', parseInt(this.$route.query.watch));
    },
    addNewComment() {
      const payload = {
        articleId: parseInt(this.$route.query.watch),
        newComment: this.textComment
      }
      this.$store.commit('newComment', payload);
    }
  }
}
</script>
<style scoped>

.post {
  max-width: 1024px;
}

.title-container {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
}

.title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  min-width: 230px;
  color: #2c3e50;
}

.title-comment {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  min-width: 230px;
  color: #2c3e50;
  margin-bottom: 5px;
}

.lois {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 230px;
  text-align: left;
  font-size: 32px;
  font-weight: 700;
  color: #2c3e50;
}

.btn {
  font-size: 32px;
  font-weight: 700;
  color: #2c3e50;
  background-color: #fff;
}

.description {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
}

.img-conteiner {
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

.img {
  max-width: 100%;
  height: auto;
  display: block;
}

.input-block {
  text-align: left;
  margin-top: 60px;
}
</style>
