<template>
    <main class="flex flex-column width-restricted center">
        <article class="flex flex-row flex-distribute card card-interactable table-element" v-for="player in players"
            @click="(e) => openDetails(player.uuid)">
            <div>
                <img :src="player.avatar">
                <img :src="`https://visage.surgeplay.com/face/32/${player.uuid}`">
            </div>
            <span>{{ player.name }}</span>
            <span class="mobile-hidden">{{ player.tag }}</span>
        </article>
    </main>
</template>

<script lang="ts" setup>
import { DataModel } from '@/models/data.model';
import { cleanUUID } from '@/utils';
import { useRouter } from 'vue-router';

export interface PlayerListProps {
    players: DataModel[]
}

const { players } = defineProps<PlayerListProps>()

const router = useRouter()
function openDetails(uuid: string) {
    router.push({
        path: '/details/' + cleanUUID(uuid)
    })
}
</script>