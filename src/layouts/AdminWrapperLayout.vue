<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
export default {
  name: "AdminWrapperLayout",

  computed: {
    layout() {
      const layout = this.$route.meta.layout;
      if (layout) {
        return () => import(`@/layouts/${layout}.vue`);
      }

      return `div`;
    }
  }
};
</script>

<style scoped></style>
