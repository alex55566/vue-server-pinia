import { createRouter, createWebHistory } from 'vue-router';
import MainPage from 'Pages/MainPage.vue'
import QuestionsPage from 'Pages/QuestionsPage.vue'

const routes = [
    {
        path: '/',
        component: MainPage,
        name: 'main'
    },
    {
        path: '/questions',
        component: QuestionsPage,
        name: 'questions'
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'main' }
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(),

})

export default router