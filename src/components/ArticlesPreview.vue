<template>
  <div class="img-container">
    <img class="img" v-if="article" :src="article.imgUrl" alt="Article Image">
  </div>
  <h1>
    <router-link :to="{ path: 'article', query: { watch: article.id }}">{{ article.title }}</router-link>
  </h1>
  <div class="description">{{ article.description }}</div>
  <div class="like"> Лайков: {{ article.lois }}</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Iarticle} from "@/types/articles-types";

const props = defineProps<{
  article: Iarticle;
}>();
</script>

<style scoped>
.img-container {
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
.like {
  margin-top: 12px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
}
</style>