<template>
  <div class="main-block">
    <header-site></header-site>
    <div class="slide-inner--image" :style="{ backgroundImage: 'url(/international-trash-award-1.jpg)' }"></div>
    <div class="slide-inner--info">
      <h1>{{ $t('Международная') }}
        <br>{{ $t('мусорная премия') }}
      </h1>
      <a href="/nominees" data-type="page-transition"
         class="ms-btn--slider">{{ $t('Номинанты 2024') }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {mapState} from "vuex";
import ArticlesList from "@/components/ArticlesList.vue";
import HeaderSite from "@/components/HeaderSite.vue";

export default defineComponent({
  name: 'HomeView',
  components: { HeaderSite },
  computed: {
    ...mapState({
      articles: "articles"
    })
  }
});
</script>

<style scoped>

.ms-page-title span {
  text-transform: uppercase;
  letter-spacing: .15em;
  color: #df1f29;
}

label.error {
  position: absolute;
  bottom: 1.2em;
  font-size: 12px;
  color: #df1f29;
}

.ms-btn--slider {
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  width: 15em;
  font-weight: 600;
  letter-spacing: .15em;
}

.ms-btn--slider::before {
  content: '';
  height: .1rem;
  width: 2rem;
  margin-right: .7rem;
  background: #df1f29;
  transition: width .3s ease;
}

.ms-btn--slider:hover::before {
  width: 3rem;
}

a {
  color: #df1f29;
  text-decoration: none;
}

.slide-inner--image {
  position: fixed;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 1;
  transform: scale(1.07);
  -webkit-transition: opacity .6s ease-in-out, transform 2s ease .7s;
  -moz-transition: opacity .6s ease-in-out, transform 2s ease .7s;
  transition: opacity .6s ease-in-out, transform 2s ease .7s;
}

.swiper-slide-duplicate-active .slide-inner--image,
.swiper-slide-active .slide-inner--image {
  opacity: 1;
  transform: scale(1);
}

.slide-inner--info {
  position: absolute;
  width: auto;
  min-height: 50px;
  bottom: 3em;
  padding-left: 3em;
  color: #fff;
  z-index: 3;
  transition: opacity 1s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/*.swiper-slide-active .slide-inner--info {*/
/*  opacity: 1;*/
/*  transition: opacity 1s ease 1s;*/
/*}*/

.slide-inner--info h1 {
  margin: 10px 20px 10px 20px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.2em;
  color: #fff;
}

h1 {
  font-size: calc(46px + 1vw);
}

@media only screen and (max-width: 910px) {
  h1 {
    font-size: calc(28px + 1vw);
    text-align: center;
    width: 100%;
  }
  .ms-btn--slider {
    display: inline-block;
    letter-spacing: .15em;
    background: #df1f29;
    color: #fff;
    padding: .5em 0;
  }

  .slide-inner--info {
    width: 100%;
    margin: 0 0;
    text-align: center;
    min-height: 50px;
    bottom: 10vh;
    padding-left: 0;
    color: #fff;
    z-index: 3;
  }

  .slide-inner--info h1 {
    margin: 0 0 12px 0;
  }

}
</style>

