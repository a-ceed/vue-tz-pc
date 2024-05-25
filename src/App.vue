<template>
  <router-view/>
</template>
<script lang="ts">
import { useI18n } from 'vue-i18n'
import {mapState} from "vuex";

export default {
  setup() {
    const { t, locale } = useI18n({useScope: 'global'})
    locale.value = localStorage.getItem('saveLocal') || 'eng'
    return {
      t, locale
    }
  },
  computed: {
    ...mapState({
      saveLocal: "saveLocal"
    })
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #ffffff;
  margin: 15px 0 45px 0;
}

body {
  margin: 0;
  padding: 0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #2c3e50;
}

a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #2c3e50;
}

a:visited {
}

@media (max-width: 800px) {
  #app {
    margin: 0 0 0 0;
  }
}
</style>
