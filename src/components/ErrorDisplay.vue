<template>
    <div>
        <p class="no-margin">Something went wrong while loading {{ keyword }}!</p>
        <p class="no-margin">{{ message }}</p>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
    message: String,
    keyword: String
})
const { message, keyword } = toRefs(props)
</script>