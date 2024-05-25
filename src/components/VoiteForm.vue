<template>
 Блок голосования
</template>

<script>
export default {
  name: "VoiteForm"
}
</script>

<style scoped>

/* 2.2 Burger button */

.hamburger {
  margin-right: 0;
  margin-left: auto;
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
  width: 30px;
  height: 20px;
  vertical-align: middle;
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

/* 2.3 Collapse navigation */

.ms-nav {
  display: flex;
  align-items: center;
}
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

</style>