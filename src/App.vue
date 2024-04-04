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
  margin: 15px 80px 45px 80px;
}

nav {
  padding: 30px 30px 0 0;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

  &.router-link-exact-active {
    color: #2c3e50;
  }
}

a:visited {
  color: inherit;
}

@media (max-width: 800px) {
  #app {
    margin: 15px 20px 15px 20px;
  }
}
</style>
