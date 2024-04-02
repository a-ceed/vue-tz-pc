<template>
  <div class="img-conteiner">
    <img class="img" v-if="article" :src="article.imgUrl" alt="Article Image">
  </div>
  <h1>
    <router-link :to="{ path: 'article', query: { watch: article.id }}">{{ article.title }}</router-link>
  </h1>
  <div class="description">{{ article.description }}</div>
  <div>{{ article.lois }}</div>
</template>

<script>
export default {
  name: "ArticlesPreview",

  props: {
    article: {
      type: Object, // указываем, что ожидаем объект
      required: true // указываем, что пропс обязателен
    }
  }
}
</script>

<style scoped>
.img-conteiner {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 600px;
  max-height: 340px;
  overflow: hidden;
}

.img {
  max-width: 100%;
  height: auto;
  display: block;
}

.description {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  max-width: 600px;
  color: #2c3e50;
  margin-top: 20px;
}
</style>