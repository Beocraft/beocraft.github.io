<template>
    <div v-if="error">
        <h3>Online Players</h3>
        <ErrorDisplay :message="error" keyword="online players" />
    </div>
    <div v-else>
        <div v-if="status">
            <h3>Currently {{ status.online }} out of {{ status.max }} players online</h3>
            <main class="flex flex-column width-restricted center">
                <article class="flex flex-row flex-distribute card card-interactable table-element"
                    v-for="player in status.list" @click="(e) => openDetails(player.id)">
                    <div>
                        <img :src="player.avatar">
                        <img :src="`https://visage.surgeplay.com/face/32/${player.id}`">
                    </div>
                    <span>{{ player.name }}</span>
                    <span class="mobile-hidden">{{ player.discord }}</span>
                </article>
            </main>
        </div>
        <div v-else class="pending dummy width-restricted center m-t-1"></div>
    </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount, ref } from 'vue'
import { DataService } from '@/services/data.service';
import { useRouter } from 'vue-router';
import ErrorDisplay from '@/components/ErrorDisplay.vue';

const status = ref<any>()
const error = ref<string>()
onBeforeMount(() => loadStatus())

function loadStatus() {
    DataService.getServerStatus().then(srsp => {
        status.value = srsp.data

        status.value.list.forEach((p: any) => {
            DataService.getDiscordMember(p.id).then(prsp => {
                p.discord = prsp.data.nickname
                p.avatar = prsp.data.avatar
            }).catch(e => error.value = e.message)
        })
    }).catch(e => error.value = e.message)
}

const router = useRouter()
function openDetails(uuid: string) {
    router.push({
        path: '/details/' + uuid
    })
}

// Auto reload status every 30 sec
const interval = setInterval(loadStatus, 30000)
onBeforeUnmount(() => clearInterval(interval));
</script>
