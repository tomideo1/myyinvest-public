<template>
  <!-- <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27">
    <g id="Group_12" data-name="Group 12" transform="translate(-402.6 -257.999)">
      <text id="N" transform="translate(409.725 277.999)" fill="#046610" font-size="19.231" font-family="Poppins-Regular, Poppins"><tspan x="0" y="0">N</tspan></text>
      <text id="I" transform="translate(409.6 266.444) rotate(90)" fill="#046610" font-size="19.231" font-family="Poppins-Regular, Poppins"><tspan x="0" y="0">I</tspan></text>
      <text id="I-2" data-name="I" transform="translate(409.6 271.408) rotate(90)" fill="#046610" font-size="19.231" font-family="Poppins-Regular, Poppins"><tspan x="0" y="0">I</tspan></text>
    </g>
  </svg> -->
  <svg width="19" height="36" viewBox="0 0 19 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 26H13.816L5.032 12.68V26H2.848V9.248H5.032L13.816 22.544V9.248H16V26Z" :fill="color" />
    <line y1="14" x2="19" y2="14" :stroke="color" stroke-width="2" />
    <line y1="20" x2="19" y2="20" :stroke="color" stroke-width="2" />
  </svg>
</template>

<script>
export default {
  name: "greenNaira",
  props: {
    color: {
      type: String,
      default: "#068503"
    }
  }
};
</script>
