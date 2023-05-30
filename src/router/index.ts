import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OnlineView from '../views/OnlineView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import DetailsView from '../views/DetailsView.vue'
import AboutView from "@/views/AboutView.vue";
import JoinView from "@/views/JoinView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        meta: {
            title: 'About'
        }
    },
    {
        path: '/online',
        name: 'online',
        component: OnlineView,
        meta: {
            title: 'Online'
        }
    },
    {
        path: '/join',
        name: 'join',
        component: JoinView,
        meta: {
            title: 'Join'
        }
    },
    {
        path: '/details/:uuid',
        name: 'UserData',
        component: DetailsView,
        meta: {
            title: 'User'
        }
    },
    {
        path: '/status',
        redirect: '/online'
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        path: '/invite',
        redirect: '/join'
    },
    {
        path: '/:catchAll(.*)',
        name: 'notfound',
        component: NotFoundView,
        meta: {
            title: 'Not Found'
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title)
        document.title = `${to.meta.title} :: Beocraft`;
    next();
})

export default router
