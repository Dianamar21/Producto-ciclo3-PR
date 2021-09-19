import Vue from 'vue';

import router from './routes';
import App from './App.vue';
import vuetify from './plugins/vuetify'

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app');
