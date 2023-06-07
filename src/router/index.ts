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
            description: "Homepage of the Beocraft SMP minecraft server"
        }
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        meta: {
            title: 'About',
            description: "Info about the Beocraft SMP minecraft server"
        }
    },
    {
        path: '/online',
        name: 'online',
        component: OnlineView,
        meta: {
            title: 'Online',
            description: "How many people are online at the moment?"
        }
    },
    {
        path: '/join',
        name: 'join',
        component: JoinView,
        meta: {
            title: 'Join',
            description: "How and where to join the Beocraft SMP"
        }
    },
    {
        path: '/details/:uuid',
        name: 'UserData',
        component: DetailsView,
        meta: {
            title: 'Details',
            description: "Details about the player"
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
            description: "This page does not exist"
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title && to.meta.description) {
        // Set tab title
        document.title = `${to.meta.title} :: Beocraft`;

        // Set meta
        updateMetaTag("meta-title", to.meta.title as string)
        updateMetaTag("meta-desc", to.meta.description as string)
    }
    next();
})

function updateMetaTag(id: string, content: string) {
    const meta: HTMLMetaElement = document.getElementById(id) as HTMLMetaElement;
    meta.content = content;
}

export default router
