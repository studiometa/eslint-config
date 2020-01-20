<template>
  <div
    ref="foo"
    class="foo"
    long-props="iAmAVeryVeryLongProp"
    @click.prevent="foo">
    <!-- we need to wait before using prettier for Vue files -->
    <p>Foo</p>
  </div>
</template>

<script>
  export default {
    name: 'Index',
  };
</script>

<style>
.foo {

}
</style>
