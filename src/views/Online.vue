<template>
    <div class="namemc">
        <iframe style="width:728px;height:90px;max-width:100%;border:none;display:block;margin:auto"
            src="https://namemc.com/server/play.beocraft.net/embed" width="728" height="90"></iframe>
    </div>
    <div v-if="error">
        <h3>Online Players</h3>
        <ErrorDisplay :message="error" keyword="online players" />
    </div>
    <div v-else>
        <div v-if="status">
            <h3>Currently {{ status.online }} out of {{ status.max }} players online</h3>
            <PlayerList :players="status.list" />
        </div>
        <div v-else class="pending dummy width-restricted center m-t-1"></div>
    </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount, ref } from 'vue'
import { DataService } from '@/services/data.service';
import ErrorDisplay from '@/components/ErrorDisplay.vue';
import PlayerList from '@/components/PlayerList.vue';

const status = ref<any>()
const error = ref<string>()
onBeforeMount(() => loadStatus())

function loadStatus() {
    DataService.getServerStatus().then(srsp => {
        status.value = srsp.data

        status.value.list.forEach((p: any) => {
            DataService.getDiscordMember(p.id).then(prsp => {
                p.tag = prsp.data.nickname
                p.avatar = prsp.data.avatar
                p.uuid = p.id
            }).catch(e => error.value = e.message)
        })
    }).catch(e => error.value = e.message)
}

// Auto reload status every 30 sec
const interval = setInterval(loadStatus, 30000)
onBeforeUnmount(() => clearInterval(interval));
</script>
