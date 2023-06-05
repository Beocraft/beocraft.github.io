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
            title: 'Home',
            "og:title": "Home",
            "og:description": "Homepage of the Beocraft SMP minecraft server."
        }
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        meta: {
            title: 'About',
            "og:title": "About",
            "og:description": "Info on the Beocraft SMP minecraft server."
        }
    },
    {
        path: '/online',
        name: 'online',
        component: OnlineView,
        meta: {
            title: 'Online',
            "og:title": "Beocraft status",
            "og:description": "How many people are online at the moment?"
        }
    },
    {
        path: '/join',
        name: 'join',
        component: JoinView,
        meta: {
            title: 'Join',
            "og:title": "Join Beocraft",
            "og:description": "How and where to join the Beocraft SMP minecraft server."
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
            title: 'Not Found',
            "og:title": "Not Found",
            "og:description": "This page does not exist."
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
