<template>
  <v-app id="app">
    <Header />
    <v-content>
      <v-container class="content-padding">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from '~/components/Header'

export default {
  name: 'Default',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .content-padding{
    padding-top: 24px;
    padding-left: 20px;
    padding-right: 20px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .content-padding{
    padding-top: 40px;
    padding-left: 80px;
    padding-right: 80px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .content-padding{
    padding-top: 40px;
    padding-left: 160px;
    padding-right: 160px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .content-padding{
    padding-top: 40px;
    padding-left: 160px;
    padding-right: 160px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .content-padding{
    padding-top: 40px;
    padding-left: 200px;
    padding-right: 200px;
  }
}

</style>
