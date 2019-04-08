import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css"
import "./registerServiceWorker";
import './plugins/element.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  ElementUI,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
