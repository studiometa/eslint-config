<template>
  <div>hello world</div>
</template>

<script>
export default {
  name: 'FooBar',
  data() {
    return {
      dd: 'foo',
      isActive: false,
    };
  },
  created() {
    console.log('created');
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
