<template>
  <header-site></header-site>
  <router-view></router-view>
  <!-- Container -->
  <main class="ms-container">
    <!-- Page Title -->
    <div class="ms-section__block">
      <div class="ms-page-title">
        <h2 class="page-header">{{ $t('Спасибо за неравнодушие') }}</h2>
        <p class="page-desc"></p>
      </div>
    </div>

    <div class="ms-section__block">

    </div>

    <!-- Donat -->
    <div class="ms-section__block">
      <div id="ms-blog-post" class="row">
        <div class="col-md-8">
          <p>{{ $t('Будем благодарны если поделитесь нашим сайтом с коллегами и друзьями.') }}</p>
          <p>{{ $t('Сайт международной мусорной премии за выдающийся вклад в убийство планеты') }}</p>
          <a href="index.html">https://internationaltrashaward.org</a>
          <br>
          <!--
                <p>Вы можете стать меценатом международной мусорной премии, ваши деньги пойдут на информационную политику, направленную против экологического беспредела корпораций.
                </p>
                <br>

  <a href="">
  <div class="paypal">
    <img src="assets/images/international-trash-avard-donat-paypal.gif">

  </div>
  </a>

  <a href="">
  <div class="patreon">
    <img src="assets/images/international-trash-avard-donat-patreon.png">

  </div>
  </a>
   End Donat -->

        </div>
      </div>
    </div>

    <!-- Social -->

    <!-- End Form <div class="ms-section__block center-block align-center">
<h6>Share</h6>
<ul class="socials share-links">
<li><a href="https://vk.com" class="socicon-facebook"></a></li>
<li><a href="#" class="socicon-twitter"></a></li>
<li><a href="#" class="socicon-instagram"></a></li>
</ul>
</div>

-->


  </main>
  <footer-site></footer-site>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderSite from "@/components/HeaderSite.vue";
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import FooterSite from "@/components/FooterSite.vue";

export default defineComponent({
  name: 'ThanksSite',
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
    async Send() {

      try {
        const data = {
          title: this.companyName,
        };

        const response = await (this as any).$axios.post('http://localhost:3000/api/votes', data);

        // Редирект на другую страницу
        // Добавляем задержку в 1 секунду перед редиректом
        setTimeout(async () => {
          await this.$router.push('/nominees');
          console.log('Редирект выполнен успешно');
        }, 1500);

      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>
<style>

body {
  overflow-y: auto !important;
}
/**
 * 3. Pages Style
 */
h2 {
  font-size: calc(36px + 16 * (100vw - 992px) / 1508);
}

.page-desc {
  width: 50vh;
  font-size: 1.1em;
  line-height: 1.5;
  color: #fff;
  letter-spacing: .05em;
}

.ms-container {
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 12em;
}
.ms-section__block {
  width: 85%;
  max-width: 55em;
  margin: 0 auto 6em;
}
.ms-page-title span {
  text-transform: uppercase;
  letter-spacing: .15em;
  color: #df1f29;
}
.page-header {
  text-transform: uppercase;
  position: relative;
  margin: 15px 0;
}
a {
  color: #6f6f6f;
  text-decoration: none;
}
p {
  font-size: calc(16px + 2 * (100vw - 992px) / 1508);
  line-height: 1.8;
  font-weight: normal;
}
</style>
