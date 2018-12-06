import Vue from "vue";
import './plugins/axios'
import './plugins/vuetify';
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    abrir_whatsapp: function (numW,mensaje) {
      var link = "/";
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        link = "https://api.whatsapp.com/send?phone="+numW+"&text=" + mensaje
      } else {
        link = "https://web.whatsapp.com/send?phone="+numW+"&text=" + mensaje
      }
      window.open(link);
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
