<template>
  <div class="online" v-if="status">
    <h3>Currently {{ status.players.online }} out of {{ status.players.max }} players online</h3>
    <main class="flex flex-column width-restricted center" v-if="status.players.sample">
      <article class="flex flex-row flex-distribute card card-interactable table-element" v-for="player in status.players.sample" @click="(e)=>details(player.id)">
        <img :src="`https://visage.surgeplay.com/face/32/${player.id}`">
        <span>{{ player.name }}</span>
      </article>
    </main>
  </div>
  <div v-else class="pending dummy width-restricted center m-t-1"></div>
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
