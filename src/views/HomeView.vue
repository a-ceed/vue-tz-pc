<template>
  <articles-list></articles-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {mapState} from "vuex";
import ArticlesList from "@/components/ArticlesList.vue"; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    ArticlesList,
  },
  computed: {
    ...mapState({
      articles: "articles"
    })
  }
});
</script>

