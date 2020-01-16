require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store'
import App from './App.vue'
import routes from './routes';
import './components';
import VueI18n from 'vue-i18n'
import messages from './messages';
import VCalendar from 'v-calendar';
import {extend, ValidationObserver, ValidationProvider} from 'vee-validate';
//Font AwesomeIcon
import './awesome'
import * as rules from 'vee-validate/dist/rules';
import PortalVue from 'portal-vue'
Vue.use(PortalVue)

Vue.use(VCalendar, {});
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
    });
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.config.productionTip = false
Vue.config.devtools = false
export const router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('admin/login')
    } else {
        next()
    }
})

//Handle 401 error
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        store.commit('logout');
        localStorage.removeItem('admin-token');
        router.push({name: 'auth.login'});
    }
    if (error.response.status === 404) {
        router.push({name: 'not.found'});
    }
    if (error.response.status === 403) {
        router.push({name: 'dashboard'});
    }
    return Promise.reject(error);
});

Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'en',
    messages,
})

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app')