require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueSweetalert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2)


import App from './components/App.vue'

import routes from './routes'


Vue.component('pagination', require('laravel-vue-pagination'));



const app = new Vue({
    el: '#app',
    components : { App },
    router: new VueRouter(routes)
});
