import Vue from 'vue';

import router from './routes';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);
axios.default.baseURL = 'http://localhost:3000/';


new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app');