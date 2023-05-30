<template>
    <div class="join">
        <h3>You will be redirect to our Discord server</h3>
        <p>If the redirect did not work please use <a href="https://discord.gg/q3ZNyDeCcA">this link</a></p>
        <iframe src="https://discord.com/widget?id=1088934690385317928&theme=dark" width="350" height="500"
                allowtransparency="true" frameborder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                class="center"></iframe>
    </div>
</template>

<script lang="ts" setup>
import {onBeforeUnmount} from "vue";

const timeout = setTimeout(() => {
    window.location.href = 'https://discord.gg/q3ZNyDeCcA'
}, 5000)
onBeforeUnmount(() => clearTimeout(timeout));
</script>