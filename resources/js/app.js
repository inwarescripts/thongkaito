require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store'
import App from './App.vue'
import routes from './routes';
import './web/components';
import './admin/components';
import VueI18n from 'vue-i18n'
import messages from './admin/messages';
import VCalendar from 'v-calendar';
import {ValidationObserver, ValidationProvider, extend, localize} from 'vee-validate';
//Font AwesomeIcon
import './awesome'
import * as rules from 'vee-validate/dist/rules';

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
Vue.use(VueI18n)
const i18n = new VueI18n({
	locale: 'ja',
	messages,
})

new Vue({
	router,
	store,
	i18n,
	render: h => h(App),
}).$mount('#app')