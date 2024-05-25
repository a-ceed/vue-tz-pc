<template>
  <div class="ms-footer">
    <div class="copyright"><div><a href="/" class="footerlink">International Trash Award</a></div> <div><a href="/privacy" class="footerlink">Privacy Policy</a></div><div><a href="/terms" class="footerlink">Terms and Conditions</a></div></div>
    <ul class="socials">
      <li><a href="#" class="socicon-facebook"></a></li>
      <li><a href="#" class="socicon-twitter"></a></li>
      <li><a href="#" class="socicon-instagram"></a></li>
      <li><a href="#" class="socicon-youtube"></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterSite"
}
</script>

<style scoped>
.ms-footer {
  position: fixed;
  bottom: 0;
  width: 85%;
  max-width: 88em;
  margin: 0 auto;
  display: flex;
  font-size: 14px;
  align-items: center;
  padding-left: 25%;
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
.footerlink {
  color:#9f9f9f;
  font-weight: normal;
  padding-left: 20px;
  float: left;
}
ul {
  list-style: none;
}
</style>