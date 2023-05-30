<template>
  <div class="details">
    <h3>Player details</h3>
    <table class="center" v-if="player">
      <tr>
        <th>icon</th>
        <td>
          <img :src="player.avatar">
          <img :src="`https://crafatar.com/avatars/${player.uuid}`">
        </td>
      </tr>
      <tr>
        <th>name</th>
        <td>{{ player.name }}</td>
      </tr>
      <tr>
        <th>uuid</th>
        <td>{{ player.uuid }}</td>
      </tr>
      <tr>
        <th>discord_id</th>
        <td>{{ player.discordId }}</td>
      </tr>
      <tr>
        <th>tag</th>
        <td>{{ player.tag }}</td>
      </tr>
      <tr>
        <th>nickanme</th>
        <td>{{ player.nickname }}</td>
      </tr>
      <tr>
        <th>guild_id</th>
        <td>{{ player.guildId }}</td>
      </tr>
      <tr>
        <th>skin</th>
        <td>
          <img :src="`https://crafatar.com/renders/body/${player.uuid}`" class="skin">
        </td>
      </tr>
      <tr>
        <th>created_at</th>
        <td>{{ player.createdAt }}</td>
      </tr>
      <tr>
        <th>cached_at</th>
        <td>{{ player.cachedAt }}</td>
      </tr>
    </table>
    <p v-else>No data found for player {{uuid}}</p>
  </div>
</template>

<script lang="ts" setup>
import {MainService} from '@/services/cache.service';
import {DataModel} from '@/models/data.model';
import {ref} from 'vue';
import {useRoute} from 'vue-router';

const route: any = useRoute()
const uuid = route.params.uuid;
const player = ref<DataModel>()

MainService.retrieveByUuid(uuid).then(rsp => {
  player.value = rsp.data
})
</script>

<style>
.skin {
  width: 64px;
}
</style>