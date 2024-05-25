<template>
  <header-site></header-site>
  <main class="ms-container">

    <div class="ms-section__block">
      <div class="ms-page-title">
        <h2 class="page-header">{{ $t('Номинанты 2024') }}</h2>
        <p class="page-desc">{{ $t('Голосуйте против одной или нескольких корпораций') }}</p>
      </div>
    </div>

    <!-- Page Content -->
    <div class="ms-section__block">
      <a class="aadd" href="/add"><div class="add">+</div></a>
      <div v-if="votesData && votesData.length > 0"  id="albums">
        <ul class="filtr-btn">
          <!-- <li data-filter="all" class="active"><h6>all</h6></li>
           <li data-filter="1"><h6>fashion</h6></li>
           <li data-filter="2"><h6>urban</h6></li>
           <li data-filter="3"><h6>sport</h6></li>
           <li data-filter="4"><h6>expression</h6></li> -->
        </ul>
        <div  id="company-container" class="filtr-container row">
          <div class="item-container" v-for="company in votesData" :key="company.id">
            <router-link :to="{ path: 'vote', query: { watch: company.title }}" class="article__title">
              <div class="album-item col-md-4 filtr-item" data-category="1">
                <div class="my-flex-cont">
                  <div class="my-flex-box my-flex-box1">
                    <img :src="`/logocompany/${company.title}.jpg`" alt="logo image" class='trash_logo'>
                  </div>
                  <div class="my-flex-box my-flex-box2">
                    <h7>{{ company.title }}</h7>
                    <div class="stroke">
                      <span class="counter">antirating:</span>
                      <span class="counter">{{ company.rating }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
  <FooterSite></FooterSite>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderSite from "@/components/HeaderSite.vue";
import { mapState } from "vuex";
import FooterSite from "@/components/FooterSite.vue";

export default defineComponent({
  name: 'NomineesView',
  components: {FooterSite, HeaderSite },
  data() {
    return {
      votesData: null
    };
  },
  computed: {
    ...mapState({
      companies: "companies"
    })
  },
  async mounted() {
    //console.log("articles", this.companies)
    try {
      const response = await (this as any).$axios.get('http://localhost:3000/api/votes');
      this.votesData = response.data;
    } catch (error) {
      console.error(error);
    }
  },
});
</script>
<style>

h2 {
  font-size: calc(36px + 16 * (100vw - 992px) / 1508);
}

.page-header {
  text-transform: uppercase;
  position: relative;
  margin: 15px 0;
}

.page-desc {
  width: 50vh;
  font-size: 1.1em;
  line-height: 1.5;
  color: #fff;
  letter-spacing: .05em;
}

.ms-container {
  padding-top: 200px;
  width: 100%;
  height: 100%;
  position: relative;
}

#company-container {
  padding: 0px;
  position: relative;
}

.ms-section__block {
  width: 85%;
  margin: 0 auto 6em;
  max-width: 88em;
}

.aadd {
  color: #fff;
}

.album-item {
  padding-bottom: 1.8em;
}
.album-item a {
  padding-top: 60%;
  display: flex;
  overflow: hidden;
  position: relative;
  z-index: 9;
}

.album-item__overlay h5 {
  position: relative;
  color: #fff;
  margin: 0;
  max-width: 100%;
  padding: 1em;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
  transform: scale(1.5);
  opacity: 0;
  transition: all .3s ease;
}
.album-item:hover .album-item__img {
  transform: scale(1.1);
}
.album-item:hover .album-item__cover,
.album-item:hover .album-item__overlay h5 {
  opacity: 1;
  transform: translateZ(0);
}


.my-flex-cont {
  display: flex;
  height: 130px;
  background-color: #262626;
  border-radius: 12px;
  padding: 30px 30px 0px 30px;
  flex-grow: 1;
  min-width: 230px;
  margin: 0px;
}


.my-flex-box {
  flex: 0 1 auto;
}

.my-flex-box2 {

  flex-grow:1;
  padding: 0px 20px 20px 20px;

}

.my-flex-box2 h7 {
  font-size: 20px;
  color: #fff;
  font-weight: 600;
}

.my-flex-box2 p {

  color: #fff;
  font-size: 13px;
  text-transform: uppercase;
}

img.trash_logo{
  width: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 0;
}

.counter {
  padding: 0px;
  color: #fff;
  min-width: 30px;
  text-align: left;
}

.stroke {
  padding-top: 15px;
}

/**
 * Accordion
 */

.toggle-box + label {
  display: block;
}
.toggle-box + label + div {
  display: none;
}
.toggle-box:checked + label + div {
  display: block;

  padding:55px 0px 0px 0px;
}

.add {
  float: right;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #df1f29;
  text-align: center;
  line-height: 50px;
  font-size: 25px;
}

.filtr-container {
  transition: height .5s ease-out;
  overflow: hidden;
}

.row {
  display: flex;
  flex-wrap: wrap;

}

.col-md-4 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.ms-footer {
  width: 85%;
  max-width: 88em;
  margin: 0 auto;
  display: flex;
  font-size: 14px;
  align-items: center;
}
.ms-footer .copyright {
  padding: 1.2em 0;
  margin-left: 0;
  margin-right: auto;
  display: inline;
}

.ms-footer .copyright div {
  display: inline;
}

.ms-footer .socials {
  padding: 0;
  margin-left: auto;
  margin-right: 0;
}
.ms-footer .socials a {
  padding-left: 15px;
}

.filtr-btn {
  display: inline-block;
  margin-bottom: 2.4em;
  min-height: 40px;
}

@media (max-width: 768px) {
  .item-container {
    width: 100%;
  }
}
</style>
