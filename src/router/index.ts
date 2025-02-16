import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import About from '@/views/About.vue';
import Players from '@/views/Players.vue';
import Online from '@/views/Online.vue';
import Join from '@/views/Join.vue';
import Details from '@/views/Details.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            title: 'About',
            description: "Info about the Beocraft SMP Minecraft server"
        }
    },
    {
        path: '/players',
        name: 'players',
        component: Players,
        meta: {
            title: 'Players',
            description: "See the list of all the players on the Beocraft SMP"
        }
    },
    {
        path: '/online',
        name: 'online',
        component: Online,
        meta: {
            title: 'Online',
            description: "How many people are online at the moment?"
        }
    },
    {
        path: '/join',
        name: 'join',
        component: Join,
        meta: {
            title: 'Join',
            description: "How and where to join the Beocraft SMP"
        }
    },
    {
        path: '/details/:uuid',
        name: 'UserData',
        component: Details,
        meta: {
            title: 'Details',
            description: "Details about the player"
        }
    },
    {
        path: '/',
        redirect: '/online'
    },
    {
        path: '/home',
        redirect: '/online'
    },
    {
        path: '/status',
        redirect: '/online'
    },
    {
        path: '/list',
        redirect: '/players'
    },
    {
        path: '/invite',
        redirect: '/join'
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/online'
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
