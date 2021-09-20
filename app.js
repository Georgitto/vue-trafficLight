import Vue from 'vue';
import VueRouter from 'vue-router';
import RedLight from './views/RedLight.vue'
import YellowLight from './views/YellowLight.vue'
import GreenLight from './views/GreenLight.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/red'},
    {path:'/red', component: RedLight,},
    {path:'/yellow', component: YellowLight,},
    {path:'/green', component: GreenLight,}
]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app', 
    components: {
        RedLight,
        GreenLight,
        YellowLight,
    },
    data: {
        message: 'Traffic Light'
    },
    router
});