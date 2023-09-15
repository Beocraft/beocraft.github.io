<template>
    <div class="about">
        <h3>Beocraft - The Vanilla SMP</h3>
        <main class="card width-restricted center">
            <p class="center">Here is a short list of server features:</p>
            <ul class="no-bullet">
                <li v-if="status">Version: {{status.version.name}}</li>
                <li v-if="status">Max slots: {{status.players.max}}</li>
                <li>No cheating, No griefing, No stealing</li>
                <li>ONLY paid clients (no crack)</li>
                <li>ONLY java edition (no crossplay)</li>
                <li>Chunk claims (/chunk)</li>
                <li>/tpa /home /spawn /back</li>
                <li>Player nicknames (/nick)</li>
                <li>Fast Leaf Decay</li>
                <li>Dragon drops elytra</li>
                <li>Phantoms don't spawn</li>
                <li>No creaper, ghast and enderman grief</li>
                <li>Bats drop membranes</li>
                <li>Hosted 24/7 in Europe</li>
                <li>Discord based authentication and webhooks</li>
            </ul>
        </main>
        <p>
            <router-link to="/join">Join our Discord server</router-link>
        </p>
    </div>
</template>

<script setup lang="ts">
import {CacheService} from "@/services/cache.service";
import {ref} from "vue";
import {StatusModel} from "@/models/status.model";

const status = ref<StatusModel>();
CacheService.retrieveStatus("play.beocraft.net")
    .then(rsp => status.value = rsp.data)
</script>