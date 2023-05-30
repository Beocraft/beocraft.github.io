<template>
    <div class="home">
        <h3 v-if="stats">Displaying total of {{ stats.count }} players from {{ stats.guilds.count }} different
            guilds</h3>
        <table id="player-table" class="center" v-if="data">
            <tr>
                <th>icon</th>
                <th>minecraft</th>
                <th>discord</th>
                <th>created_at</th>
                <th>cached_at</th>
                <th>actions</th>
            </tr>
            <tr v-for="d in data">
                <td class="icon">
                    <img :src="d.avatar">
                    <img :src="`https://crafatar.com/avatars/${d.uuid}`">
                </td>
                <td class="minecraft">{{ d.name }}</td>
                <td class="discord">{{ d.nickname }}</td>
                <td class="created_at">{{ formatDate(d.createdAt) }}</td>
                <td class="cached_at">{{ formatDate(d.cachedAt) }}</td>
                <td>
                    <button type="button" class="details" @click="(e) => details(d.uuid)">details</button>
                    <button type="button" class="update" @click="(e) => update(d.uuid)">update</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts" setup>
import {DataModel} from '@/models/data.model';
import {StatsModel} from '@/models/stats.model';
import {MainService} from '@/services/cache.service';
import {onBeforeMount, onBeforeUnmount, ref} from 'vue';
import {useRouter} from 'vue-router';

const data = ref<DataModel[]>();
const stats = ref<StatsModel>();
const router = useRouter();

function loadData() {
    MainService.retrieveAll()
        .then(rsp => data.value = rsp.data)
    MainService.retrieveStats()
        .then(rsp => stats.value = rsp.data)
}

function formatDate(timestamp: any) {
    const date = new Date(timestamp)
    return `${addLeadingZeros(date.getHours())}:${addLeadingZeros(date.getMinutes())} ${addLeadingZeros(date.getDate())}-${addLeadingZeros(date.getMonth())}-${date.getFullYear()}`
}

function addLeadingZeros(num: number) {
    return String(num).padStart(2, '0');
}

function details(uuid: string) {
    router.push({
        path: '/details/' + uuid
    })
}

function update(uuid: any) {
    MainService.updatePlayer(uuid)
        .then(rsp => loadData())
}

// retrieve data on mount
onBeforeMount(() => loadData())

// auto update data every 15 sec
const interval = setInterval(loadData, 15000)
onBeforeUnmount(() => clearInterval(interval));
</script>
