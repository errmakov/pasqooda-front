<template>
  <v-app>
    <v-container fluid style="max-width:1200px;">
      <appHeader />
      <router-view />
    </v-container>
    <appFooter />
  </v-app>
  
</template>




<script>
import appHeader from '@/components/header.vue';
import appFooter from '@/components/footer.vue';

export default {
  name: 'App',
  components: {
    appHeader,
    appFooter
  },
  mounted() {
    this.$store.dispatch('initState')
  }

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');
  @import url('https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css');
  @import url('https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css');
  @import './assets/styles/app.css';
</style>


