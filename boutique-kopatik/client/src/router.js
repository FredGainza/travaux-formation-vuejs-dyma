import Vue from 'vue';
import VueRouter from 'vue-router';
import User from './components/features/User/User';
import Admin from './components/features/Admin/Admin';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '', redirect: '/shop-kopatik'},
        { path: '/shop-kopatik', component: User },
        { path: '/admin-kopatik', component: Admin },
        { path: '*', redirect: '/shop-kopatik'}
    ]
});

export default router;