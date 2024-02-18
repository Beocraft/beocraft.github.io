<template>
  <div class="home">
    <h3 v-if="stats">Displaying total of {{ stats.count }} players from {{ stats.guilds.count }} different
      guilds</h3>
    <main class="flex flex-column width-restricted center" v-if="data">
      <PlayerDisplay :player="d" v-for="d in data" />
    </main>
    <div v-else class="pending dummy width-restricted center m-t-1"></div>
  </div>
</template>

<script lang="ts" setup>
import { DataModel } from '@/models/data.model';
import { StatsModel } from '@/models/stats.model';
import { CacheService } from '@/services/cache.service';
import { onBeforeMount, onBeforeUnmount, ref } from 'vue';
import PlayerDisplay from "@/components/PlayerDisplay.vue";

const data = ref<DataModel[]>();
const stats = ref<StatsModel>();

function loadData() {
  CacheService.retrieveAll()
    .then(rsp => data.value = rsp.data)
  CacheService.retrieveStats()
    .then(rsp => stats.value = rsp.data)
}

// retrieve data on mount
onBeforeMount(() => loadData())

// auto update data every 15 sec
const interval = setInterval(loadData, 15000)
onBeforeUnmount(() => clearInterval(interval));
</script>
