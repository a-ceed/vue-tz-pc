<template>
  <nav>
    <router-link class="menu-item" to="/">Главная</router-link>
  </nav>
  <router-view/>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 45px 80px 45px 80px;
}

a:visited {
  color: inherit;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@media (max-width: 800px) {
  #app {
    margin: 15px 20px 15px 20px;
  }
}
</style>
