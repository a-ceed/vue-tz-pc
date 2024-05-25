<template>
  <header-site></header-site>
  <router-view></router-view>
  <!-- Container -->
  <main id="vote-container" class="ms-container">
    <div class="ms-section__block">
      <div class="ms-page-title">
        <h2 class="page-header">{{ companyName }}</h2>
        <div class="post-item__date"><a href="/nominees" title="link">&#8592; {{ $t('Номинанты') }}</a></div>
      </div>
    </div>
    <!-- Page Content -->
    <div class="ms-section__block">
      <div id="ms-blog-post" class="row">
        <div class="col-md-8">
          <!-- Form -->
          <form id="form" action="https://docs.google.com/forms/d/e/1FAIpQLSeNGrZ0prkxw24jesu9K3l-BDmsNYro-zjOc5pA4uCDu5jFMQ/formResponse"
                method="post" target="hidden_iframe" onsubmit="submitted=true;">
            <div class="row">
              <div id="info"></div>
<!--              <div class="form-group col-md-12">-->
<!--                <input name="entry.1181447888" type="text" class="form-control counrty-form" value="${value}" autocomplete="off">-->
<!--              </div>-->
              <div class="form-group col-md-12">
                <input disabled name="entry.363729782" type="text" class="form-control" v-model="companyName" placeholder="Name*" autocomplete="off">
              </div>
              <div class="form-group col-md-12">
                <input name="entry.990117292" type="text" class="form-control" id="cl" :placeholder="$t('Ваше имя')" autocomplete="off">
              </div>
              <div class="form-group col-md-12">
                <input name="entry.1079516199" type="text"  class="form-control" :placeholder="$t('Ваша страна')" autocomplete="off">
              </div>
              <div class="form-group col-md-12">
                <input name="entry.1687308716" type="text"  class="form-control" :placeholder="$t('Ссылка на ваш блог(по желанию)')" autocomplete="off">
              </div>
              <div class="form-group col-md-12">
                <input name="entry.1165884763" type="email" class="form-control" :placeholder="$t('Электронная почта')">
              </div>
              <div class="form-group col-md-12">
                <textarea name="entry.1121191870" class="form-control" id="message" :placeholder="$t('Поясните вашу позицию')"></textarea>
              </div>
              <div class="col-md-12">
                <div class="formname">
                  <input id="checkbox" type="checkbox" name="checkbox" onchange="document.getElementById('submit').disabled = !this.checked;" />
                  <button class="ms-button" @click="Send">{{ $t('Отправить') }}</button>
                </div>
              </div>
            </div>
          </form>
          <iframe name="hidden_iframe" style="display:none;"></iframe>
        </div>
      </div>
    </div>
  </main>
  <footer-site></footer-site>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderSite from "@/components/HeaderSite.vue";
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'VotePage',
  components: { HeaderSite },
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
          await this.$router.push('/thanks');
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

.ms-container {
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 12em;
  margin-left: 0;
  margin-right: 0;
}

.row {
  margin-right: 15px;
  margin-left: 5px;
  display: flex;
  flex-wrap: wrap;
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

/**
 * 9. Contact
 */

.form-group {
  position: relative;
  margin: 0;
  transition: border-color .3s ease;
}

.col-md-12 {
  width: 100%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.form-control {
  position: relative;
  display: block;
  width: 100%;
  padding: 0 1em;
  height: 34px;
  font-size: calc(16px + 2 * (100vw - 992px) / 1508);
  color: #151515;
  font-weight: 400;
  margin-bottom: 2em;
  background-image: none;
  border: 1px solid #555;
}
#message {
  min-height: 150px;
  max-height: 800px;
  max-width: 100%;
  min-width: 100%;
  padding: 10px 14px;
}
label.error {
  position: absolute;
  bottom: 1.2em;
  font-size: 12px;
  color: #df1f29;
}

/* 1.3 Button */

.ms-button {
  color: #fff;
  background-color: black;
  display: inline-block;
  position: relative;
  padding: .5em 2em;
  margin-bottom: 0;
  font-weight: 400 !important;
  font-size: 14px;
  letter-spacing: .15em;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  text-decoration: none;
  border: solid 1px;
  transition: color .4s ease;
}
.ms-button:after {
  position: absolute;
  display: block;
  content: attr(data-title);
  padding: 7px 0;
  font-size: 14px;
  left: 0;
  top: 0;
  width: 0%;
  color: #fff;
  text-indent: 1rem;
  transition: all .3s ease;
  overflow: hidden;
  border: none;
  bottom: 0;

  letter-spacing: .15em;
}
.ms-button:hover {
  color: #df1f29;
}
.ms-button:active::after,
.ms-button:focus::after,
.ms-button:hover::after {
  width: 100%;
  padding-right: 25px;
}

.formname input[type=checkbox] {
  display:none;
}
.formname input[type=checkbox] + label {
  display: block;
  position: relative;
  margin: 12px 0 30px 30px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
}
.formname input[type=checkbox] + label:hover {
  color:#fff;
}
.formname input[type=checkbox] + label:before {
  position: absolute;
  content: '';
  width: 22px;
  height: 22px;
  line-height: 22px;
  left: -30px;
  border: 2px solid #808080;
}
.formname input[type=checkbox]:checked + label:before{
  content: '\2714';
  color:#fff;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  border: 2px solid #fff;
}
.formname input[type=submit] {
  display: none;
  cursor: pointer;

}
.formname input[type=submit]:hover {
  background: #fff;
}
.formname input[disabled] {
  opacity: .2;
  cursor: not-allowed;
}
/* End Politics flag */

h2 {
  font-size: calc(36px + 16 * (100vw - 992px) / 1508);
}

a {
  color: #df1f29;
  text-decoration: none;
}


</style>
