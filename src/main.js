import Vue from "vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import { VueReCaptcha } from 'vue-recaptcha-v3';
import { config } from './config';

Vue.prototype.appConfig = config[process.env.NODE_ENV||'development'];


Vue.config.productionTip = false;

Vue.use(VueReCaptcha, { siteKey: '6LdpD_gUAAAAAOvcFYzJki1dz8ZOpQQ5uVxS7BxL' })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
