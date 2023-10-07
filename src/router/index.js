import { createRouter, createWebHistory } from 'vue-router';
import AutorizationPage from 'Pages/AutorizationPage.vue'
import TableOrdersPage from 'Pages/TableOrdersPage.vue'
import NewOrder from 'Pages/NewOrder.vue'
import ThanxPage from 'Pages/ThanxPage.vue'

const routes = [
    {
        path: '/',
        component: AutorizationPage,
        name: 'main'
    },
    {
        path: '/tables',
        component: TableOrdersPage,
        name: 'tables'
    },
    {
        path: '/neworder',
        component: NewOrder,
        name: 'neworder'
    },
    {
        path: '/thanx',
        component: ThanxPage,
        name: 'thanx'
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