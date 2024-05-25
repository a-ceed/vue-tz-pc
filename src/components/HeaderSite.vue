<template>
  <div class="ms-header">
    <nav class="ms-nav">
      <div class="ms-logo">
        <a href="/" data-type="page-transition">
          <div class="logo-light current"><img :src="require('@/assets/logo-light.svg')" alt="logo image"></div>
        </a>
      </div>

      <div class="button-container" style="display: flex; align-items: center;">
        <div class="dropdown">
          <button class="dropdown-toggle" @click="isOpen = !isOpen">
            {{ (selectedLanguage || saveLocal).toUpperCase() }}
          </button>
          <ul class="dropdown-menu" v-if="isOpen">
            <li class="lang-menu" v-for="language in languages" :key="language.code">
              <button @click="selectLanguage(language)">
                {{ language.label }}
              </button>
            </li>
          </ul>
        </div>
        <button class="hamburger" type="button" data-toggle="navigation">
          <span class="hamburger-box"></span>
          <span class="hamburger-box">
            <span class="hamburger-label">{{ $t('Меню') }}</span>
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <div class="height-full-viewport">
          <ul class="ms-navbar">
            <!-- Nav Link -->
            <li class="nav-item">
              <a href="/" data-type="page-transition">
                <span class="ms-btn">{{ $t('Главная') }}</span>
                <span class="nav-item__label"></span>
              </a>
            </li>
            <!-- Nav Link -->
            <li class="nav-item">
              <a href="/nominees" data-type="page-transition">
                <span class="ms-btn">{{ $t('Номинанты') }}</span>
                <span class="nav-item__label"></span>
              </a>
            </li>
            <!-- Nav Link -->
            <li class="nav-item">
              <a href="/about" data-type="page-transition">
                <span class="ms-btn">{{ $t('О премии') }}</span>
                <span class="nav-item__label"></span>
              </a>
            </li>
            <!-- Nav Link -->
            <li class="nav-item">
              <a href="/contact" data-type="page-transition">
                <span class="ms-btn">{{ $t('Контакты') }}</span>
                <span class="nav-item__label"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>


    </nav>
  </div>

</template>

<script>
import {ref} from "vue";
import {mapState, useStore} from "vuex";
import {useI18n} from "vue-i18n";

export default {
  name: "HeaderSite",
  setup() {
    const { locale } = useI18n({ useScope: 'global' })
    const store = useStore();
    const isOpen = ref(false)
    const selectedLanguage = ref(null)

    const languages = [
      { code: 'eng', label: 'ENG' },
      { code: 'fra', label: 'FRA' },
      { code: 'spa', label: 'SPA' },
      { code: 'rus', label: 'RUS' },
      { code: 'ara', label: 'ARA' },
      { code: 'chn', label: 'CHN' }
    ]

    const selectLanguage = (language) => {
      selectedLanguage.value = language.label
      isOpen.value = false
      console.log('lang', language.code)
      // Добавьте здесь логику для смены языка приложения
      store.commit('setLocale', language.code);
      locale.value = language.code
    }

    return {
      isOpen,
      selectedLanguage,
      languages,
      selectLanguage
    }
  },
  computed: {
    ...mapState({
      saveLocal: "saveLocal"
    })
  },
  mounted() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.ms-nav');

    hamburger.addEventListener('click', function() {
      this.classList.toggle('is-active');
      nav.classList.toggle('is-visible');
      document.querySelectorAll('.ms-header:not(.navbar-white) .logo-light').forEach(function(logo) {
        logo.classList.toggle('active');
      });
    });

    const heightFullViewport = document.querySelector('.height-full-viewport');
    heightFullViewport.addEventListener('mousewheel', function(e) {
      if (e.target.id === 'el') return;
      e.preventDefault();
      e.stopPropagation();
    });
  }
}
</script>

<style scoped lang="scss">
.ms-header {
  position: fixed;
  width: 100%;
  z-index: 3;
}

.ms-nav {
  display: flex;
  align-items: center;
  padding: 2em 3em;
  justify-content: space-between;
}

ul {
  list-style-type: none;
  list-style: none;
  padding-left: 0 !important;
  -webkit-padding-start: initial !important;
  -moz-padding-start: initial;
}

.ms-logo {
  position: relative;
  z-index: 7;
  height: 60px;
}

.logo-light {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity .3s ease .4s;
}

.logo-light.current {
  opacity: 1;
}
.ms-logo img {
  width: auto;
  height: 100%;
}

/* 2.2 Burger button */

button {
  background: transparent;
  border: none;
}

/* 2.2 Burger button */

.hamburger {
  margin-left: 60px;
  overflow: visible;
  cursor: pointer;
  z-index: 7;
  border: 0;
  transition-timing-function: linear;
  transition-duration: .3s ease;
  transition-property: opacity, -webkit-filter;
  transition-property: opacity, filter;
  transition-property: opacity, filter, -webkit-filter;

}
.navbar-white .hamburger-label {
  color: #fff;
}
.hamburger-label {
  display: block;
  font-family: 'Open Sans', Arial;
  font-size: 16px;
  width: 100%;
  height: auto;
  position: relative;
  top: 0;
  left: -4em;
  padding-right: 4em;
  text-transform: uppercase;
  line-height: 1.5em;
  transition: color .3s ease .4s;
  color: #fff;
}
.hamburger.is-active .hamburger-label {
  color: #fff !important;
  transition: color .1s ease;
}
.hamburger-box {
  position: relative;
  display: inline-block;
  width: 35px;
  vertical-align: middle;
}
.hamburger-inner {
  display: block;
  top: 0;
  margin-left: 2px;
}
.navbar-white .hamburger-inner,
.navbar-white .hamburger-inner:after,
.navbar-white .hamburger-inner:before {
  background-color: #fff;
}
.hamburger-inner:after,
.hamburger-inner:before {
  display: block;
  content: '';
}
.hamburger-inner,
.hamburger-inner:after,
.hamburger-inner:before {
  position: absolute;
  width: 30px;
  height: 3px;
  background-color: #fff;
  transition: all .3s ease .5s;
}
.hamburger-inner:before {
  top: 8px;
  left: -8px;
}
.hamburger-inner:after {
  top: 16px;
  width: 26px;
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner:after {
  background-color: #fff;
  transition-delay: .1s;
}
.hamburger.is-active .hamburger-inner {
  -webkit-transform: translate3d(0, 8px, 0) rotate(45deg);
  transform: translate3d(0, 8px, 0) rotate(45deg);
}
.hamburger.is-active .hamburger-inner:before {
  opacity: 0;
  transition: opacity .3s ease 0s
}
.hamburger.is-active .hamburger-inner:after {
  width: 30px;
  -webkit-transform: translate3d(0, -16px, 0) rotate(-90deg);
  transform: translate3d(0, -16px, 0) rotate(-90deg);
}

/* 2.3 Collapse navigation */


.height-full-viewport {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 0%;
  background-color: #151515;
  z-index: 5;
  overflow: hidden;
  transition: height .8s cubic-bezier(0.3, 1, 0.3, 1) .1s;
}
.ms-navbar {
  z-index: 6;
  margin: 0 auto;
  display: block;
  width: auto;
  height: auto;
  top: 0;
  left: 0;
}
.ms-nav.is-visible .height-full-viewport {
  height: 100vh;
  transition: height 1s ease;
}
.nav-item {
  cursor: pointer;
  padding: .75em;
  opacity: 0;
  width: 240px;
  margin-left: 3em;
  transition: opacity .3s ease;
}
.ms-navbar a {
  display: block;
}
.ms-navbar .ms-btn {
  display: inline-block;
  text-transform: uppercase;
  line-height: 1;
  padding: 0 0.25em;
  position: relative;
}
.ms-navbar .ms-btn {
  font-size: 1.75em;
  letter-spacing: .02em;
  color: #fff;
  font-weight: 700 !important;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.ms-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #df1f29;
  height: .1rem;
  top: 50%;
  width: 0;
  transition: width .3s ease;
}
.nav-item__label {
  position: relative;
  display: block;
  margin: 0.5em 0 0 0;
  margin-top: 0.25em;
  padding: 0.5em;
  color: #555;
  transition: color .3s ease;
  text-decoration: none;
}
.nav-item:hover .nav-item__label {
  color: #9a9a9a;
}
.is-visible .nav-item {
  opacity: 1;
  transition: opacity 2s cubic-bezier(0.16, 1.08, 0.38, 0.98) .3s;
}
.nav-item .ms-btn {
  transition: all .3s ease;
}
.nav-item:active .ms-btn,
.nav-item:focus .ms-btn,
.nav-item:hover .ms-btn {
  color: #df1f29;
  opacity: 1;
  padding-left: 2.4rem;
}
.nav-item:active .ms-btn::before,
.nav-item:focus .ms-btn::before,
.nav-item:hover .ms-btn::before {
  width: 2rem;
}

.hamburger-inner {
  display: block;
  top: 0;
}
.navbar-white .hamburger-inner,
.navbar-white .hamburger-inner:after,
.navbar-white .hamburger-inner:before {
  background-color: #fff;
}
.hamburger-inner:after,
.hamburger-inner:before {
  display: block;
  content: '';
}
.hamburger-inner,
.hamburger-inner:after,
.hamburger-inner:before {
  position: absolute;
  width: 30px;
  height: 3px;
  background-color: #fff;
  transition: all .3s ease .5s;
}
.hamburger-inner:before {
  top: 8px;
  left: -8px;
}
.hamburger-inner:after {
  top: 16px;
  width: 26px;
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner:after {
  background-color: #fff;
  transition-delay: .1s;
}
.hamburger.is-active .hamburger-inner {
  -webkit-transform: translate3d(0, 8px, 0) rotate(45deg);
  transform: translate3d(0, 8px, 0) rotate(45deg);
}
.hamburger.is-active .hamburger-inner:before {
  opacity: 0;
  transition: opacity .3s ease 0s
}
.hamburger.is-active .hamburger-inner:after {
  width: 30px;
  -webkit-transform: translate3d(0, -16px, 0) rotate(-90deg);
  transform: translate3d(0, -16px, 0) rotate(-90deg);
}
.hamburger-label {
  display: block;
  font-family: 'Open Sans', Arial;
  font-size: 16px;
  width: 100%;
  height: auto;
  position: relative;
  top: 0;
  left: -4em;
  padding-right: 4em;
  text-transform: uppercase;
  line-height: 1.5em;
  transition: color .3s ease .4s;
  color: #fff;
}
.hamburger.is-active .hamburger-label {
  color: #fff !important;
  transition: color .1s ease;
}
.dropdown {
  margin-left: auto;
  overflow: visible;
  cursor: pointer;
  z-index: 7;
}
.dropdown-menu {
  position: absolute;
}
.lang-menu {
  margin: 7px 0;
  cursor: pointer;
}
button {
  color: white;
  font-family: 'Open Sans', Arial;
  font-size: 16px;
  cursor: pointer;
}
</style>