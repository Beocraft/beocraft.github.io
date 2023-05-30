<template>
    <div class="online" v-if="status">
        <h3>Currently {{ status.players.online }} out of {{ status.players.max }} players online</h3>
        <table class="center" v-if="status.players.sample">
            <tr>
                <th>icon</th>
                <th>name</th>
                <th>uuid</th>
                <th>action</th>
            </tr>
            <tr v-for="player in status.players.sample">
                <td>
                    <img :src="`https://crafatar.com/avatars/${player.id}`">
                </td>
                <td>{{ player.name }}</td>
                <td>{{ player.id }}</td>
                <td>
                    <button type="button" @click="(e)=>details(player.id)">details</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts" setup>
import {onBeforeMount, onBeforeUnmount, ref} from 'vue'
import {LinkService} from "@/services/link.service";
import {StatusModel} from "@/models/status.model";
import {useRouter} from "vue-router";

const status = ref<StatusModel>();
const router = useRouter();
onBeforeMount(() => loadStatus())

function loadStatus() {
    LinkService.retrieveStatus()
        .then(rsp => status.value = rsp.data)
}

// Auto reload status every 3 sec
const interval = setInterval(loadStatus, 3000)
onBeforeUnmount(() => clearInterval(interval));

function details(uuid: string) {
    router.push({
        path: '/details/' + uuid.replaceAll('-', '')
    })
}
</script>
