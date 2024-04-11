<script setup>
  const count = ref(0);
</script>

<template>
  <div>
    <button type="button" @click="count += 1"

    >Up</button>
    <button type="button" @click="count -= 1">         Down</button>
    <input v-model="count" type="text" readonly />
  </div>
</template>
