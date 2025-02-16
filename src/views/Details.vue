<template>
  <div class="details center">
    <h3>Player Details</h3>
    <ErrorDisplay v-if="error" :message="error" keyword="details" />
    <div v-else>
      <table class="card p-1 center" v-if="data">
        <tbody>
          <tr>
            <th>Icon</th>
            <td>
              <img :src="data.avatar" :alt="data.tag">
              <img :src="`https://visage.surgeplay.com/face/32/${data.uuid}`" :alt="data.name">
            </td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{{ data.name }}</td>
          </tr>
          <tr>
            <th>UUID</th>
            <td>{{ data.uuid }}</td>
          </tr>
          <tr>
            <th>Discord ID</th>
            <td>{{ data.discordId }}</td>
          </tr>
          <tr>
            <th>Discord Username</th>
            <td>{{ data.tag }}</td>
          </tr>
          <tr>
            <th>Guild ID</th>
            <td>{{ data.guildId }}</td>
          </tr>
          <tr>
            <th>Skin</th>
            <td>
              <img :src="`https://visage.surgeplay.com/bust/64/${data.uuid}`" class="skin" alt="Player Skin">
            </td>
          </tr>
          <tr>
            <th>Created At</th>
            <DateFormat :date="data.createdAt" />
          </tr>
          <tr>
            <th>Statistics</th>
            <td>
              <a :href="`https://app.beocraft.net/player/${data.uuid}`" target="_blank">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="pending dummy width-restricted center m-t-1"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import DateFormat from "@/components/DateFormat.vue";
import { CacheService } from '@/services/cache.service';
import { DataModel } from '@/models/data.model';
import ErrorDisplay from '@/components/ErrorDisplay.vue';

const route = useRoute()
const uuid = String(route.params.uuid)

const data = ref<DataModel>()
const error = ref<string>()
CacheService.retrieveByUUID(uuid)
  .then(rsp => data.value = rsp.data)
  .catch(e => error.value = e.message)
</script>

<style scoped>
.skin {
  width: 64px;
}
</style>