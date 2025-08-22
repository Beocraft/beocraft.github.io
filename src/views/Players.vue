<template>
  <div v-if="players">
    <h3>Displaying total of {{ players.length }} players</h3>
    <PlayerList :players="players" />
  </div>
  <div v-else-if="error">
    <h3>Player List</h3>
    <ErrorDisplay :message="error" keyword="players" />
  </div>
  <div v-else class="pending dummy width-restricted center m-t-1"></div>
</template>

<script lang="ts" setup>
import ErrorDisplay from '@/components/ErrorDisplay.vue';
import PlayerList from '@/components/PlayerList.vue';
import { DataModel } from '@/models/data.model';
import { CacheService } from '@/services/cache.service';
import { ref } from 'vue';

const players = ref<DataModel[]>()
const error = ref<string>()
CacheService.getDataList()
  .then(rsp => players.value = rsp.data)
  .catch(e => error.value = e.message)
</script>
