<template>
  <section class="section-wrap">
    <p class="section-title"><slot name="section_name">Something expected here!!!</slot></p>

    <div class="chart-group">
      <div class="one-off">
        <div class="subject-title"><slot name="title">Something expected here!!!</slot></div>
        <div class="chart"></div>
        <div class="value"><slot name="value">Something missing!!!</slot></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
