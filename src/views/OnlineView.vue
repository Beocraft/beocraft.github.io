<template>
    <div class="online" v-if="status">
        <h3>Minecraft 1.20.4</h3>
        <h3>Currently {{ status.online }} out of {{ status.max }} players online</h3>
        <main class="flex flex-column width-restricted center" v-for="player in status.list">
            <article class="flex flex-row flex-distribute card card-interactable table-element">
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
</template>

<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount, ref } from 'vue'
import { PlayService } from '@/services/play.service';

const status = ref<any>();
onBeforeMount(() => loadStatus())

function loadStatus() {
    PlayService.getPlayerStatus().then(srsp => {
        status.value = srsp.data

        status.value.list.forEach((p: any) => {
            PlayService.getUser(p.id).then(prsp => {
                p.discord = prsp.data.nickname
                p.avatar = prsp.data.avatar
            })
        });
    })
}

// Auto reload status every 15 sec
const interval = setInterval(loadStatus, 15000)
onBeforeUnmount(() => clearInterval(interval));
</script>
