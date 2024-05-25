<template>
  <header-site></header-site>
  <router-view></router-view>
  <!-- Container -->
  <main class="ms-container">
    <!-- Page Title -->
    <div class="ms-section__block">
      <div class="ms-page-title">
        <h2 class="page-header">{{ $t('Международная мусорная премия') }}</h2>
        <p class="page-desc">{{ $t('Премия за выдающийся вклад в убийство планеты') }}</p>
      </div>
    </div>
    <!-- Page Content -->
    <div class="ms-section__block">
      <div id="about" class="row">
        <div class="about__img col-md-12">
        </div>
        <div class=" center-block">
          <div class="about__info col-md-8">
            <p><img :src="`img-md.jpg`" alt="international Trash Award" class='illustration'></p>
            <p>{{ $t('Мы не вручаем статуэтки и денежные призы победителям.') }}</p>
            <p>{{ $t('В качестве "награды" мы сообщаем клиентам бренда о его губительном воздействии на природу') }}</p>
            <p>{{ $t('Мы призываем бойкотировать продукцию брендов, работающих на принципах экологического мородерства.') }}</p>
            <p>{{ $t('Наши совместные усилия направлены на распространение правдивой научной информации в условиях тотального гринвошинга, применяемого транснациональными мусорными корпорациями.') }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer-site></footer-site>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderSite from "@/components/HeaderSite.vue";
import { useRoute } from "vue-router";
import FooterSite from "@/components/FooterSite.vue";

export default defineComponent({
  name: 'AboutSite',
  components: {FooterSite, HeaderSite },
  data() {
    return {
      companyName: null as string | null
    };
  },
  async mounted() {
    const route = useRoute();
    this.companyName = route.query.watch as string | null;
  },
  methods: {
  },
});
</script>
<style scoped lang="sass">
body
  overflow-y: auto !important

h2
  font-size: calc(36px + 16 * (100vw - 992px)/1508)

.page-desc
  width: 50vh
  font-size: 1.1em
  line-height: 1.5
  color: #fff
  letter-spacing: .05em

.illustration
  width: 85%
  max-width: 55em

.ms-container
  width: 100%
  height: 100%
  position: relative
  padding-top: 12em

.ms-section__block
  width: 85%
  max-width: 55em
  margin: 0 auto 6em

.ms-page-title span
  text-transform: uppercase
  letter-spacing: .15em
  color: #df1f29

.page-header
  text-transform: uppercase
  position: relative
  margin: 15px 0

a
  color: #6f6f6f
  text-decoration: none

p
  line-height: 1.8
  font-weight: normal
</style>
