import './bootstrap';

import 'admin-lte/plugins/bootstrap/js/bootstrap.min.js';
import 'admin-lte/dist/js/adminlte.min.js';

import {createApp} from 'vue/dist/vue.esm-bundler.js';
import router from "./router/routes.js";

const app = createApp({});

app.use(router);

app.mount('#app');
