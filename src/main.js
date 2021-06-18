// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';




Vue.use(VueSidebarMenu);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBKEmT8h_5_pzYOYVcqo09kmMTSboy5YzU',
    libraries: 'places',
  }
});
new Vue({
  render: h => h(App),
}).$mount('#app')