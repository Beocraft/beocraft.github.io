<template>
  <nav>
    <div class="border-black">
      <router-link to="/online">Online</router-link>
      |
      <router-link to="/modded">Modded</router-link>
      |
      <router-link to="/list">Players</router-link>
      |
      <a href="https://app.beocraft.net/" target="_blank">Stats</a>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/join">Join Now</router-link>
    </div>
  </nav>
  <router-view />
  <footer class="center">
    <p>&copy; {{ year }} Beocraft - All rights reserved</p>
  </footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.border-black {
  border: 2px black;
}
</style>
