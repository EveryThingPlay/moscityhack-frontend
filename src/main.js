import * as icons from '@mdi/js';
import { createApp } from 'vue';
import App from './App.vue';
import index from './router';
import affiliate from './router/affiliate';
import manager from './router/manager';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

loadFonts();

const host = window.location.host;
const parts = host.split('.');
const domainLength = 3; // route1.example.com => domain length = 3

const router = () => {
  let routes;
  if (parts.length === domainLength - 1 || parts[0] === 'www') {
    routes = index;
  } else if (parts[0] == 'affiliate') {
    routes = affiliate;
    console.log(routes);
  } else if (parts[0] == 'manager') {
    routes = manager;
  } else {
    // If you want to do something else just comment the line below
    //routes = index;
  }
  return routes;
};

createApp(App).use(router()).use(vuetify).use(icons).mount('#app');
