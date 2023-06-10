<template>
    <article class="flex flex-row flex-distribute card card-interactable table-element"
             @click="(e) => details(props.player.uuid)">
        <div>
            <img :src="props.player.avatar">
            <img :src="`https://visage.surgeplay.com/face/32/${props.player.uuid}`">
        </div>
        <span>{{ props.player.name }}</span>
        <span class="mobile-hidden">{{ props.player.nickname }}</span>
    </article>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import {DataModel} from "@/models/data.model";

export interface Props {
    player: DataModel
}

const props = defineProps<Props>();
const router = useRouter();

function details(uuid: string) {
    router.push({
        path: '/details/' + uuid
    })
}
</script>