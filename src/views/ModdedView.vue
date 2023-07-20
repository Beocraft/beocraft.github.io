<template>
  <div class="online" v-if="status">
    <h3>All The Mods 8</h3>
    <h3>Currently {{ status.players.online }} out of {{ status.players.max }} players online</h3>
    <main class="flex flex-column width-restricted center" v-if="status.players.sample">
      <PlayerDisplay :player="player" v-for="player in status.players.sample"/>
    </main>
  </div>
  <div v-else class="pending dummy width-restricted center m-t-1"></div>
</template>

<script lang="ts" setup>
import {onBeforeMount, onBeforeUnmount, ref} from 'vue'
import {StatusService} from "@/services/status.service";
import {StatusModel} from "@/models/status.model";
import PlayerDisplay from "@/components/PlayerDisplay.vue";

const status = ref<StatusModel>();
onBeforeMount(() => loadStatus())

function loadStatus() {
  StatusService.retrieveModdedStatus()
      .then(rsp => status.value = rsp.data)
}

// Auto reload status every 15 sec
const interval = setInterval(loadStatus, 15000)
onBeforeUnmount(() => clearInterval(interval));
</script>
