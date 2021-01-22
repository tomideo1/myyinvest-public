<template>
  <div class="card shadow-3" style="border-color: white;border-radius: 20px;">
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "mainCard"
};
</script>

<style scoped></style>
