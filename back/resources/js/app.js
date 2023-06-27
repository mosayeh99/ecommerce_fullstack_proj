import './bootstrap';

import {createApp} from 'vue/dist/vue.esm-bundler.js';
import router from "./router/index.js";

const app = createApp({});

app.use(router);

app.mount('#app');
