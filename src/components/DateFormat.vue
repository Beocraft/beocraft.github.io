<template>
  <td class="date">{{ formatDate(date) }}</td>
</template>

<script setup lang="ts">
import {toRefs} from 'vue'

const props = defineProps({
  date: String
});
const {date} = toRefs(props);

function formatDate(timestamp: any) {
  const date = new Date(timestamp)
  return `${addLeadingZeros(date.getHours())}:${addLeadingZeros(date.getMinutes())} ${addLeadingZeros(date.getDate())}-${addLeadingZeros(date.getMonth())}-${date.getFullYear()}`
}

function addLeadingZeros(num: number) {
  return String(num).padStart(2, '0');
}
</script>