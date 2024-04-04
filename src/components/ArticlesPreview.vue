<template>
  <div class="article">
    <div class="article__img-container">
      <img class="article__img" v-if="article" :src="article.imgUrl" alt="Article Image">
    </div>
    <h1>
      <router-link :to="{ path: 'article', query: { watch: article.id }}" class="article__title">{{ article.title }}</router-link>
    </h1>
    <div class="article__description">{{ article.description }}</div>
    <div class="article__like"> Лайков: {{ article.lois }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Iarticle} from "@/types/articles-types";

export default defineComponent({
  props: {
    article: {
      type: Object as PropType<Iarticle>,
      required: true
    }
  },
});
</script>

<style scoped>

.article__img-container {
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

.article__img {
  max-width: 100%;
  height: auto;
  display: block;
}

.article__description {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  max-width: 600px;
  color: #2c3e50;
  margin-top: 20px;
}

.article__like {
  margin-top: 12px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
}
</style>