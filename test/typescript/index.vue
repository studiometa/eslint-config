<script setup lang="ts">
  import type { Ref } from 'vue';

  type Count = Ref<number>;

  function foo() {}
</script>

<template>
  <div
    v-if="true === true"
    ref="foo"
    class="foo"
    long-props="iAmAVeryVeryLongProp"
    @click.prevent="foo">
    <!-- we need to wait before using prettier for Vue files -->
    <p>Foo</p>
  </div>
</template>

<style>
  .foo {
    display: block;
  }
</style>
