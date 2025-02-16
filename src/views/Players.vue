<template>
  <div v-if="error">
    <h3>Player List</h3>
    <ErrorDisplay :message="error" keyword="players" />
  </div>
  <div v-else>
    <div v-if="players">
      <h3>Displaying total of {{ players.length }} players</h3>
      <main class="flex flex-column width-restricted center">
        <article class="flex flex-row flex-distribute card card-interactable table-element" v-for="player of players"
          @click="(e) => openDetails(player.id)">
          <div>
            <img :src="`https://visage.surgeplay.com/face/32/${player.id}`">
          </div>
          <span>{{ player.name }}</span>
        </article>
      </main>
    </div>
    <div v-else class="pending dummy width-restricted center m-t-1"></div>
  </div>
</template>

<script lang="ts" setup>
import ErrorDisplay from '@/components/ErrorDisplay.vue';
import { PlayerModel } from '@/models/player.model';
import { DataService } from '@/services/data.service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const players = ref<PlayerModel[]>()
const error = ref<string>()
DataService.getPlayersList()
  .then(rsp => players.value = rsp.data)
  .catch(e => error.value = e.message)

const router = useRouter()
function openDetails(uuid: string) {
  router.push({
    path: '/details/' + uuid
  })
}
</script>
