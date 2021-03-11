<template>
  <EmptyNotification v-if="false" />
  <div class="notification-container" v-else>
    <NotificationItem v-for="(color, index) in colors" :key="index" :color="color" />
  </div>
</template>

<script>
import EmptyNotification from "../../components/EmptyNotification";
import NotificationItem from "../../components/NotificationItem";

export default {
  name: "Notifications",
  data() {
    return {
      colors: ["#0087db", "#497949", "#a94949", "#c4a949", "#0087db", "#497949"]
    };
  },
  components: {
    EmptyNotification,
    NotificationItem
  }
};
</script>

<style lang="scss" scoped>
.notification-container {
  // border: 1px solid red;
  display: grid;
  justify-items: center;
  row-gap: 2.5em;
  width: 100%;

  @media screen and (min-width: 1025px) {
    grid-template-columns: 48.5% 48.5%;
    justify-content: space-between;
  }
}
</style>
