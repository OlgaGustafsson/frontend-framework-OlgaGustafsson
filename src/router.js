import { createRouter, createWebHistory } from 'vue-router';
import Main from './components/Main.vue'
import Retention from './components/retention.vue';
import Interest from './components/interest.vue';
import Usage from './components/usage.vue';
import Awareness from './components/awareness.vue';

const routes = [
    { path: '/', redirect: '/retention'},
    { path: '/retention', component: Retention},
    { path: '/interest', component: Interest },
    { path: '/usage', component: Usage },
    { path: '/awareness', component: Awareness },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
