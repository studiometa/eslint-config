<script setup lang="ts">
  import type { Ref } from 'vue';
  import { ref } from 'vue';

  type Count = Ref<number>;

  const count: Count = ref();
  count.value = 0;
</script>

<template>
  <div>
    <button type="button" @click="count += 1">Up</button>
    <button type="button" @click="count -= 1">Down</button>
    <input v-model="count" type="text" readonly />
  </div>
</template>
