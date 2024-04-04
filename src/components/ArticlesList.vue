<template>
  <div class="articles-container">
    <articles-preview v-for="(article, index) in articles" :key="index" :article="article"></articles-preview>
  </div>
</template>

<script>
import ArticlesPreview from "@/components/ArticlesPreview";
import { mapState } from "vuex";
export default {
  name: "ArticlesList",
  components: {ArticlesPreview},
  computed: {
    ...mapState({
      articles: "articles"
    })
  }
}
</script>

<style scoped>
.articles-container {
  text-align: left;
}
</style>